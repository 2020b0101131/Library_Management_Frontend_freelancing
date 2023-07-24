import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { styled,FormGroup,FormControl,InputLabel,Input, Typography,Button } from "@mui/material";
import { addUser } from '../service/Api';
const Container=styled(FormGroup)`
width:50%;
margin:5% auto;
& > div{
  margin-top:20px;
}
`

const defaultValue={
  'name':'',
  'username':'',
  'email':'',
  'phone':'',
  };
  
const AddUser = () => {
  const navigate=useNavigate();
  ////////////////////////////////////////////////
  const [user,setUser]=useState(defaultValue);
  /////////////////////////////////////////////////
  const onValueChange=(e)=>{
    console.log("Yug:",e);
  setUser({...user,[e.target.name]:e.target.value})
  }
  ////////////////////////////////////////////////
  const AddUserDetails=async()=>{
await addUser(user);
navigate('/allusers');

  }
  
  return (
    <div>
      
     
        <Container>
          <Typography variant='h4'>ADD USER</Typography>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="name"/>
          </FormControl>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="username"/>
          </FormControl>
          
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="email"/>
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="phone"/>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={()=>AddUserDetails()}>ADD USER</Button>
          </FormControl>
        </Container>
       

        
    </div>
  )
}

export default AddUser