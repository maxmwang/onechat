import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import { IconButton, Stack, TextField } from '@mui/material';
import Send from '@mui/icons-material/Send';

interface InputProps {
  socket: Socket;
  username: string;
}
function Input(props: InputProps) {
  const { socket, username } = props;

  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit('message', { sender: username, message: input });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <TextField
          className="text-input"
          autoFocus
          label="Message"
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton onClick={() => handleSubmit()}>
          <Send />
        </IconButton>
      </Stack>
    </form>
  );
}

export default Input;
