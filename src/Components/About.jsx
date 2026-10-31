import React from "react";

import { useRoutes } from "react-router-dom";
function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">About Us</h1>

      <div className="row mt-4">
        <div className="col-md-4">
          <h3>Our Story</h3>
          <p>We started our journey to make online shopping easy.</p>
        </div>

        <div className="col-md-4">
          <h3>Our Mission</h3>
          <p>Our mission is to provide quality products at good prices.</p>
        </div>

        <div className="col-md-4">
          <h3>Why Choose Us</h3>
          <p>We provide quality products and a better shopping experience.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
