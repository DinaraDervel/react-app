import React from 'react';
import './index.css';
import App from './App';
import { addPost } from './redux/state';


export let rerenderEntireTree = (root, state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>
    );
}