const userReducer = (state = {
    users: "",
}, action) => {
    switch (action.type) {
        case "SET_USERS_DATA":
            state = {
                ...state,
                users: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;