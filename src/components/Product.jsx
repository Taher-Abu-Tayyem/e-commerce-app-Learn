import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    const {product,showButton}=props
  return (
    <>
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
          {product.description}
          </p>
          <p >
          {product.price}$
          </p>
          {showButton ? <Link to={`/product/${product.id}`} href="/#" className="btn btn-primary">
          Details
          </Link> : null}
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
