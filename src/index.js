import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {
    id: 1,
    message: "Sweet! So, what do you wanna do today?",
    likesCount: 12,
  },
  { id: 2, message: "Hi! It's my first post", likesCount: 11 },
];
let dialogs = [
  { id: 1, name: "Betty" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Katrine" },
  { id: 4, name: "Juan" },
  { id: 5, name: "Valery" },
];
let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How is your day?!" },
  { id: 3, message: "Yo" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
