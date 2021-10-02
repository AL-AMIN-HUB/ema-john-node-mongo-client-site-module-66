import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // products to be rendered on the UI
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));

    setDisplayProducts(matchedProducts);
  };

  return (
    <>
      <div className="bg-secondary py-2">
        <input type="text" onChange={handleSearch} placeholder="Search Your Products..." className="input-group form-control mx-auto w-75" />
      </div>
      <div className="row w-75 mx-auto">
        <div className="col-md-9">
          {displayProducts.map((product) => (
            <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>
          ))}
        </div>
        <div className="col-md-3 border-start mt-3">
          <Cart cart={cart}>
            <NavLink to="/review">
              <button className="btn btn-warning px-3 fs-5">Review Your Order</button>
            </NavLink>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
