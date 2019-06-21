const messages = (state = [], action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            console.log("IN REDUCER: " + JSON.stringify(action.payload));
            return action.payload;
        case 'ADD_MESSAGE':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_MESSAGES':
            return action.payload;
        default:
            return state;
    }
};

export default messages