// import React, { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Listing from './Listing'; // Make sure to use ListingTab instead of Listing
// import { Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const IntroTabs = () => {
//   const [key, setKey] = useState("tab1");

//   const products = [
//     { location: "New York", price: 1000, squareFeet: 800, bedroomCount: 2, bathroomCount: 1 },
//     { location: "Los Angeles", price: 1200, squareFeet: 900, bedroomCount: 3, bathroomCount: 2 },
//     { location: "Chicago", price: 900, squareFeet: 750, bedroomCount: 2, bathroomCount: 1 },
//     // Add more products as needed
//   ];

//   const handleNavLinkClick = () => {
//     setKey("tab1");
//   };

//   return (
//     <Container>
//     <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
//       <TabList>
//         <Tab eventKey="tab1" onClick={(e) => handleNavLinkClick(e, "tab1", "/available-listing")}>
//           <Nav.Link as={Link} to="/available-listing">
//             Available Listing
//           </Nav.Link>
//         </Tab>
//         <Tab eventKey="tab2" onClick={(e) => handleNavLinkClick(e, "tab2", "/about")}>
//           <Nav.Link as={Link} to="/about">
//             About Us
//           </Nav.Link>
//         </Tab>
//         <Tab eventKey="tab3" onClick={(e) => handleNavLinkClick(e, "tab3", "/community")}>
//           <Nav.Link as={Link} to="/community">
//             Community
//           </Nav.Link>
//         </Tab>
//       </TabList>
//       <TabPanel>
//         {/* Content for Available Listing tab */}
//       </TabPanel>
//       <TabPanel>
//         {/* Content for About Us tab */}
//       </TabPanel>
//       <TabPanel>
//         {/* Content for Community tab */}
//       </TabPanel>
//     </Tabs>
//   </Container>
//   );
// };

// export default IntroTabs;import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const IntroTabs = () => {
  const [key, setKey] = useState("tab1");

  const handleTabClick = (tabKey, route) => {
    setKey(tabKey);
    window.location.href = route;
  };

  return (
    <Container>
      <Tabs className="Tabs" selectedIndex={key} onSelect={(index) => setKey(index)}>
        <TabList>
          <Tab eventKey="tab1" onClick={() => handleTabClick("tab1", "/available-listing")}>
            Available Listing
          </Tab>
          <Tab eventKey="tab2" onClick={() => handleTabClick("tab2", "/about")}>
            About Us
          </Tab>
          <Tab eventKey="tab3" onClick={() => handleTabClick("tab3", "/community")}>
            Community
          </Tab>
        </TabList>
        <TabPanel>
          {/* Content for Available Listing tab */}
        </TabPanel>
        <TabPanel>
          {/* Content for About Us tab */}
        </TabPanel>
        <TabPanel>
          {/* Content for Community tab */}
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default IntroTabs;
