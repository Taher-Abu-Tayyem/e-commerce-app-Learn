import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  // const [jewelery, setjewelery] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((Categories) => setCategories(Categories));
  };

  const getProductsinCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) =>  setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
   
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
      <button  onClick={()=>{getProducts()}} className="btn btn-info">
             All
          </button>
        {Categories.map((cat) => (
          <button key={cat} onClick={()=>{getProductsinCategory(cat)}} className="btn btn-info">
            {cat}
          </button>
        ))}
        <div className="row">
          {products.map((product) => {
            return (
              <Product key={product.id} product={product} showButton={true} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
