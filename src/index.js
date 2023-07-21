import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

/*this date from component Profile*/
let postDate = [
    {message: 'hello', countLike: 4},
    {message: 'i am lonely', countLike: 34},
]

/*this date from component Dialogs*/
let dialogsDate = [
    {id: 1, name: 'Joy'},
    {id: 2, name: 'Officer'},
    {id: 3, name: 'Butters'},
    {id: 4, name: 'Kartman'},
    {id: 5, name: 'Patrick'},
]

let messagesDate = [
    {id: 1, message: 'oh you don\'t even smile'},
    {id: 2, message: 'you got damn right'},
    {id: 3, message: 'why?'}
]

root.render(
  <React.StrictMode>
    <App postDate={postDate} dialogsDate={dialogsDate} messagesDate={messagesDate}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
