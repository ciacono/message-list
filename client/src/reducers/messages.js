const messages = (state = [], action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return action.payload;
        case 'ADD_MESSAGE':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_MESSAGES':
            //TODO: is it getting the state from delete request? Is this redundant since technically another get request is called? Who knows.
            return action.payload;
        default:
            return state;
    }
};

export default messages