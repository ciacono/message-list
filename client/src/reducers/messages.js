const initialState = {
    messages: []
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                messages: action.payload
            };
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export default messages