import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

import Message from '../types';

interface ChatProps {
  socket: Socket;
}
function Chat(props: ChatProps) {
  const [messages, setMessage] = useState<Message[]>([]);
  const { socket } = props;

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data);
      setMessage([...messages, data]);
    });
  }, []);

  return (
    <div className="chat">
      {messages.map((message) => (
        <Typography variant="body1">{`${message.sender}: ${message.message}`}</Typography>
      ))}
    </div>
  );
}

export default Chat;
