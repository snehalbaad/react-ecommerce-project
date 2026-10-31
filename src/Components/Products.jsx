import React, { useState } from "react";
import ProductData from "./ProductData/product.js";
function Products() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? ProductData
      : ProductData.filter((val) => val.category === category);

  return (
    <>
      <h1 className="text-center text-danger bg-dark p-2">Products Data</h1>

      {/* Category Buttons */}
      <div className="text-center my-3">
        <button
          className="btn btn-primary m-2"
          onClick={() => setCategory("All")}
        >
          All Products
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => setCategory("Lifestyle")}
        >
          Lifestyle
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => setCategory("Fashion")}
        >
          Fashion
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => setCategory("Electronics")}
        >
          Electronics
        </button>
      </div>

      {/* Product Cards */}
      <div className="container my-3">
        <div className="row">
          {filteredProducts.map((val) => {
            return (
              <div className="col-md-3 mb-3" key={val.id}>
                <ProductsCard
                  id={val.id}
                  name={val.name}
                  category={val.category}
                  price={val.price}
                  image={val.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// Reusable Product Card Component
function ProductsCard({ id, name, category, price, image }) {
  return (
    <div className="card p-3 my-2 border shadow-sm h-100">
      <img src={image} className="card-img-top" alt={name} height="180" />

      <div className="card-body">
        <h5>{name}</h5>

        <p className="text-muted m-0 small">{category}</p>

        <strong className="text-primary">₹{price}</strong>
      </div>
    </div>
  );
}

export default Products;
