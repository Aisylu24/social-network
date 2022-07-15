import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Params, useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type paramsType = {
    params: Params
}

type ProfileRequestContainerPropsType = MapStatePropsType & MapDispatchPropsType & paramsType

class ProfileRequestContainer extends React.Component<ProfileRequestContainerPropsType> {

    componentDidMount() {
        console.log(this.props, 'params')
        profileAPI.getUserProfile(this.props.params.userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render()
    {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
profile: state.profilePage.profile
})

type WithUrlDataContainerComponentType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = (props: WithUrlDataContainerComponentType) => {
    return <ProfileRequestContainer {...props} params={useParams<'userId'>()}/>
}


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)