import React from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  return (
    <div className={cl.main}>
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  );
}

export default App;
