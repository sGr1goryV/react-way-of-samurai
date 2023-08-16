import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText}  from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (stateDates_f) => {


    root.render(
        <React.StrictMode>
            <App stateDates = {stateDates_f} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
