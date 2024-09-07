import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, styled } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo_interview.jpg';

// Styled AppBar for custom styling
const Header = styled(AppBar)`
  background: #111111;
  box-shadow: none;
`;

// Styled NavLink for consistent styling
const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  margin-right: 20px;
  color: #ffffff;
  text-decoration: none;
  &.active {
    font-weight: bold;
    border-bottom: 2px solid #ffffff;
  }
  &:hover {
    color: #bbbbbb;
  }
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <NavLink to="/" className="me-3">
          <img src={logo} alt="logo" style={{ height: '40px' }} />
        </NavLink>
        <div className="d-flex flex-grow-1 justify-content-center">
          <StyledNavLink to="/codeforuser">Code for Interview</StyledNavLink>
          <StyledNavLink to="/allusers">All Users</StyledNavLink>
          <StyledNavLink to="/adduser">Add User</StyledNavLink>
          <StyledNavLink to="/room">Schedule Interview</StyledNavLink>
          <StyledNavLink to="/userprofile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
              style={{ verticalAlign: 'middle' }}
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </div>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
