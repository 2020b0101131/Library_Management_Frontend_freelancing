import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Typography,
  IconButton,
  Divider,
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { displayProfile, addProfile } from "../service/Api.jsx";
import Loader from "./Loader"; // Import the Loader component

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
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
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
  // width: {},
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
  width: "100%",
  overflowX: "auto",
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
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(0);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [profileInfo, setProfileInfo] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(true); // State for loading
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    email: '',
    file: null,
  });

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      let response = await displayProfile();
      setProfileInfo(response?.data);
      const profileData = response?.data;
      setUsername(profileData?.userProfile[0]?.name);
      setBio(profileData?.userProfile[0]?.bio);
      setEmail(profileData?.userProfile[0]?.email);
      setProfileImage(`${process.env.REACT_APP_URL2}${profileData?.userProfile[0]?.profile_image_url}`);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Set loading to false when data is fetched
    }
  };

  // useEffect(() => {
  //   if (location.state) {
  //     setUsername(location.state.username || "John Doe");
  //     setEmail(location.state.email || "john.doe@example.com");
  //   }
  // }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // console.log("files::",files[0].name)
    if (type === 'file') {
      // console.log("files::",files[0])
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditProfile = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = async () => {
    try {
      // Create FormData object to handle file uploads
      const data = new FormData();
      data.append('username', formData.username);
      data.append('bio', formData.bio);
      if (formData.file) {
        // console.log("fff::",formData.file)
        data.append('img', formData?.file);
      }
      await addProfile(data);
      getProfile(); // Refresh the profile information
    } catch (error) {
      console.log("Error in profile update:", error);
    }
    setOpenEditModal(false);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const data = profileInfo?.interviewStats?.map((item) => ({
    name: item.month,
    interviews: item.interviews_count,
  }));

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div className="container" style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      <ProfileContainer>
        <ProfileHeader sx={{flexDirection:{xs:"column",sm:"row"}}}>
          <div style={{ display: "flex", alignItems: "center", }}>
            <UserProfileAvatar src={profileImage} />
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
          <div >
            <StyledButton variant="outlined" color="primary" onClick={handleEditProfile} style={{ marginRight: "1rem" }}>
              Edit Profile
            </StyledButton>
            {/* <Badge badgeContent={notifications} color="error" overlap="rectangular">
              <IconButton aria-label="notifications">
                <i className="fas fa-bell" style={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Badge> */}
          </div>
        </ProfileHeader>

        <Divider />

        <Typography variant="h6" component="h2" style={{ marginTop: "2rem", fontWeight: 500 }}>
          Recent Activity
        </Typography>

        {/* Add activity cards here... */}

        <StatsSection sx={{flexDirection:{xs:"column",sm:"row"}}}>
          <StatCard sx={{ background: 'linear-gradient(135deg, #66ccff, #0033cc)', color: "white",marginBottom:{xs:2,sm:0},width:{md:"15rem"} }}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>{profileInfo?.statistics[0]?.interviews_conducted ?? "No data found"}</Typography>
            <Typography variant="body2">Total Candidates</Typography>
          </StatCard>
          <StatCard sx={{ background: 'linear-gradient(135deg, #66ff66, #009900)', color: 'white',marginBottom:{xs:2,sm:0},width:{md:"15rem"} }}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>{profileInfo?.statistics[0]?.selected_count ?? "No data found"}</Typography>
            <Typography variant="body2">Fee Paid</Typography>
          </StatCard>
          <StatCard sx={{ background: 'linear-gradient(135deg, #ffcc33, #b38b00)', color: "white",marginBottom:{xs:2,sm:0},width:{md:"15rem"} }}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>{profileInfo?.statistics[0]?.pending_count ?? "No data found"}</Typography>
            <Typography variant="body2">Fee Pending</Typography>
          </StatCard>
          <StatCard sx={{ background: "linear-gradient(135deg, #ff4d4d, #b30000)", color: "white",marginBottom:{xs:2,sm:0},width:{md:"15rem"} }}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>{profileInfo?.statistics[0]?.rejected_count ?? "No data found"}</Typography>
            <Typography variant="body2">Suspended Candidates</Typography>
          </StatCard>
        </StatsSection>

        {/* <GraphSection style={{ background: 'linear-gradient(135deg, #e0f7fa, #f3e5f5)', padding: '30px', borderRadius: '15px', color: 'black' }}>
          <Typography variant="h6" style={{ fontWeight: 500 }}>
            Interviews Conducted Over Time
          </Typography>
          <LineChart width={950} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="interviews" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </GraphSection> */}
      </ProfileContainer>

      {/* Edit Profile Modal */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Bio"
            type="text"
            fullWidth
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
         
          <input
            accept="image/*"
            type="file"
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseEditModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserProfile;
