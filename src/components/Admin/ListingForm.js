
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const ListingForm = () => {
  const [formData, setFormData] = useState({
    head: "",
    det: "",
    image: null, // Store file
    price: "",
    est: "",
    type: "",
    built: "",
    lotSize: "",
    pricePerSqft: "",
    description: "",
    daysOnZillow: "",
    agent: "",
    
    agency: "",
    source: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch('http://api.scholar-suites.com:4000/api/listings', {
        method: 'POST',
        body: formDataToSend,
      });
      const result = await response.json();
      if (response.ok) {
        alert('Listing created successfully!');
        setFormData({
          head: "",
          det: "",
          image: null,
          price: "",
          est: "",
          type: "",
          built: "",
          lotSize: "",
          pricePerSqft: "",
          description: "",
          daysOnZillow: "",
          agent: "",
          agency: "",
          source: ""
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Error creating listing');
    }
  };

  return (
    <Container>
      <h2 className="sec-title">Create New Listing</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="head">
              <Form.Label>Head</Form.Label>
              <Form.Control type="text" name="head" value={formData.head} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="det">
              <Form.Label>Details</Form.Label>
              <Form.Control type="text" name="det" value={formData.det} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleFileChange} required />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="est">
              <Form.Label>Estimated Mortgage</Form.Label>
              <Form.Control type="text" name="est" value={formData.est} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" name="type" value={formData.type} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="built">
              <Form.Label>Built</Form.Label>
              <Form.Control type="text" name="built" value={formData.built} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lotSize">
              <Form.Label>Lot Size</Form.Label>
              <Form.Control type="text" name="lotSize" value={formData.lotSize} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="pricePerSqft">
              <Form.Label>Price per Sqft</Form.Label>
              <Form.Control type="text" name="pricePerSqft" value={formData.pricePerSqft} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="daysOnZillow">
              <Form.Label>Days on Zillow</Form.Label>
              <Form.Control type="text" name="daysOnZillow" value={formData.daysOnZillow} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="agent">
              <Form.Label>Agent</Form.Label>
              <Form.Control type="text" name="agent" value={formData.agent} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="agency">
              <Form.Label>Agency</Form.Label>
              <Form.Control type="text" name="agency" value={formData.agency} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="source">
              <Form.Label>Source</Form.Label>
              <Form.Control type="text" name="source" value={formData.source} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Create Listing
        </Button>
      </Form>
    </Container>
  );
};

export default ListingForm;
