

import React from 'react'
import s1 from '../assets/Floor plan.jpg'
import { Link } from 'react-router-dom'
const AboutQuality = () => {
  return (
    <section class="about-section">
      <div class="container">
        <div class="row">
          <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div class="inner-column">
              <h2 class="sec-title">About Scholar Suites</h2>
              <div class="text">
            
              Whether you want to rent an entire unit with friends or secure a single room and meet students
from nearby colleges and universities, Scholar Suites offers the flexibility to choose your ideal
living arrangement. Our goal is to create an off-campus community where students can thrive
both academically and socially, surrounded by like-minded housemates

<br/><br/>

Our community page keeps residents informed about local events and opportunities to win
Charlie Cards, meal deliveries, gift cards, and more through our exclusive raffles. Once your
application is accepted, you can learn about your potential housemates through our tenant
portal and even get in touch with them before moving in.
     </div>
            
     <Link to="/contact" className="button-29" role="button"
     style={{margin:"10px 0"}}>
                Contact Us
              </Link>
            </div>
          </div>
          <div class="image-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column wow fadeInLeft">
              <figure class="image-1">
                <a href="#" class="lightbox-image" data-fancybox="images">
                  <img title="Rahul Kumar Yadav" src={s1} alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>
        <h2 class="sec-title">Join Scholar Suites</h2>
        <p class="text" style={{ textAlign: "center" }}>
      
Join Scholar Suites, where academic excellence meets community camaraderie. Discover a haven designed to nurture your studies while enriching your social experiences. Our welcoming environment supports both your academic focus and personal growth. From quiet study areas to vibrant common spaces, we have everything you need to thrive. Embrace a community that fosters learning and meaningful connections. We eagerly await the opportunity to welcome you into our vibrant community!






        </p>
      </div>
    </section>
  )
}

export default AboutQuality
