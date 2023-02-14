import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'


let initialState = {
    posts: [
        { id: 1, message: 'First post' },
        { id: 2, message: 'The weather is good!' }
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            
            let newPost = state.posts.length !== 0 
            ? {id: state.posts.at(-1).id + 1, message: action.newPost,}
            : {id: 1, message: action.newPost,}
            debugger
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });

export const deletePostAC = (postId) => ({ type: DELETE_POST, postId });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getUserProfile = (userId) => async dispatch => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}


export const getStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}


export const updateStatus = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}


export default profileReducer;