import React from 'react';
import cl from './Preloader.module.css';
import preloader from '../../assets/images/loader.gif';


const Preloader = () => {
  return (
    <div className={cl.loader}>
      <img className={cl.im} src={preloader}/>
    </div>
  );
}

export default Preloader;
