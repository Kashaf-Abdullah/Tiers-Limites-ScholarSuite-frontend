

import React from 'react';

const ServicesCard = ({ para, fronthead1, fronthead2, image, icon: Icon }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, var(--green), var(--darkgreen))`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 600,
    fontSize: '1.9rem',
  };

  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="flip-card" tabIndex="0">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", borderRadius: "20px" }}>
            <Icon style={{ color: 'var(--darkgreen)', fontSize: '6.5rem' }} />
            <h4 style={gradientStyle}>
              {fronthead1}
              <br />
              {fronthead2}
            </h4>
          </div>
          <div className="flip-card-back">
            <div className="MeineVortragsthemen-card">
              <h3 style={{ textAlign: 'center', color: "var(--white)", fontSize: '19px', fontWeight: "700" }}>{fronthead1} {fronthead2}</h3>
              <p className="text">
                {para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

