import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, follow, unfollow, toggleFollowingProgress, getFriends } from "../../redux/users-reducer";
import Users from './Users';
import Preloader from '../common/Preloader';
import { getPageSize, getUsersSelector, getTotalUsersCount, getFollowingInProgress, getIsFetching, getCurrentPage } from '../../redux/users-selectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class FriendsContainer extends React.Component {

    componentDidMount() {
        

        this.props.getFriends(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        
        this.props.getFriends(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}


let AuthRedirectComponent = withAuthRedirect(FriendsContainer);

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getFriends,
})(AuthRedirectComponent);