import React from 'react'
import InputMessage from '../containers/InputMessage'
import MessageListView from '../containers/MessageListView'

const App = () => (
    <div>
        <h1>Message List</h1>
        <InputMessage />
        <MessageListView />
    </div>
);

export default App