import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import intro from "../";
// import star from "../assets/review.png";
// import star2 from "../assets/review2.png";
// import star3 from "../assets/review3.png";
// import star4 from "../assets/review4.png";
import IntroSect from "../compCards/IntroSect";
import IntroTabs from "./IntroTabs";
import Listing from "./Listing";

const Intro = () => {
  const products = [
    { location: "New York", price: 1000, squareFeet: 800, bedroomCount: 2, bathroomCount: 1 },
    { location: "Los Angeles", price: 1200, squareFeet: 900, bedroomCount: 3, bathroomCount: 2 },
    { location: "Chicago", price: 900, squareFeet: 750, bedroomCount: 2, bathroomCount: 1 },
    // Add more products as needed
  ];

  return (
    <div
      className="intro"
      style={{
        // backgroundColor: "#f9f1f1",
        // borderRadius: "20px",
        // padding: "20px",
      
      }}
    >
      <Container fluid
        style={{
        //   backgroundImage: `url(${intro})`,
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // borderRadius: "20px",
          padding: "60px 20px",
          height:"100%",
        }}
      >
          <div className="intro-overlay"></div>
        <Row style={{zIndex:"2"}}>
          <IntroSect
            head1="Find your place  "
            head2="with Scholar Suites"
          />
        </Row>


        <IntroTabs/>
      
        <Listing products={products} /></Container>
    </div>
  );
};

export default Intro;
