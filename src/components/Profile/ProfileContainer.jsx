import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) { userId = this.props.authorizedUserId; }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render(){

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
                
            </div>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = (props) => {
    return (
        <AuthRedirectComponent {...props} params = {useParams()}/>
    )
}

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(WithUrlDataContainerComponent);