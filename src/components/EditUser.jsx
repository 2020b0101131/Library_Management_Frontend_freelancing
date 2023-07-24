import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  styled,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { editUser, getUser } from "../service/Api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
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
  const EditUserDetails = async () => {
    await editUser(user,id);
    navigate("/allusers");
  };

  ////////////////////////////////////////////////
  const { id } = useParams();
  ////////////////////////////////////////////////
  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  /////////////////////////////////////////////////
  return (
    <div>
      <Container>
        <Typography variant="h4">EDIT USER</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone"value={user.phone} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => EditUserDetails()}>
            EDIT USER
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddUser;
