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
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { editUser, getUser } from "../service/Api";

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
  name: "",
  father_name: "",
  mobile_no: "",
  email: "",
  aadhar_no: "",
  address: "",
  fee_amount: "",
  join_date: ""
};

const EditUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);
  // const [statusMenu, setStatusMenu] = useState([
  //   { id: 1, label: "Pending" },
  //   { id: 2, label: "Interviewed" },
  //   { id: 3, label: "Rejected" },
  // ]);
  // const [selectedStatus, setSelectedStatus] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response?.data || {});
        // const statusId = response?.data[0]?.status_id;
    // if (statusId) {
    //   setSelectedStatus(
    //     statusMenu.find((status) => status.id === statusId) || null
    //   );
    // }
  };
  
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const EditUserDetails = async () => {
    const payLoad = {
      name:user?.name,
      fatherName: user?.father_name,
      mobileNo: user?.mobile_no,
      email: user?.email,
      aadharNo: user?.aadhar_no,
      address: user?.address,
      joinDate: user?.join_date,
      feeAmount: user?.fee_amount,
      // status_id: selectedStatus?.id,
    };
    try {
      await editUser(payLoad, id);
      navigate("/allusers");
    } catch (error) {
      console.log("Error in Edit API");
    }
  };

  return (
    <Container>
      <Box textAlign="center" mb={3}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", color: "#6a11cb" }}
        >
          Edit Candidate Details
        </Typography>
        <Typography variant="subtitle1" style={{ color: "#757575" }}>
          Modify the details below to update the candidate information
        </Typography>
      </Box>

      <StyledFormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" value={user.name || ""} />
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Father Name</InputLabel>
        <Input onChange={onValueChange} name="father_name" value={user.father_name || ""} />
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Mobile Number</InputLabel>
        <Input onChange={onValueChange} name="mobile_no" value={user.mobile_no || ""} />
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email" value={user.email || ""} />
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Aadhar Number</InputLabel>
        <Input onChange={onValueChange} name="aadhar_no" value={user.aadhar_no || ""} />
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={onValueChange} name="address" value={user.address || ""} />
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Fee Amount</InputLabel>
        <Input onChange={onValueChange} name="fee_amount" value={user.fee_amount || ""} />
      </StyledFormControl>

      {/* Date input */}
      <StyledFormControl>
        <InputLabel>Joining Date</InputLabel>
        <Input
          type="date"
          name="join_date"
          value={user.join_date ? user.join_date.split("T")[0] : ""}
          onChange={onValueChange}
        />
      </StyledFormControl>

      {/* <StyledFormControl>
        <Autocomplete
          disablePortal
          fullWidth
          id="candidateStatus"
          name="candidateStatus"
          size="small"
          options={statusMenu}
          value={selectedStatus}
          onChange={(e, value) => {
            setSelectedStatus(value);
          }}
          getOptionLabel={(value) => value.label}
          sx={{ width: "100%", mt: 2, mb: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Status" placeholder="Status" />
          )}
        />
      </StyledFormControl> */}

      <SubmitButton variant="contained" onClick={EditUserDetails}>
        Update Details
      </SubmitButton>
    </Container>
  );
};

export default EditUser;
