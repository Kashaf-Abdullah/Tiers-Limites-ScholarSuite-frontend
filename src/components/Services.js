

import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaHandHolding, FaHome, FaUsers } from 'react-icons/fa';
import c1 from '../assets/1.jpg';
import c2 from '../assets/1.jpg';
import c3 from '../assets/1.jpg';
import ServicesCard from '../compCards/ServicesCard';

const Services = () => {
  return (
    <Container>
      <h3 className="sec-title">
        Why You Should Live with Scholar Suites
      </h3>
      <p className='title' style={{ textAlign: "center", marginBottom: "20px" }}>
        Join Scholar Suites and enjoy a comfortable and welcoming environment that supports
        both your academic focus and social connections. We look forward to welcoming you to
        our community!
      </p>
      <div className="row" style={{ marginBottom: "5rem" }}>
        <ServicesCard
          fronthead1="Flexible"
          fronthead2="Housing Options"
          para="Scholar Suites provides affordable and convenient off-campus housing tailored for students. Imagine dorm life without the restrictions, but with the benefits of consistently clean common spaces, private bedrooms, and fully furnished common areas. Whether you want to rent an entire unit with friends or secure a single room and meet students from nearby colleges and universities, Scholar Suites offers the flexibility to choose your ideal living arrangement. Our goal is to create an off-campus community where students can thrive both academically and socially, surrounded by like-minded housemates."
          image={c1}
          icon={FaHandHolding}
        />

        <ServicesCard
          fronthead1="Connected"
          fronthead2="Community Life"
          para="Our community page keeps residents informed about local events and opportunities to win Charlie Cards, meal deliveries, gift cards, and more through our exclusive raffles. Once your application is accepted, you can learn about your potential housemates through our tenant portal and even get in touch with them before moving in. Join Scholar Suites and enjoy a comfortable and welcoming environment that supports both your academic focus and social connections. We look forward to welcoming you to our community!"
          image={c2}
          icon={FaUsers}
        />

        <ServicesCard
          fronthead1="Engaging"
          fronthead2="Student Experience"
          para="Scholar Suites provides affordable and convenient off-campus housing tailored for students. Our community page keeps residents informed about local events and opportunities to win Charlie Cards, meal deliveries, gift cards, and more through our exclusive raffles. Join Scholar Suites and enjoy a comfortable and welcoming environment that supports both your academic focus and social connections. We look forward to welcoming you to our community!"
          image={c3}
          icon={FaHome}
        />
      </div>
    </Container>
  );
};

export default Services;
