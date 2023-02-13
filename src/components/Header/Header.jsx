import React from 'react';
import cl from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <div className={cl.header}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png'></img>
            </div>
            <div className={cl.loginBlock}>
                {props.isAuth
                ? <div className={cl.loginName}>{props.login} - <button className={cl.buttonLogout} onClick={props.logout}>Log out</button></div>
                : <NavLink className={({ isActive }) =>
                    (isActive ? cl.activeLink : "no")} to='/Login/*'>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;