import React from "react";
import {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/Api.jsx";
//////////////////////////////////////////////////////////////////
const StyledTable = styled(Table)`
width: 90%;
margin: 30px auto 0px;
margin-left:10rem
`;
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 18px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 15px;
  }
`;
//////////////////////////////////////////////////////////////////
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  /////////////////////////////////////////
  const componentPDF=useRef();
  /////////////////////////////////////////
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUser();
  };
  ////////////////////////////////////////
  //useEffect take two arguments 1.Callback function & 2.Type of mount
  useEffect(() => {
    getAllUser();
  }, []); //[] :component didmount condition

  const getAllUser = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };
  ///////////////////////////////////////////////
  const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"UserData",
    onAfterPrint:()=>alert("Data Saved in PDF")
  });

  //////////////////////////////////////////////
  return (
    <div className="container-fluid ">
    <div className="overflow-scroll">
    <StyledTable  >
      {/* <div className="d-grid d-md-flex justify-content-md-end mb-3">
      <button className="btn btn-success" onClick={generatePDF}>PDF</button>
      </div> */}
     <div ref={componentPDF} style={{width:'100%'}}>
      <TableHead >
      <div className="d-grid d-md-flex justify-content-md-end mb-3">
      <button className="btn btn-success" onClick={generatePDF}>PDF</button>
      </div>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Date/Time</TableCell>
          <TableCell>Status</TableCell>
          <TableCell className="d-print-none">Edit/Delete</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email_id}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.date}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell className="d-print-none">
              <Button 
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button 
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
      </div>
    
    </StyledTable>
    </div>
    </div>
  );
};

export default AllUsers;
