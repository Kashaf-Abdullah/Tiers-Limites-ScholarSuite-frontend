import React from "react";

const ELD_future = () => {
  return (
    <div>
      <section className="connect container-fluid" style={{ position: "relative" }}>
        <div className="connect-sec container" >
          <div className="connect-overlay" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(45, 37, 31, 0.2)", zIndex: "1" }}></div>
          <div className="connect-con" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "var(--white)", position: "relative", zIndex: "2" }}>
            <h2 className="heading" style={{textAlign:"center", fontWeight:"bold"}}>
            Scholar Suites LLC
            </h2>
            <p>
            Scholar Suites provides affordable and convenient off-campus housing for students. Experience dorm life without restrictions but with benefits like clean common spaces, private bedrooms, and fully furnished common areas.

Rent an entire unit with friends or secure a single room to meet students from nearby colleges. Our goal is to create a thriving off-campus community for academic and social growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELD_future;