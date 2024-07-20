
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Admin = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if token is not available
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get('http://api.scholar-suites.com:4000/auth/me', config);
        setUserData(res.data);
      } catch (err) {
        console.error('Error fetching user data:', err.response?.data || err.message);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page
  };

  // Inline CSS styles for the components
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    margin: '10px',
  };

  const profilePictureStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const infoTextStyle = {
    margin: '5px 0',
    fontSize: '16px',
    color: '#333',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <Container style={{ paddingTop:"13rem" }}>
      <Row>
        <Col md={4} className="text-center">
          <div style={cardStyle}>
            {userData.profilePicture && (
              <img
                src={`http://api.scholar-suites.com:4000${userData.profilePicture}`}
                alt="Profile"
                style={profilePictureStyle}
              />
            )}
            <h4 style={headerStyle}>{userData.username}</h4>
            <p style={infoTextStyle}>{userData.email}</p>
            <p style={infoTextStyle}>{userData.bio}</p>
            <Button variant="primary" onClick={handleLogout}>Logout</Button>
          </div>
        </Col>
        <Col md={8}>
          <div style={cardStyle}>
            <h2 style={headerStyle}>User Information</h2>
            <Row>
              <Col md={6}>
                <div style={infoTextStyle}><strong>Name:</strong> {userData.username}</div>
              </Col>
              <Col md={6}>
                <div style={infoTextStyle}><strong>Email:</strong> {userData.email}</div>
              </Col>
              
              <Col md={6}>
                <div style={infoTextStyle}>
                  <strong>Status:</strong> 
                  <span style={{ color: userData.status === 'Active' ? 'green' : 'gray', marginLeft: '10px' }}>
                    {userData.status}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
