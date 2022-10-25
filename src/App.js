import React from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <div className={cl.main}>
      <Header />
      <Sidebar />
      <div className={cl.content}>
        <Routes>
          <Route path='/Profile/*' element={<Profile />} />
          <Route path='/Dialogs/*' element={<DialogsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
