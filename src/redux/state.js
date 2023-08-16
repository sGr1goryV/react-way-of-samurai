import {rerenderEntireTree} from "../render";

let stateDates_f = {

    profilePage : {
        postDate : [
            {message: 'hello', countLike: 4},
            {message: 'i am lonely', countLike: 34},
        ],
        newPostText: 'hello',
    },
    dialogsPage : {
        dialogsDate : [
            {id: 1, name: 'Joy'},
            {id: 2, name: 'Officer'},
            {id: 3, name: 'Butters'},
            {id: 4, name: 'Kartman'},
            {id: 5, name: 'Patrick'},
        ],
        messagesDate : [
            {id: 1, message: 'oh you don\'t even smile'},
            {id: 2, message: 'you got damn right'},
            {id: 3, message: 'why?'}
        ]
    },
    sidebar : {
        friendsDate : [
            {name: '@'},
            {name: '@'},
            {name: '@'},
        ]
    }
}

export default stateDates_f;
export let addPost = (newMessage) => {
    let newPost = {
        message: newMessage,
        countLike: 0
    };
    stateDates_f.profilePage.postDate.push(newPost)
    rerenderEntireTree(stateDates_f  );
}

export let updateNewPostText = (textValue) => {
    stateDates_f.profilePage.newPostText = textValue;
    rerenderEntireTree(stateDates_f);
}
