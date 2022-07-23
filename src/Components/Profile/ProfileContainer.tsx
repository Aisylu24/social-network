import React, {ComponentType} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Params, useParams} from "react-router-dom";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null // ReturnType<typeof mapStateToProps>
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userIdFromParams: string | undefined) => void
}

type paramsType = {
    params: Params
}

type ProfileRequestContainerPropsType = MapStatePropsType & MapDispatchPropsType & paramsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

class ProfileRequestContainer extends React.Component<ProfileRequestContainerPropsType> {

    componentDidMount() {
        this.props.getUserProfileThunkCreator(this.props.params.userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
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
    connect(mapStateToProps, {getUserProfileThunkCreator}),
    WithUrlDataContainerComponent,
    withAuthNavigate // const AuthNavigateComponent = withAuthNavigate(ProfileRequestContainer)
)(ProfileRequestContainer)