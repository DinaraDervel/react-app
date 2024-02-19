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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }

    }
}


window.store = store;

export default store;