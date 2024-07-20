import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Concierge = (props) => {
  const tickStyle = {
    color: "var(--greenish_gray)",
    borderRadius: "50%",
    fontSize: "24px",
    position: "relative",
    top: "4px",
    marginRight: "6px",
    backgroundColor:"var(--white)"
     };

  const listStyle = {
    
  };
  const list = {
    margin: "10px 0",
  };
  return (
    <Container>
    <Row
      style={{ display: "flex", flexDirection: props.dir, margin: "5rem 0" }}
    >
      <Col lg={6} md={6} sm={12}
    >
     
        <h4
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            color: "var(--black)",
          }}
        >
          {props.head2}
        </h4>

        <p style={{ fontSize: "15px", color: "var(--greenish_gray)", margin: "2rem 0" }}>
          {props.text}{" "}
        </p>
        <ul
          style={{
            display: props.dis,
            fontSize: "0.9rem",
            listStyleType: "none",
            paddingLeft: "0rem",
          }}
        >
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i> Post your Ad
            Affordable and convenient off-campus housing
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i> Get Genuine
            Clean common spaces and private bedrooms
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i>Sell your car
            Fully furnished common areas
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i>Post your Ad for
            Exclusive raffles and community page
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i>Get Genuine
            Connect with housemates via tenant portal
          </li>
        </ul>
      
        <Link to="/signup" className="button-29" role="button">
                Try Now
              </Link>
       

      </Col>
      <Col lg={6} md={6} sm={12}>
        <img
          src={props.i1}
          alt=""
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "10px",
            backgroundColor: "#DFF0D8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: "2rem 0",
          }}
        />
      </Col>
    </Row>
    </Container>
  );
};

export default Concierge;
