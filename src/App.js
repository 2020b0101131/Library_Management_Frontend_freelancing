import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import CodeforUser from "./components/CodeforUser";
import Navbar from "./components/Navbar";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backend from "./components/Backend";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ScheduleInterview from "./components/ScheduleInterview";
import MeetingRoom from "./components/MeetingRoom";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Register from "./components/Register";
import Frontend from "./components/Frontend";
import WebDev from "./components/WebDev";
import DataScience from "./components/DataScience";
import Java from "./components/Java";
import Python from "./components/Python";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/codeforuser" element={<CodeforUser />}></Route>
          <Route exact path="/adduser" element={<AddUser />}></Route>
          <Route exact path="/allusers" element={<AllUsers />}></Route>
          <Route exact path="/edit/:id" element={<EditUser />}></Route>
          <Route exact path="/backend" element={<Backend />}></Route>
          <Route exact path="/room" element={<ScheduleInterview />}></Route>
          <Route
            exact
            path="/room/:roomId"
            element={<MeetingRoom />}
          ></Route>
           <Route exact path="/userprofile" element={<UserProfile/>}></Route>
           <Route exact path="/login" element={<Login/>}></Route>
           <Route exact path="/register" element={<Register/>}></Route>
           <Route exact path="/frontend" element={<Frontend/>}></Route>
           <Route exact path="/webdev" element={<WebDev/>}></Route>
           <Route exact path="/datascience" element={<DataScience/>}></Route>
           <Route exact path="/java" element={<Java/>}></Route>
           <Route exact path="/python" element={<Python/>}></Route>
        </Routes>
       
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
