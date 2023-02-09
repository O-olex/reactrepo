import React from 'react';
import cl from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from '../src/redux/app-reducer'
import Preloader from './components/common/Preloader';
import store from './redux/redux-store';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
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
            <Route path='/Login/*' element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppCon = connect(mapStateToProps, {initializeApp})(App);

const AppContainer = (props) => {
  return <BrowserRouter>
      <Provider store={store}>
        <AppCon />
      </Provider>
    </BrowserRouter>
}

export default AppContainer;