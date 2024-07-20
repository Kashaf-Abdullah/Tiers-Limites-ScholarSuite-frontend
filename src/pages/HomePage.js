
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Concierge from '../components/Concierge';
import Details from '../components/Details';

import i2 from '../assets/1.jpg'
import Services from '../components/Services';
// import Exclusives from '../components/Exclusives';
import Blogs from '../components/Blogs';
import FAQs from '../components/FAQs';
const HomePage = () => {
 

  return (
    <div>
    <Intro/>
{/* <Exclusives/> */}
    <Concierge
    dir="row-reverse"
      
          head2="Why Choose Scholar Suites?"
          text="Scholar Suites provides affordable and convenient off-campus housing for students. Experience dorm life without restrictions but with benefits like clean common spaces, private bedrooms, and fully furnished common areas."
          i1={i2}
/>
<Details/>
<Services/>
<Blogs/>
<FAQs/>

   
    
    </div>
  );
};

export default HomePage;
