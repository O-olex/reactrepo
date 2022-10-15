import React from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={cl.main}>
        <Header />
        <Sidebar />
        <div className={cl.content}>
          <Routes>
            <Route path='/Profile*' element={<Profile posts={props.state.posts} />} />
            <Route path='/Dialogs*' element={<Dialogs messagesData={props.state.messagesData} dialogsData={props.state.dialogsData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
