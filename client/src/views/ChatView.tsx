import React from 'react';
import { Socket } from 'socket.io-client';
import { Paper, Stack } from '@mui/material';

import Chat from '../components/Chat';
import Input from '../components/Input';

interface ChatViewProps {
  socket: Socket;
  username: string;
}
function ChatView(props: ChatViewProps) {
  const { socket, username } = props;

  return (
    <Paper className="box">
      <Stack spacing={2} sx={{ p: 2 }}>
        <Chat socket={socket} />
        <Input socket={socket} username={username} />
      </Stack>
    </Paper>
  );
}

export default ChatView;
