import React from 'react'

import int0 from '../img/int0.jpg';
import int00 from '../img/int00.jpg';
import int1 from '../img/int1.jpg';
import int4 from '../img/int4.jpg';
const LandingPage = () => {
  return (
    <div className='container'>
    
     
     
  <div id="carouselExampleCaptions" className="carousel slide" >
    <div className="carousel-indicators h-25">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <img src={int0} className="d-block w-100" alt="interview" />
        <div className="carousel-caption d-none d-md-block h-50">
          <h5 >Interview Question</h5>
          <p>Facilitate interviewer with several questions based on different domains</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={int4} className="d-block w-100 " alt="image2" />
        <div className="carousel-caption d-none d-md-block h-50">
          <h5>Facilitate Multiple Interview</h5>
          <p>Multiple interview can be taken at the same time.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={int00} className="d-block w-100" alt="Image3" />
        <div className="carousel-caption d-none d-md-block h-50">
          <h5 style={{color:'black'}}>Facilitate Identification of Questions</h5>
          <p style={{color:'black'}}>Interview can mark the suitable question.</p>
        </div>
      </div>
     
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  )
}
export default LandingPage