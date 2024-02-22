const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            return state;
        default: return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;
