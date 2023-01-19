import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import { reducer as formReducer } from "redux-form";

let store = configureStore({
    reducer:{
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
    }},
    applyMiddleware(thunkMiddleware)
    );


export default store;