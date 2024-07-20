import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const IntroSect = (props) => {
  const iconStyle={
    backgroundColor: "var(--green)",
              fontSize: "30px",
              fontWeight: "800",
              color: "var(--white)",
              border: "2px solid var(--green)",
              borderRadius:"50%",
              margin:"0 3px",
              padding:"4px"
             
  }

  return (
    <Col lg={12} style={{zIndex:"2"}}>
      <div className="intro-content" >
        <h1 className="heading" style={{ color: "var(--white)" }}>
          {props.head1}{" "}
          <span style={{ color: "var(--white)" }}>{props.head2}</span>{" "}
        </h1>
        <p className="text" style={{color:"var(--white)"}}>
        We make off campus living simple.
        </p>
      
        <div className="logo-social-media" style={{ margin: "1rem 0" }}>
        <FaFacebook style={iconStyle}/>
            {/* <FaInstagram style={iconStyle} /> */}
            <a href="https://www.instagram.com/scholar.suites?igsh=ZXpoOHpoNzUwanJ6" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} />
          </a>
            <FaYoutube style={iconStyle} />
            <FaPinterest style={iconStyle} />
            <FaTwitter style={iconStyle} />
            <FaLinkedin style={iconStyle} />
        </div>



       
        
      </div>
    </Col>
  );
};
export default IntroSect;

