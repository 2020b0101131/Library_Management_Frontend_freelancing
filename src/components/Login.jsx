import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { loginUser } from "../service/Api.jsx";
import logo from "../img/logo_interview.jpg"
const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  
  const handleSign=async(e)=>{
    e.preventDefault();
    try{
      const backend_response=await loginUser({email,password});
      alert(backend_response.data.message);
      if((backend_response.data.message)==="Login Successful"){
        navigate("/codeforuser");
      }
     

    }catch(error){
      console.log("Error while handleSubmit",error);
    }
    
}
  return (
    
    <div className="container d-flex justify-content-center mb-5 ">
    
    <nav style={{backgroundColor: '#000000'}} className="navbar navbar-expand-lg  fixed-top  " id="mainNav">
    <div className="container ">
    <a className="navbar-brand " href="#page-top"><img style={{height:'40px'}}src={logo} alt="logo" /></a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars ms-1" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li className="nav-item"><a className="nav-link" href="#services">BRAND</a></li>
          {/* <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li> */}
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
     
      <div className="row border border-secondary card w-sm-50 mt-5 ">
        <div className="border border-primary ">
          {/* Pills navs */}
          <ul
            className="nav nav-pills nav-justified mb-1 "
            id="ex1"
            role="tablist"
          >
            <li className="nav-item " role="presentation">
              <NavLink
                className="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                to="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item " role="presentation">
              <NavLink
                className="nav-link"
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
          <div className="tab-content mx-sm-5">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form>
                <div className="text-center mb-1">
                  <p>Sign in with:</p>
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
                <p className="text-center">or:</p>
                {/* Email input */}
                <div className="form-outline mb-2">
                  <input type="email" id="loginName" className="form-control"  value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                  <label className="form-label" htmlFor="loginName">
                    Email or username
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-2">
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
                {/* 2 column grid layout */}
                <div className="row mb-2">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* Checkbox */}
                    <div className="form-check mb-1 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="loginCheck"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="loginCheck">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* Simple link */}
                    <NavLink to="#!">Forgot password?</NavLink>
                  </div>
                </div>
                {/* Submit button */}
                <button onClick={(e)=>handleSign(e)} className="btn btn-primary btn-block mb-1">Sign In</button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Not a member? <NavLink to="#!">Register</NavLink>
                  </p>
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

export default Login;
