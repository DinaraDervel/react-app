let initialState = {
    friends: [
        { id: 1, name: "Betty" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Katrine" },
        { id: 4, name: "Juan" },
        { id: 5, name: "Valery" },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;