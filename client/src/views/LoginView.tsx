import React, { useState } from 'react';
import {
  Stack,
  TextField,
  IconButton,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

interface ChatViewProps {
  setUsername: (username: string) => void;
}
function ChatView(props: ChatViewProps) {
  const { setUsername } = props;

  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(name);
  };

  return (
    <form className="box" onSubmit={handleSubmit}>
      <Stack direction="row" alignItems="center">
        <TextField
          className="text-input"
          autoFocus
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <IconButton className="button" onClick={handleSubmit}>
          <LoginIcon />
        </IconButton>
      </Stack>
    </form>
  );
}

export default ChatView;
