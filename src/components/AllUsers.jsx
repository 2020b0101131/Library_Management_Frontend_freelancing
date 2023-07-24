import React from "react";

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
  margin: 50px auto 0px;
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
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
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
    </StyledTable>
  );
};

export default AllUsers;
