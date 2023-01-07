import React, { useState } from 'react';
import { io } from 'socket.io-client';

import LoginView from './views/LoginView';
import ChatView from './views/ChatView';

import './styles/app.css';

function App() {
  const [socket] = useState(io());
  const [username, setUsername] = useState('');

  if (username) {
    return <ChatView socket={socket} username={username} />;
  }
  return <LoginView setUsername={setUsername} />;
}

export default App;
