

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://api.scholar-suites.com:4000/auth/login', { email, password });
      const token = res.data.token;
      localStorage.setItem('token', token); // Store token in localStorage
      navigate('/user-profile');
    } catch (err) {
      console.error('Login error:', err.response?.data?.msg || err.message);
      setError(err.response?.data?.msg || 'Login failed. Please try again.');
    }
  };

  return (
    <Container className="mt-5" style={{padding:"8rem 10%"}}>
      <Row  style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Login form */}
        <Col lg={6} md={12} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Hey! Welcome to Scholar Suites</h1>
            <p className="mt-4">Scholar Suites provides affordable and convenient off-campus housing for students. Experience dorm life without restrictions but with benefits like clean common spaces, private bedrooms, and fully furnished common areas</p>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} style={{ paddingRight: '2rem' }}>
          <h2 className=" mb-4 sec-title">Login</h2>
          <Form onSubmit={handleLogin}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Button className='button-29'  type="submit" >Login</Button>
            <p className='text mt-4'>Don't Have an Account .  
            
            <Link as={Link} to="/signup" >
               Signup Here
            </Link>{" "}</p>
          </Form>
        </Col>
        {/* Right side: Welcome text */}
      
      </Row>
    </Container>
  );
};

export default Login;
