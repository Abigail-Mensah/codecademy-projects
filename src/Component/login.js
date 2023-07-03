import React from "react";
import "./dashboard.css";
import contactImage from '../Component/images/contactimage.png';
import bellImage from '../Component/images/notification.png';
import surveyLogo from '../Component/images/surveylogo.png';
import icon from '../Component/images/icon1.png';
import arrow from '../Component/images/icon1.png';
import greenCircle from '../Component/images/'

function Login() {
  return (
    <div className="dashboard">

      <div className="sidebar">
      <img src={surveyLogo} alt="" className="survey-logo"/>
      </div>
        <div className="nav1">
          <div className="home">Home</div>
          <div className="aboutus">About Us</div>
          <div className="service">Service</div>
          <div className="contact">Contact </div>
          <div className="Team">Team</div>
          <img src={contactImage} alt=""  className="contact-image" />
          <img src={icon} alt=""  className="icon1" />
          <img src={arrow} alt=""  className="icon2" />
          <p className="name">Ohene Kyei</p>
          <img src={bellImage} alt="" className="bell-image" />

        </div>


        <div className="middle-container">
          <p className="survey-text">Create Survey
           </p>
        </div>
        <div className="numbers-bar">
          <div className="circle1">
          <img src={arrow} alt=""  className="icon2" />
          </div>
          <div className="circle2">
          <img src={arrow} alt=""  className="icon2" />
          </div>
          <div className="circle3">
          <img src={arrow} alt=""  className="icon2" />
          </div>
          <div className="circle4">
          <img src={arrow} alt=""  className="icon2" />
          </div>
          

          

        </div>
     
      <div className="main-content">
      </div>
    </div>
  );
}

export default Login;
