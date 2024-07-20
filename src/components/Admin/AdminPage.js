import React from 'react';
import { Tabs, Tab, Container ,Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogWritePage from '../../pages/BlogWritePage';
import ListingForm from './ListingForm';
import { useNavigate } from 'react-router-dom';
import AvailableListing from '../AvailableListing';


const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token-admin'); // Remove the token from localStorage
    navigate('/login-admin'); // Redirect to login page
  };

  return (
    <Container  style={{ paddingTop:"2rem" }}>
        {/* <Button variant="primary" onClick={handleLogout}>Logout</Button> */}
        <Row className="mb-3">
        <Col className="text-right">
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
      <Tabs defaultActiveKey="uploadBlogs" id="admin-tabs" className="mb-3">
        <Tab eventKey="uploadBlogs" title="Upload Blogs">
          <div>
            {/* Content for uploading blogs */}
            <h2>Upload Blogs</h2>
            <p>Here you can upload new blogs.</p>
          <BlogWritePage/>
          
          </div>
        </Tab>
        <Tab eventKey="addListing" title="Add Listing">
          <div>
            {/* Content for adding listings */}
            <h2>Add Listing</h2>
            <p>Here you can add new listings.</p>
            <ListingForm/>
          </div>
        </Tab>

        <Tab eventKey="allListing" title="All Listing">
          <div>
       
            <AvailableListing/>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminPage;
