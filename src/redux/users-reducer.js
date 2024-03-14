const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        //     {
        //         id: 1,
        //         photoURL: 'https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg',
        //         followed: false,
        //         fullname: "Jhon",
        //         status: 'I rock',
        //         location: { country: 'US', city: 'Old York' }
        //     },
        //     {
        //         id: 2,
        //         photoURL: 'https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg',
        //         followed: true,
        //         fullname: "Mellisa",
        //         status: 'Show must go on',
        //         location: { country: 'Australia', city: 'Sydney' }
        //     }, {
        //         id: 3,
        //         photoURL: 'https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg',
        //         followed: false,
        //         fullname: "Ben",
        //         status: 'Tik-tak',
        //         location: { country: 'Britain', city: 'Older York' }
        //     },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId)
                        return {
                            ...el, followed: true
                        }
                    return el;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId)
                        return {
                            ...el, followed: false
                        }
                    return el;
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;