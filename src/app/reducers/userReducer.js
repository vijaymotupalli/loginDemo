const userReducer = (state = {
    name: "Vijay",
    age: 23
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;