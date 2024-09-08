import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you import Bootstrap

const ProfileSection = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: '0.75rem',
}));

const ProfileCard = styled(Card)(({ theme }) => ({
  borderRadius: '0.75rem',
  boxShadow: theme.shadows[5],
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginBottom: theme.spacing(2),
}));

const UserProfile = () => {
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state) {
      setUsername(location.state.username || '');
      setEmail(location.state.email || '');
    }
  }, [location.state]);

  return (
    <div className="container">
     
     
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6">
                <ProfileSection>
                  <ProfileCard>
                    <ProfileAvatar src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" />
                    <CardContent>
                      <Typography variant="h4" component="h2" gutterBottom>
                        {username}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" gutterBottom>
                        @{username} <span className="mx-3">|</span> <a href={`mailto:${email}`}>{email}</a>
                      </Typography>
                      <div className="mb-4">
  <button
    className="btn mx-2"
    style={{
      color: "#fff",
      backgroundColor: "#007bff",
      borderColor: "#007bff",
    }}
  >
    <i className="fab fa-facebook-f" />
  </button>
  <button
    className="btn mx-2"
    style={{
      color: "#fff",
      backgroundColor: "#007bff",
      borderColor: "#007bff",
    }}
  >
    <i className="fab fa-twitter" />
  </button>
  <button
    className="btn mx-2"
    style={{
      color: "#fff",
      backgroundColor: "#007bff",
      borderColor: "#007bff",
    }}
  >
    <i className="fab fa-skype" />
  </button>
</div>

                      <button style={{background: "linear-gradient(135deg, #6a11cb, #2575fc)","&:hover": {
    background: "linear-gradient(135deg, #5a10b8, #1f5acc)",
  },}}className="btn btn-primary btn-lg">Message now</button>
                      <div className="row justify-content-around mt-4">
                        <div className="col text-center">
                          <Typography variant="h6">8471</Typography>
                          <Typography color="textSecondary">Wallets Balance</Typography>
                        </div>
                        <div className="col text-center">
                          <Typography variant="h6">8512</Typography>
                          <Typography color="textSecondary">Income Amounts</Typography>
                        </div>
                        <div className="col text-center">
                          <Typography variant="h6">4751</Typography>
                          <Typography color="textSecondary">Total Transactions</Typography>
                        </div>
                      </div>
                    </CardContent>
                  </ProfileCard>
                </ProfileSection>
              </div>
            </div>
          </div>
        </div>
     

  );
};

export default UserProfile;
