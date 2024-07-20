

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LeaseSwapForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    location: '',
    squareFeet: '',
    rentAmount:'',
    bedroomCount: '',
    bathroomCount: '',
    amenities: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://api.scholar-suites.com:4000/api/leases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        // Clear the form
        setFormData({
          address: '',
          location: '',
          squareFeet: '',
          rentAmount:'',
          bedroomCount: '',
          bathroomCount: '',
          amenities: ''
        });
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <Container style={containerStyle}>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className='sec-title'>Lease Swap Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAddress" style={formGroupStyle}>
              <Form.Label className='text'>Address</Form.Label>
               <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation" style={formGroupStyle}>
              <Form.Label  className='text'>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                required
              />
            </Form.Group>

            <Form.Group controlId="formSquareFeet" style={formGroupStyle}>
              <Form.Label  className='text'>Square Feet</Form.Label>
              <Form.Control
                type="number"
                name="squareFeet"
                value={formData.squareFeet}
                onChange={handleChange}
                placeholder="Enter square feet"
                required
              />
            </Form.Group>
            <Form.Group controlId="formrentAmount" style={formGroupStyle}>
              <Form.Label  className='text'>Rent Amount</Form.Label>
              <Form.Control
                type="number"
                name="rentAmount"
                value={formData.rentAmount}
                onChange={handleChange}
                placeholder="Enter Rent Amount"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBedroomCount" style={formGroupStyle}>
              <Form.Label  className='text'>Bedroom #</Form.Label>
              <Form.Control
                type="number"
                name="bedroomCount"
                value={formData.bedroomCount}
                onChange={handleChange}
                placeholder="Enter number of bedrooms"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBathroomCount" style={formGroupStyle}>
              <Form.Label  className='text'>Bathroom #</Form.Label>
              <Form.Control
                type="number"
                name="bathroomCount"
                value={formData.bathroomCount}
                onChange={handleChange}
                placeholder="Enter number of bathrooms"
                required
              />
            </Form.Group>

            <Form.Group controlId="formAmenities" style={formGroupStyle}>
              <Form.Label  className='text'>Amenities</Form.Label>
              <Form.Control
                as="textarea"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                placeholder="Enter amenities"
                rows={3}
                required
              />
            </Form.Group>

            <button class="button-29 w-100"   >
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// Basic styling for form using Bootstrap container and center alignment
const containerStyle = {
  padding: '20px',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const buttonStyle = {
  width: '100%',
};

export default LeaseSwapForm;