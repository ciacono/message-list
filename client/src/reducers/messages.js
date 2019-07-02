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
            return [];
        default:
            return state;
    }
};

export default messages