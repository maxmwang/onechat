import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import { IconButton, Stack, TextField } from '@mui/material';
import Send from '@mui/icons-material/Send';
import ColorPicker from './ColorPicker';

interface InputProps {
  socket: Socket;
  username: string;
}
function Input(props: InputProps) {
  const { socket, username } = props;

  const [color, setColor] = useState('#000000');
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit('message', {
      sender: username,
      message: input,
      color,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <ColorPicker
          color={color}
          setColor={setColor}
        />

        <TextField
          className="text-input"
          autoFocus
          label="Message"
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton onClick={(e) => handleSubmit(e)}>
          <Send />
        </IconButton>
      </Stack>
    </form>
  );
}

export default Input;
