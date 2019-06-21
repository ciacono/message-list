export const addMessage = newMessage => ({
    type: 'ADD_MESSAGE',
    payload: newMessage
});

export const getMessages = messageState => ({
    type: 'GET_MESSAGES',
    payload: messageState
});
//TODO: delete
export const deleteMessages = messageState => ({
    type: 'DELETE_MESSAGES',
    payload: messageState
})