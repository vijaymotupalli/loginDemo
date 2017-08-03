const eventReducer = (state = {
    Events:[
        {
            start: '2017-08-2',
            end: '2017-08-2',
            eventClasses: 'optionalEvent',
            title: '8hr',
            description: 'This is a test description of an event',
        }

    ]
}, action) => {
    switch (action.type) {
        case "SET_EVENT_DATA":
            state = {
                ...state,
                Events:state.Events.push(action.payload)
            };
            break;
    }
    return state;
};

export default eventReducer;