const userReducer = (state = {
    users: "",
    selectedUser:""
}, action) => {
    switch (action.type) {
        case "SET_USERS_DATA":
            state = {
                ...state,
                users: action.payload
            };
            break;
        case "SELECTED_USER_DATA":
            state = {
                ...state,
                selectedUser: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;