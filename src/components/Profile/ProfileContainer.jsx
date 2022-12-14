import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import axios from 'axios';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) { userId = 2; }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response =>{
            this.props.setUserProfile(response.data);
        });
    }

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
                
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = (props) => {
    return (
        <ProfileContainer {...props} params= {useParams()}/>
    )
}

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);