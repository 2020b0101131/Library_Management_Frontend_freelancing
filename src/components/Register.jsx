import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { registerUser } from "../service/Api.jsx";

const Register = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setCpassword]=useState();
    const [username,setUsername]=useState();
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{

         const response= await registerUser({username,email,password});
         console.log("saransh_response::",response.data);
          alert("Registered Successfully");
          navigate('/userprofile',{state:response.data});
        }catch(error){
          console.log("Error while handleSubmit",error);
        }
        
    }
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="row border border-secondary card w-sm-50 "
        
      >
        <div className="border border-primary px-sm-5">
          {/* Pills navs */}
          <ul
            className="nav nav-pills nav-justified mb-5 "
            id="ex1"
            role="tablist"
          >
            <li className="nav-item px-sm-5" role="presentation">
              <NavLink
                className="nav-link px-sm-5"
                id="tab-login"
                data-mdb-toggle="pill"
                to="/login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className="nav-link px-md-5"
                id="tab-register"
                data-mdb-toggle="pill"
                to="/register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
                Register
              </NavLink>
            </li>
          </ul>
          {/* Pills navs */}
          {/* Pills content */}
          <div className="tab-content ">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
                {/* ////////////////////////////////////////////////////////////////// */}
              <form>
                {/* UserName */}
                <div className="form-outline mb-1">
                  <input type="email" id="loginName" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} />
                  <label className="form-label" htmlFor="loginName">
                     Username
                  </label>
                </div>

                {/* Email input */}
                <div className="form-outline mb-1">
                  <input type="email" id="loginName" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <label className="form-label" htmlFor="loginName">
                    Email or username
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-1">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>
                {/* Confirm Password input */}
                <div className="form-outline mb-1">
                  <input
                    type="password"
                    id="logincPassword"
                    className="form-control"
                    value={cpassword} 
                    onChange={(e)=>{setCpassword(e.target.value)}}
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Confirm Password
                  </label>
                </div>
                <div>
                <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary btn-block mb-1">Register</button>
                </div>
                
               
               {/* ///////////////////////////////////////////////////////////////////// */}
               <div className="text-center mb-0">
                  <p>Or register in with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
              </form>
            </div>
            
          </div>
          {/* Pills content */}
        </div>
      </div>
    </div>
  );
};

export default Register;
