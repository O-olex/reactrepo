const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [/*props.setUsers([
        {
          id: 1, profileIMG: 'https://abrakadabra.fun/uploads/posts/2022-01/1642749236_1-abrakadabra-fun-p-avatarka-dlya-instagrama-3.jpg',
          followed: true, fullName: 'Masha', status: 'I like rock', location: { city: 'Moscow', country: 'Russia' }
        },
        {
          id: 2, profileIMG: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
          followed: true, fullName: 'Jack', status: 'Playing footbal', location: { city: 'New York', country: 'USA' }
        },
        {
          id: 3, profileIMG: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
          followed: false, fullName: 'Janek', status: 'Cats are the best!', location: { city: 'Brno', country: 'Czech Republic' }
        },
        {
          id: 4, profileIMG: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg',
          followed: false, fullName: 'Jindro', status: '', location: { city: 'Prague', country: 'Czech Republic' }
        }
      ])*/],
      pageSize: 50,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: true
};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;