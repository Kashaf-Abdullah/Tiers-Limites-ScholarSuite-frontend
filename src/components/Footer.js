import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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

import logo from "../assets/logo_bc_Remover.png";
// import footer_logo from "../assets/footer-logo.png";
const Footer = () => {
  const iconStyle={
    backgroundColor: "var(--white)",
              fontSize: "30px",
              fontWeight: "800",
              color: "var(--darkgreen)",
              border: "2px solid var(--green)",
              borderRadius:"50%",
              margin:"0 1px",
              padding:"4px"
             
  }
  const footerCol={
position:"relative",
right:"14px"
  }
  return (
    <footer>
      <div style={{ backgroundColor: "var(--green)", padding: "4rem 2rem 1rem 2rem" }}>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <img
                src={logo}
                alt=""
                style={{
                  width: "7rem",
                  height: "5rem",
                  margin: "0 auto",
                }}
              />
              
              
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

              {/* <img src={footer_logo} alt="" style={{ width: "8rem" }} /> */}
            </Col>
            <Col lg={3} md={3} sm={12}>
              <h5 style={{  color: "var(--white)", }}>
                <b>Our Services</b>
              </h5>
              <Nav className="flex-column" style={footerCol}>
             <Nav.Link as={Link} to="/blogs" style={{ color: "var(--white)" }}>Blogs</Nav.Link>
              <Nav.Link as={Link} to="/review" style={{ color: "var(--white)" }}>Review</Nav.Link>
              <Nav.Link as={Link} to="/available-listing" style={{ color: "var(--white)" }}>Available Listing</Nav.Link>
           
            </Nav>
            </Col>
            <Col lg={3} md={3} sm={12}>
            <h5 style={{ color: "var(--white)" }}>
              <b>Company</b>
            </h5>
            <Nav className="flex-column"  style={footerCol}>
              <Nav.Link as={Link} to="/" style={{ color: "var(--white)" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/lease-swap" style={{ color: "var(--white)" }}>Lease Swapping</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "var(--white)" }}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/tenate-portal" style={{ color: "var(--white)" }}>Tenant Portal</Nav.Link>
              
              <Nav.Link as={Link} to="/review" style={{ color: "var(--white)" }}>Review</Nav.Link>
           
            </Nav>
          </Col>
            <Col lg={3} md={3} sm={12}>
              <h5 style={{ color: "var(--white)", }}>
                <b>GET HELP</b>
              </h5>
              
              <Nav className="flex-column"  style={footerCol}>
              <Nav.Link as={Link} to="/" style={{ color: "var(--white)" }}>Help Center</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "var(--white)" }}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "var(--white)" }}>Privacy Policy</Nav.Link>
             <Nav.Link as={Link} to="/" style={{ color: "var(--white)" }}>Terms and Conditions</Nav.Link>
        
           
            </Nav>
            </Col>
           
          </Row>
        </Container>
      </div>
      <p
        style={{
          textAlign: "center",
          position: "relative",
          top: "5px",
          padding: "0.2rem 0",
        }}
      >
        <span style={{ color: "var(--greenish_gray)" }}>COPYRIGHT SCHOLAR SUITES - </span>{" "}
        <span style={{ color: "var(--lightbrown)" }}>
          TERMS & CONDITIONS PRIVACY POLICY
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
