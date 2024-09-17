import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
  Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(5),
  background: "linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)",
  borderRadius: "12px",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
}));

const ProfileHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(4),
}));

const ProfileDetails = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexGrow: 1,
  marginLeft: "1.5rem",
});

const UserProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(14),
  height: theme.spacing(14),
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
}));

const StatsSection = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
});

const StatCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  width: "30%",
  boxShadow: theme.shadows[2],
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const GraphSection = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "10px",
  boxShadow: theme.shadows[2],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: theme.shadows[2],
  transition: "all 0.3s",
  "&:hover": {
    boxShadow: theme.shadows[4],
    transform: "translateY(-3px)",
  },
}));

const UserProfile = () => {
  const location = useLocation();
  const [username, setUsername] = useState("John Doe");
  const [bio, setBio] = useState("Experienced interviewer in tech industry");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    if (location.state) {
      setUsername(location.state.username || "John Doe");
      setEmail(location.state.email || "john.doe@example.com");
    }
  }, [location.state]);

  const data = [
    { name: 'Jan', interviews: 10 },
    { name: 'Feb', interviews: 15 },
    { name: 'Mar', interviews: 12 },
    { name: 'Apr', interviews: 20 },
    { name: 'May', interviews: 25 },
    { name: 'Jun', interviews: 18 },
  ];

  return (
    <div className="container">
      <ProfileContainer>
        <ProfileHeader>
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserProfileAvatar src="https://randomuser.me/api/portraits/men/75.jpg" />
            <ProfileDetails>
              <Typography variant="h4" component="div" style={{ fontWeight: 600 }}>
                {username}
              </Typography>
              <Typography variant="body1" color="textSecondary" style={{ fontWeight: 300 }}>
                {bio}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {email}
              </Typography>
            </ProfileDetails>
          </div>
          <div>
            <StyledButton variant="outlined" color="primary" style={{ marginRight: "1rem" }}>
              Edit Profile
            </StyledButton>
            <Badge badgeContent={notifications} color="error" overlap="rectangular">
              <IconButton aria-label="notifications">
                <i className="fas fa-bell" style={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Badge>
          </div>
        </ProfileHeader>

        <Divider />

        <Typography variant="h6" component="h2" style={{ marginTop: "2rem", fontWeight: 500 }}>
          Recent Activity
        </Typography>

        <Card variant="outlined" style={{ marginTop: "1rem", padding: "1.5rem" }}>
          <Typography variant="body1" style={{ fontWeight: 400 }}>
            - Conducted an interview for <b>Frontend Developer</b> position.
          </Typography>
          <Typography variant="body2" color="textSecondary">2 days ago</Typography>
        </Card>

        <Card variant="outlined" style={{ marginTop: "1rem", padding: "1.5rem" }}>
          <Typography variant="body1" style={{ fontWeight: 400 }}>
            - Provided feedback for <b>John Smith</b>.
          </Typography>
          <Typography variant="body2" color="textSecondary">4 days ago</Typography>
        </Card>

        <StatsSection>
          <StatCard>
            <Typography variant="h6" style={{ fontWeight: 600 }}>20</Typography>
            <Typography variant="body2" color="textSecondary">Interviews Conducted</Typography>
          </StatCard>
          <StatCard>
            <Typography variant="h6" style={{ fontWeight: 600 }}>15</Typography>
            <Typography variant="body2" color="textSecondary">Feedbacks Given</Typography>
          </StatCard>
          <StatCard>
            <Typography variant="h6" style={{ fontWeight: 600 }}>4.8</Typography>
            <Typography variant="body2" color="textSecondary">Average Rating</Typography>
          </StatCard>
        </StatsSection>

        <GraphSection>
          <Typography variant="h6" style={{ fontWeight: 500 }}>
            Interviews Conducted Over Time
          </Typography>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="interviews" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </GraphSection>

        <div className="text-center mt-4">
          <StyledButton variant="contained" color="secondary">
            Go to Settings
          </StyledButton>
        </div>
      </ProfileContainer>
    </div>
  );
};

export default UserProfile;
