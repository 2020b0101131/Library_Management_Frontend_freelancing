import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";

import Navbar from "./components/Navbar";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/Footer";

import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route exact path="/adduser" element={<AddUser />}></Route>
        <Route exact path="/allusers" element={<AllUsers />}></Route>
        <Route exact path="/edit/:id" element={<EditUser />}></Route>
        <Route exact path="/userprofile" element={<UserProfile />}></Route>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
