import React from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className={cl.main}>
      <Header />
      <Sidebar />
      <div className={cl.content}>
        <Routes>
          <Route path='/Profile/*' element={<Profile store={props.store} />} />
          <Route path='/Dialogs/*' element={<DialogsContainer store={props.store} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
