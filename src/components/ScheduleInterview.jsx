import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';

const ScheduleInterview = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(
    (e) => {
      e.preventDefault();
      if (value.trim()) {
        navigate(`/room/${value}`);
      } else {
        alert('Please enter a room code');
      }
    },
    [navigate, value]
  );

  return (
    <Container component={Paper} elevation={3} maxWidth="sm" sx={{ padding: 3, marginTop: "8rem" ,marginBottom:"8rem"}}>
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: "bold", color: "#6a11cb",marginBottom:'1.5rem' }}>
        Join an Interview
      </Typography>
      <Box
        component="form"
        onSubmit={handleJoinRoom}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <TextField
          variant="outlined"
          label="Enter Room Code"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2,paddingLeft:'0.5rem',paddingRight:'0.5rem' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ padding: '10px 20px' ,
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5a10b8, #1f5acc)'
            },
            marginTop:"1rem",marginBottom:'0.5rem'
            
          }}
        >
          Join
        </Button>
      </Box>
      {/* Uncomment the below link to enable "Start Interview Online" functionality */}
      {/* 
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Button
          href="https://meet.google.com/"
          target="_blank"
          rel="noreferrer"
          variant="outlined"
          color="secondary"
        >
          Start Interview Online
        </Button>
      </Box>
      */}
    </Container>
  );
};

export default ScheduleInterview;
