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
  _id: "",
  name: "",
  email_id: "",
  phone: "",
  date: "",
  status: "",
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
          <InputLabel>ID</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="_id" value={user._id} />
        </FormControl>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email_id" value={user.email_id}/>
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
          <InputLabel>Date/Time</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="date"value={user.date} />
        </FormControl>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="status"value={user.status} />
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
