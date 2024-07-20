import { useEffect,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function Navbarr() {
  const navigate=useNavigate()
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };
  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
   };

  
  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        position: "fixed",
        width: "100%",
        
        zIndex: 1000,
        backgroundColor: "#f9f1f1",
        padding: "0.1rem 0",
        height: "5rem",
        top:"2.5rem"
        
      }}
    >
      <Container style={{ backgroundColor: "#f9f1f1" }}>
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
            src={logo}
            alt=""
            style={{
              width: "7.3rem",
              height: "4.3rem",
              position: "relative",
              bottom: "3px",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} style={{margin:"0px 10px"}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
          <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>
                Home
            </Nav.Link>{" "}
    
          
            {/* New Route */}
            <Nav.Link as={Link} to="/lease-swap" onClick={handleNavLinkClick}>
             Lease Swapping
            </Nav.Link>{" "}

             {/* New Route */}
             <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>
             Contact Us
            </Nav.Link>{" "}
            

             {/* New Route */}
           
             <Nav.Link as={Link} to="/tenate-portal" onClick={handleNavLinkClick}>
             ⁠Tenant Portal
            </Nav.Link>{" "}
            

            <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick}>
             Blogs
            </Nav.Link>{" "}
            

            
          </Nav>

        
          <Form className="d-flex nav-btns" style={{ display: "flex", flexWrap: "wrap" }}>
            {isLoggedIn ? (
              <Button onClick={handleLogout} className="button-29" role="button">
                Logout
              </Button>
            ) : (
              <Link to="/signup" className="button-29" role="button">
                Book Now
              </Link>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
