import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  styled,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { addUser } from "../service/Api";

const Container = styled(FormGroup)(({ theme }) => ({
  width: "50%",
  margin: "5% auto",
  padding: "40px",
  backgroundColor: "#f4f7fc",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: "20px",
    marginTop: "10%",
  },
  "& > div": {
    marginTop: "20px",
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& label": {
    color: "#6a11cb",
  },
  "& .MuiInputBase-input": {
    fontSize: "1.1rem",
    color: "#333",
  },
  "& .Mui-focused .MuiInputLabel-root": {
    color: "#6a11cb",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "2px solid #6a11cb",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiInputBase-input": {
      fontSize: "1rem",
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
  color: "#fff",
  padding: "10px",
  fontSize: "16px",
  marginTop: "30px",
  "&:hover": {
    background: "linear-gradient(135deg, #5a10b8, #1f5acc)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
    fontSize: "14px",
  },
}));

const defaultValue = {
  _id: "",
  name: "",
  email_id: "",
  phone: "",
  date: "",
  status: "",
};

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    console.log(user);
    await addUser(user);
    navigate("/allusers");
  };

  return (
    <Container>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" style={{ fontWeight: "bold", color: "#6a11cb" }}>
          Add New User
        </Typography>
        <Typography variant="subtitle1" style={{ color: "#757575" }}>
          Fill the details below to add a new user to the system
        </Typography>
      </Box>
      <StyledFormControl>
        <InputLabel>Id</InputLabel>
        <Input onChange={onValueChange} name="_id" />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email_id" />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onValueChange} name="phone" />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel>Date/Time</InputLabel>
        <Input onChange={onValueChange} name="date" />
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel>Status</InputLabel>
        <Input onChange={onValueChange} name="status" />
      </StyledFormControl>
      <SubmitButton variant="contained" onClick={AddUserDetails}>
        Add User
      </SubmitButton>
    </Container>
  );
};

export default AddUser;
