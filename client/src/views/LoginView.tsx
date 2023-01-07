import React, { useState } from 'react';
import {
  Paper, Stack, TextField, IconButton,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

interface ChatViewProps {
  setUsername: (username: string) => void;
}
function ChatView(props: ChatViewProps) {
  const { setUsername } = props;

  const [name, setName] = useState('');

  return (
    <Paper className="box">
      <Stack direction="row">
        <TextField
          className="text-input"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <IconButton
          className="button"
          onClick={() => {
            setUsername(name);
          }}
        >
          <LoginIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}

export default ChatView;
