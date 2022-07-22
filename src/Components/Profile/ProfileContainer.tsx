import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Params, useParams} from "react-router-dom";
import {withAuthNavigate} from "../hoc/withAuthNavigate";

type MapStatePropsType = {
    profile: ProfileType | null
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

const AuthNavigateComponent = withAuthNavigate(ProfileRequestContainer)

type WithUrlDataContainerComponentPropsType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = (props: WithUrlDataContainerComponentPropsType) => {
    let params = useParams<'userId'>()
    return <AuthNavigateComponent {...props} params={params}/>
}

export const ProfileContainer = connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataContainerComponent)