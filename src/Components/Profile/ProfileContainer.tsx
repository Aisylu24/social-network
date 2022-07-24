import React, {ComponentType} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileType,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Params, useParams} from "react-router-dom";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null // ReturnType<typeof mapStateToProps>
    status: string
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userIdFromParams: string | undefined) => void
    getUserStatusThunkCreator: (userIdFromParams: string | undefined) => void
    updateUserStatusThunkCreator: (status: string) => void
}

type paramsType = {
    params: Params
}

type ProfileRequestContainerPropsType = MapStatePropsType & MapDispatchPropsType & paramsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

class ProfileRequestContainer extends React.Component<ProfileRequestContainerPropsType> {

    componentDidMount() {
        this.props.getUserProfileThunkCreator(this.props.params.userId)
        this.props.getUserStatusThunkCreator(this.props.params.userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatusThunkCreator}/>
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

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {getUserProfileThunkCreator,getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    WithUrlDataContainerComponent,
    withAuthNavigate // const AuthNavigateComponent = withAuthNavigate(ProfileRequestContainer)
)(ProfileRequestContainer)