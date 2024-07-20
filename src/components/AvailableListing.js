import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import AvailableListingCard from "../compCards/AvailableListingCard";

const AvailableListing = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch('http://api.scholar-suites.com:4000/api/listings');
      const data = await response.json();
      setListings(data);
    };
    fetchListings();
  }, []);

  const handleCardClick = (listing) => {
    setSelectedListing(listing);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedListing(null);
  };

  return (
    <Container>
      <h2 className="sec-title">Available Listings</h2>
      <Row>
        {listings.map((listing, index) => (
          <Col md={4} key={index} className="mb-4">
            <AvailableListingCard
              head={listing.head}
              det={listing.det}
              image={`http://api.scholar-suites.com:4000${listing.image}`}
              onClick={() => handleCardClick(listing)}
            />
          </Col>
        ))}
      </Row>

      {selectedListing && (
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedListing.head}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={`http://api.scholar-suites.com:4000${selectedListing.image}`} alt="" style={{ width: '100%' }} className="mb-3" />
            <Row>
              <Col md={6}>
                <p><strong>Price:</strong> {selectedListing.price}</p>
                <p><strong>Est. Mortgage:</strong> {selectedListing.est}</p>
                <p><strong>Type:</strong> {selectedListing.type}</p>
                <p><strong>Built:</strong> {selectedListing.built}</p>
                <p><strong>Lot Size:</strong> {selectedListing.lotSize}</p>
                <p><strong>Price per Sqft:</strong> {selectedListing.pricePerSqft}</p>
              </Col>
              <Col md={6}>
                <p><strong>Description:</strong> {selectedListing.description}</p>
                <p><strong>Days on Zillow:</strong> {selectedListing.daysOnZillow}</p>
                <p><strong>Agent:</strong> {selectedListing.agent}</p>
                <p><strong>Agency:</strong> {selectedListing.agency}</p>
                <p><strong>Source:</strong> {selectedListing.source}</p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default AvailableListing;
