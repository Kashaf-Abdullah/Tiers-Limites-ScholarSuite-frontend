import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaExclamation, FaMessage } from "react-icons/fa6";

const AboutCard = (props) => {
  return (
    <Col xs={12} sm={6} md={3}>
      <Card
        style={{
          textAlign: "center",
          backgroundColor: props.bcolor,
          padding: "1rem",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <FaExclamation style={{ fontSize: "32px" }} />
          <h3
            style={{
              fontSize: "33px",

              fontWeight: "bold",
              color: "var(--darkblue)",
            }}
          >
            PartnerShip
          </h3>
          <p style={{ fontSize: "17px", color: "var(--lightbrown)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            culpa iure. Obcaecati?
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AboutCard;
