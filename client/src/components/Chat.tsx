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
      setMessage((prevState) => [data, ...prevState]);
      // data is added to front of list because content
      // is displayed in reverse to allow scrolling to stay at bottom
    });
  }, []);

  return (
    <div className="chat">
      {messages.map((message, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Typography key={i} variant="body1">{`${message.sender}: ${message.message}`}</Typography>
      ))}
    </div>
  );
}

export default Chat;
