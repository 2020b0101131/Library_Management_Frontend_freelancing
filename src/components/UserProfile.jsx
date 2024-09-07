import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar, Button, Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProfileSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ProfileCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
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
    <div>
      <section style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <div style={{ padding: '5rem 0' }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <ProfileSection>
                <ProfileCard>
                  <ProfileAvatar src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" />
                  <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {username}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                      @{username} <span style={{ margin: '0 1rem' }}>|</span> <a href={`mailto:${email}`}>{email}</a>
                    </Typography>
                    <div style={{ marginBottom: '1rem' }}>
                      <Button variant="outlined" color="primary" style={{ margin: '0 0.5rem' }}>
                        <i className="fab fa-facebook-f" />
                      </Button>
                      <Button variant="outlined" color="primary" style={{ margin: '0 0.5rem' }}>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button variant="outlined" color="primary" style={{ margin: '0 0.5rem' }}>
                        <i className="fab fa-skype" />
                      </Button>
                    </div>
                    <Button variant="contained" color="primary" size="large">
                      Message now
                    </Button>
                    <Grid container justifyContent="space-around" style={{ marginTop: '2rem' }}>
                      <Grid item>
                        <Typography variant="h6">8471</Typography>
                        <Typography color="textSecondary">Wallets Balance</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">8512</Typography>
                        <Typography color="textSecondary">Income Amounts</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">4751</Typography>
                        <Typography color="textSecondary">Total Transactions</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </ProfileCard>
              </ProfileSection>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
