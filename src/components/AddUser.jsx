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
} from "@mui/material";
import { addUser } from "../service/Api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {

  _id: "",
  name: "",
  email_id: "",
  phone: "",
  date: "",
  status:"",
};

const AddUser = () => {
  const navigate = useNavigate();
  ////////////////////////////////////////////////
  const [user, setUser] = useState(defaultValue);
  /////////////////////////////////////////////////
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  ////////////////////////////////////////////////
  const AddUserDetails = async () => {
    console.log(user);
    await addUser(user);
    navigate("/allusers");
  };

  return (
    <div>
      <Container>
        <Typography variant="h4">ADD USER</Typography>
        <FormControl>
          <InputLabel>Id</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="_id" />
        </FormControl>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email_id" />
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <InputLabel>Date/Time</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="date" />
        </FormControl>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="status" />
        </FormControl>
        <FormControl>
        
          <Button variant="contained" onClick={() => AddUserDetails()}>
            ADD USER
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddUser;
