import { configureStore } from '@reduxjs/toolkit';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = configureStore({
    reducer:{
        dialogsPage: dialogsReducer,
        profilePage: profileReducer
    }
});


export default store;