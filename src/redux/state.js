import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}

window.store = store;

export default store;