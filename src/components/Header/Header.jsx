import React from 'react';
import cl from './Header.module.css';

function Header() {
    return(
        <div className={cl.header}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png'></img>
        </div>
    );
}

export default Header;