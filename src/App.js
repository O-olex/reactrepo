import React from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className={cl.main}>
      <Header />
      <Sidebar />
      <div className={cl.content}>
        <Routes>
          <Route path='/Profile/*' element={<ProfileContainer />} />
          <Route path='/Dialogs/*' element={<DialogsContainer />} />
          <Route path='/Users/*' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
