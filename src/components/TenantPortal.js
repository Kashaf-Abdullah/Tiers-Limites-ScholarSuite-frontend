
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TenantPortal = () => {
  const [formData, setFormData] = useState({
    file: null,
    name: '',
    email: '',
    phone: '',
    unit: '',
    leaseInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', formData.file);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('unit', formData.unit);
    data.append('leaseInfo', formData.leaseInfo);

    try {
      const response = await axios.post('http://api.scholar-suites.com:4000/api/tenants', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        file: null,
        name: '',
        email: '',
        phone: '',
        unit: '',
        leaseInfo: ''
      });
      alert('Tenant data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className='sec-title'>Tenant Portal</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className='text'>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label  className='text'>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label  className='text'>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </Form.Group>

            <Form.Group controlId="formUnit">
              <Form.Label  className='text'>Unit Number</Form.Label>
              <Form.Control
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                required
                placeholder="Enter your unit number"
              />
            </Form.Group>

            <Form.Group controlId="formLeaseInfo">
              <Form.Label  className='text'>Lease Info</Form.Label>
              <Form.Control
                as="textarea"
                name="leaseInfo"
                value={formData.leaseInfo}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Enter lease information"
              />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label  className='text'>Upload File</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={handleFileChange}
                required
              />
            </Form.Group>

            <Button className="button-29 mt-3 w-100"  type="submit" >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TenantPortal;
