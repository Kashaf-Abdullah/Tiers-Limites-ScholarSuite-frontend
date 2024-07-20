


import React from "react";
import { Card } from "react-bootstrap";

const AvailableListingCard = (props) => {
  return (
    <Card onClick={props.onClick} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.head}</Card.Title>
        <Card.Text>{props.det}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AvailableListingCard;
