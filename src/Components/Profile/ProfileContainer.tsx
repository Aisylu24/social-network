import React, {ComponentType} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileType, savePhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import {Params, useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null // ReturnType<typeof mapStateToProps>
    status: string
    isAuthUserId: number | null
    isAuth: boolean | null
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userIdFromParams: string | undefined) => void
    getUserStatusThunkCreator: (userIdFromParams: string | undefined) => void
    updateUserStatusThunkCreator: (status: string) => void
    savePhotoThunkCreator: (file: any) => void
}

type paramsType = {
    params: Params
}

type ProfileRequestContainerPropsType = MapStatePropsType & MapDispatchPropsType & paramsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuthUserId: state.auth.id,
    isAuth: state.auth.isAuth

})

class ProfileRequestContainer extends React.Component<ProfileRequestContainerPropsType> {

    refreshProfile() {
        let userId = this.props.params.userId // string | undefined
        if (!userId) {
            if (this.props.isAuthUserId)
                userId = this.props.isAuthUserId.toString() // number | null
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileRequestContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.params.userId != prevProps.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile owner={!this.props.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatusThunkCreator}
                         savePhoto={this.props.savePhotoThunkCreator}/>
            </div>
        )
    }
}

type WithUrlDataContainerComponentPropsType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = (Component: ComponentType<ProfileRequestContainerPropsType>) => {
    function ComponentWithParams(props: WithUrlDataContainerComponentPropsType) {
        return <Component {...props} params={useParams<'userId'>()}/>
    }

    return ComponentWithParams
}

const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator,
        savePhotoThunkCreator
    }),
    WithUrlDataContainerComponent,
    withAuthNavigate // const AuthNavigateComponent = withAuthNavigate(ProfileRequestContainer)
)(ProfileRequestContainer)

export default ProfileContainer
