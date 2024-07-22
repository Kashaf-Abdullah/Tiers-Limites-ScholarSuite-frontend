

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Col, Row } from 'react-bootstrap';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('profilePicture', profilePicture);

    try {
      const response = await axios.post('http://api.scholar-suites.com:4000/auth/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      localStorage.setItem('token', response.data.token);
      navigate('/user-profile');
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <Container className="mt-5" style={{padding:"8rem 10%"}}>
      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Col lg={6} md={12} sm={12} style={{  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h1 className="text-center mb-4 ">Hey! Welcome to Scholar Suites</h1>
            <p className="text-center text">Scholar Suites provides affordable, off-campus housing with private bedrooms and fully furnished common areas, offering the flexibility to rent with friends or meet new students. Enjoy a supportive community, clean spaces, and access to local events and exclusive raffles.</p>
          </div>
        </Col>
         <Col lg={6} md={12} sm={12}>
          <h1 className='sec-title'>Sign Up</h1>
          <Form onSubmit={handleSignup} encType="multipart/form-data">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="profilePicture" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Button className='button-29' type="submit" >
              Signup 
            </Button>
            <p className='text mt-5'>Already a Member  
            
            <Link as={Link} to="/login" >
                Login Here
            </Link>{" "}</p>
          </Form>
        </Col>
       
      </Row>
    </Container>
  );
}

export default Signup;
