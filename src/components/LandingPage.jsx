import React from 'react'
import { NavLink } from "react-router-dom";
import int0 from '../img/int0.jpg';
import int00 from '../img/int00.jpg';
import int1 from '../img/int1.jpg';
import int4 from '../img/int4.jpg';
import logo from "../img/logo_interview.png"
import begining from "../img/begining.jpg"
import agency from "../img/agency.png"
import cand_evalution from "../img/cand_evaluation.png"
import communication_tool from "../img/communication_tool.jpeg"
import interview_recording from "../img/interview_recording.jpeg"
import analytics_reporting from "../img/analytics_reporting.jpeg"
import skill_testing from "../img/skill_testing.png"
import interview_collaboration from "../img/interview_collaboration.jpeg"
import "../startbootstrap-agency-gh-pages/css/styles.css"

const LandingPage = () => {
  return (
    <div className='container'>
  <nav style={{backgroundColor: '#000000'}} className="navbar navbar-expand-lg  fixed-top  " id="mainNav">
    <div className="container">
      <a className="navbar-brand " href="#page-top"><img style={{height:'40px'}}src={logo} alt="logo" /></a>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars ms-1" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
 
  <marquee className="fixed-top "id="gfg" style={{backgroundColor:'yellow',marginTop: '5rem'}}><b>Please log in to access all features. The site is currently being enhanced—thank you for your patience.</b></marquee>

  {/* Masthead*/}
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Welcome To Our Studio!</div>
      <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
      <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
    </div>
  </header>
  {/* Services*/}
  <section className="page-section" id="services">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Unlock Talent. Simplify Hiring. InterviewG Delivers.</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-list-ol fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Questionnaire Management</h4>
          <p className="text-muted">Craft tailored interview experiences with ease! Access a vast library of questions or customize your own to find the perfect fit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Schedule Interview</h4>
          <p className="text-muted">Effortlessly streamline your hiring process with our intuitive scheduling tool. Coordinate interviews, sync calendars, and never miss a candidate again!</p>
        </div>
       
        
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-address-book-o fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Interviewee Management</h4>
          <p className="text-muted">Centralize your candidate database. Keep track of applicants, manage profiles, and make informed decisions backed by organized data.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio Grid*/}
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Features at Glance</h2>
        <h3 className="section-subheading">Efficient. Intuitive. Powering Your Hiring Process.</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={cand_evalution} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Candidate Evaluation</div>
              <div className="portfolio-caption-subheading ">Tools to rate and evaluate candidates based on various criteria.</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 2*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={communication_tool} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Communication Tools</div>
              <div className="portfolio-caption-subheading ">Integrated email or messaging systems for interviewer-candidate communication.</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 3*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
            <img className="img-fluid" src={interview_recording}alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Interview Recording</div>
              <div className="portfolio-caption-subheading ">Capability to record and review interviews for later assessment.</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          {/* Portfolio item 4*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={analytics_reporting} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Analytics and Reporting</div>
              <div className="portfolio-caption-subheading ">Data-driven insights on interview performance and candidate metrics.</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          {/* Portfolio item 5*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={skill_testing} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Skill Testing</div>
              <div className="portfolio-caption-subheading ">Integration of skill assessments to evaluate candidate abilities</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Portfolio item 6*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={interview_collaboration} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Interviewer Collaboration</div>
              <div className="portfolio-caption-subheading ">Features that enable multiple interviewers to collaborate and share feedback.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About*/}
  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">Elevating Interviews. Empowering Your Success.</h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid h-100" src={begining} alt="begining" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2022-2023</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">From a simple idea to a game-changer. Discover the inspiring story of InterviewG's inception and our passion for innovation.</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid h-100" src={agency} alt="agency" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>September 2023</h4>
              <h4 className="subheading">An Agency will Born</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">The birth of InterviewG, a groundbreaking platform that revolutionizes hiring. Learn how we became the go-to solution for interviewers.</p></div>
          </div>
        </li>
        {/* <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2015</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li> */}
        {/* <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>July 2020</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li> */}
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* Team
  <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
            <h4>Parveen Anand</h4>
            <p className="text-muted">Lead Designer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
            <h4>Diana Petersen</h4>
            <p className="text-muted">Lead Marketer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Developer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
      </div>
    </div>
  </section> */}
  {/* Clients*/}
  {/* <div className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Contact*/}
  <section style={{marginBottom:"3rem"}}className="page-section" id="contact">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">Reach Out. Let's Connect Today</h3>
      </div>
      {/* * * * * * * * * * * * * * * **/}
      {/* * * SB Forms Contact Form * **/}
      {/* * * * * * * * * * * * * * * **/}
      {/* This form is pre-integrated with SB Forms.*/}
      {/* To make this form functional, sign up at*/}
      {/* https://startbootstrap.com/solution/contact-forms*/}
      {/* to get an API token!*/}
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              {/* Name input*/}
              <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div className="form-group">
              {/* Email address input*/}
              <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            <div className="form-group mb-md-0">
              {/* Phone number input*/}
              <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              {/* Message input*/}
              <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
          </div>
        </div>
        {/* Submit success message*/}
        {/**/}
        {/* This is what your users will see when the form*/}
        {/* has successfully submitted*/}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center text-white mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
          </div>
        </div>
        {/* Submit error message*/}
        {/**/}
        {/* This is what your users will see when there is*/}
        {/* an error submitting the form*/}
        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
        {/* Submit Button*/}
        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
      </form>
    </div>
  </section>
  {/* Footer*/}
  {/* <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">Copyright © InterviewG 2022</div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
          <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer> */}
  {/* Portfolio Modals*/}
  {/* Portfolio item 1 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Demo Clips</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                <p>Work in Progress</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Threads
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Illustration
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 2 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Demo Clips</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                <p>Work in Progress</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Explore
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Graphic Design
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 3 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Demo Clips</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                <p>Work in Progress</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Finish
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Identity
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 4 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Demo Clips</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                <p>Work in Progress</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Lines
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Branding
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 5 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Demo Clips</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                <p>Work in Progress</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Southwest
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Website Design
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 6 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Demo Clips</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                <p>Work in Progress</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Window
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Photography
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>



  )
}
export default LandingPage