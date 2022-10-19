import React from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={cl.main}>
      <Header />
      <Sidebar />
      <div className={cl.content}>
        <Routes>
          <Route path='/Profile/*' element={<Profile
            addPost={props.addPost}
            profilePage={props.state.profilePage}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path='/Dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
