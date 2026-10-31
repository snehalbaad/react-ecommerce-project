import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/products");
  };

  return (
    <div className="container-fluid py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center rounded-4 shadow-lg overflow-hidden bg-white p-4 p-lg-5">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3 text-uppercase fw-bold">
              New Collection Available
            </span>
            <h1 className="display-4 fw-bold text-dark mb-3">
              Discover Your Style with Our E-Commerce Store
            </h1>
            <p className="lead text-secondary mb-4">
              Explore the latest trends, high-quality products, and exclusive
              deals crafted just for you. Shop smart, live better, and upgrade
              your everyday lifestyle.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-lg-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3 fw-semibold shadow-sm"
                onClick={handleShopNowClick}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column: Banner Image */}
          <div className="col-lg-6 text-center">
            <div className="position-relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TeQGC5_Xzx4G6akIFnxZ4uPsd9ujtz152o6o_mmaCQ&s=10"
                alt="E-Commerce Hero Banner"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
