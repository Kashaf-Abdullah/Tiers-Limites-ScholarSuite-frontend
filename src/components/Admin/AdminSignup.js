

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
  
    try {
      const response = await axios.post('http://api.scholar-suites.com:4000/auth-admin/signup-admin', {
        email,
        password
      });
      localStorage.setItem('token-admin', response.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };
  

  return (
    <Container className="mt-5" style={{padding:"8rem 0"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%' }}>
          <h1 className='sec-title'>Sign Up</h1>
          <Form onSubmit={handleSignup} >
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
            
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            
            <Button className='button-29' type="submit" >
              Signup 
            </Button>
            <p className='text mt-5'>Already a Member  
            
            <Link as={Link} to="/login-admin" >
                Login Here
            </Link>{" "}</p>
          </Form>
        </div>
        <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       
        </div>
      </div>
    </Container>
  );
}

export default Signup;
