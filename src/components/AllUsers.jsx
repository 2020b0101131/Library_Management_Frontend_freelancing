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
import Loader from "./Loader"; // Import the Loader component

// Custom Styles
const StyledTable = styled(Table)`
  width: 100%;
  margin: 30px 0;
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

const ResponsiveTableWrapper = styled("div")`
  width: 100%;
  overflow-x: auto; /* Enables horizontal scrolling */
  margin-bottom: 30px;

  /* Hides the scrollbar but still allows scrolling */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const componentPDF = useRef();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      let response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Set loading to false when data is fetched
    }
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

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 style={{ color: "lightblue" }}>Candidate Management</h3>
        <PDFButton onClick={generatePDF}>Save as PDF</PDFButton>
      </div>
      <ResponsiveTableWrapper>
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
            {users.map((user, index) => {
              return (
                <TBody key={index + 1}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone_no}</TableCell>
                  <TableCell>{user.date}</TableCell>
                  <TableCell>
                    {user.status_id === 1 ? (
                      <span
                        style={{
                          marginTop: "4px",
                          backgroundColor: "#F9E400",
                          borderRadius: "5px",
                          padding: "8px",
                        }}
                      >
                        Pending
                      </span>
                    ) : user.status_id === 2 ? (
                      <span
                        style={{
                          marginTop: "4px",
                          backgroundColor: "#79D70F",
                          borderRadius: "5px",
                          padding: "8px",
                        }}
                      >
                        Interviewed
                      </span>
                    ) : (
                      <span
                        style={{
                          marginTop: "4px",
                          backgroundColor: "#F5004F",
                          borderRadius: "5px",
                          padding: "8px",
                        }}
                      >
                        Rejected
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="d-print-none">
                    <StyledButton
                      variant="contained"
                      component={Link}
                      to={`/edit/${user.id}`}
                      style={{ marginRight: 10 }}
                    >
                      Edit
                    </StyledButton>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteUserDetails(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TBody>
              );
            })}
          </TableBody>
        </StyledTable>
      </ResponsiveTableWrapper>
    </div>
  );
};

export default AllUsers;
