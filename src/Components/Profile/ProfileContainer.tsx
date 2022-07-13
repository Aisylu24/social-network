import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Params, useParams} from "react-router-dom";

type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type paramsType = {
    params: Params<any> | {}
}


type ProfileRequestContainerPropsType = MapStatePropsType & MapDispatchPropsType & paramsType

class ProfileRequestContainer extends React.Component<ProfileRequestContainerPropsType> {

    componentDidMount() {
        console.log(this.props.params)
        axios.get<any>('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                console.log(response)
                console.log({...this.props})
                this.props.setUserProfile(response.data)
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



//export default connect(mapStateToProps, {setUserProfile} )(ProfileRequestContainer)


type WithUrlDataContainerComponentType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = (props: WithUrlDataContainerComponentType) => {
    return <ProfileRequestContainer {...props} params={useParams()}/>
}


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)