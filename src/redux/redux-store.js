import { configureStore } from '@reduxjs/toolkit';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';

let store = configureStore({
    reducer:{
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer
    }
});


export default store;