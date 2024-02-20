const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Sweet! So, what do you wanna do today?",
                    likesCount: 12,
                },
                { id: 2, message: "Hi! It's my first post", likesCount: 11 },
            ],
            newPostText: 'it-kamasutra.com',
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: "Betty" },
                { id: 2, name: "Alex" },
                { id: 3, name: "Katrine" },
                { id: 4, name: "Juan" },
                { id: 5, name: "Valery" },
            ],
            messages: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "How is your day?!" },
                { id: 3, message: "Yo" },
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                { id: 1, name: "Betty" },
                { id: 2, name: "Alex" },
                { id: 3, name: "Katrine" },
                { id: 4, name: "Juan" },
                { id: 5, name: "Valery" },
            ],
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 4, message: body });
            this._callSubscriber();
        }

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

window.store = store;

export default store;