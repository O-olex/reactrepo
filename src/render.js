import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { addPost } from './redux/state';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App addPost={addPost} state={state}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
