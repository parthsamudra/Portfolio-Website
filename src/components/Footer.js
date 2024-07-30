import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color:
                "#fff", marginRight: "2rem" }} />
                <div>
                    <p> Ghas Bazar, Sangamner.</p>
                    <p>Maharashtra.</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{ color:
                "#fff", marginRight: "2rem" }} />
            +919421584786</h4>
            </div>
            <div className="email">
            <h4>
            <FaMailBulk size={20} style={{ color:
                "#fff", marginRight: "2rem" }} />
            samudraparth1@gmail.com
            </h4>
            </div>
        </div>
        <div className="right">
        <h4>About the company</h4>
        <p>This is me Parth Samudra.CEO & Founder of 
        Parth Software Solutions. We build custum 
        websites within a Week In very
        Cheaper price.</p>
        <div className="social">
      <a href="https://www.facebook.com/parth.samudra.9" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
      </a>
      <a href="https://www.instagram.com/parth_samudra/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
      </a>
      <a href="https://www.linkedin.com/in/parth-samudra/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
      </a>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Footer