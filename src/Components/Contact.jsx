import React from "react";
import { useRoutes } from "react-router-dom";
function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>

      <div className="col-md-6 mx-auto mt-4">
        <form>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Name"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter Email"
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Subject"
          />

          <textarea
            className="form-control mb-3"
            placeholder="Enter Message"
          ></textarea>

          <button className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
