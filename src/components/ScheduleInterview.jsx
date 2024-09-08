import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap installed

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
    <div className="container py-4" style={{marginTop:"6rem",marginBottom:'3rem'}}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-lg p-4 mb-5 bg-white rounded">
            <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#6a11cb" }}>Join an Interview</h3>
            <Box
              component="form"
              onSubmit={handleJoinRoom}
              className="d-flex flex-column"
            >
              <TextField
                variant="outlined"
                label="Enter Room Code"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
                className="mb-3"
              />
              <Button
                type="submit"
                variant="contained"
                className="btn btn-primary btn-block"
                sx={{
                  background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a10b8, #1f5acc)',
                  },
                }}
              >
                Join
              </Button>
            </Box>
            {/* Uncomment the below link to enable "Start Interview Online" functionality */}
            {/* 
            <div className="text-center mt-3">
              <a
                href="https://meet.google.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary"
              >
                Start Interview Online
              </a>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleInterview;
