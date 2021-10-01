import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, star } = props.product;

  return (
    <div className="d-flex align-items-center mt-5 border-bottom">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="ms-3">
        <h4 className="text-primary">{name}</h4>
        <p className="lead">
          <small>by: {seller}</small>
        </p>
        <p className="lead">Price: {price}</p>
        <p className="lead">
          <small>
            only <b>{stock}</b> left in stock - order soon
          </small>
        </p>
        <Rating initialRating={star} emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
        <br />
        <button onClick={() => props.handleAddToCart(props.product)} className=" btn btn-warning fs-4 px-4 my-2">
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
