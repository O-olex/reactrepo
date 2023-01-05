import React from 'react';
import cl from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className={cl.main}>
      <HeaderContainer />
      <Sidebar />
      <div className={cl.content}>
        <Routes>
          <Route path='/Profile' element={<ProfileContainer />} />
          <Route path='/Profile/:userId' element={<ProfileContainer />} />
          <Route path='/Dialogs/*' element={<DialogsContainer />} />
          <Route path='/Users/*' element={<UsersContainer />} />
          <Route path='/Login*' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
