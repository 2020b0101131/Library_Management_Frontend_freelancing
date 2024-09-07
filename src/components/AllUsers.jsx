import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
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
import { getUsers, deleteUser } from "../service/Api.jsx";

// Custom Styles
const StyledTable = styled(Table)`
  width: 90%;
  margin: 30px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const THead = styled(TableRow)`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  & > th {
    color: #fff;
    font-size: 18px;
    padding: 16px;
    border: none;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 16px;
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  &:hover {
    background: linear-gradient(135deg, #5a10b8, #1f5acc);
  }
`;

const PDFButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
  margin-bottom: 20px;
  &:hover {
    background-color: #218838;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const componentPDF = useRef();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUser();
  };

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "UserData",
    onAfterPrint: () => alert("Data Saved in PDF"),
  });

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-gradient">User Management</h3>
        <PDFButton onClick={generatePDF}>Save as PDF</PDFButton>
      </div>
      <StyledTable ref={componentPDF}>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Date/Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell className="d-print-none">Actions</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email_id}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell className="d-print-none">
                <StyledButton
                  variant="contained"
                  component={Link}
                  to={`/edit/${user._id}`}
                  style={{ marginRight: 10 }}
                >
                  Edit
                </StyledButton>
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
    </div>
  );
};

export default AllUsers;
