import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";


const ReviewItem = (props) => {
  const { name, price, quantity, key } = props.product;
  const { handleRemove } = props;
 
  return (
    <div className="mt-3 border-bottom">
      <h4 className="text-primary"> {name} </h4>
      <p className="lead">Price: {price} </p>
      <p className="lead">Quantity: {quantity} </p>
      <button onClick={() => handleRemove(key)} className="btn btn-warning px-3 fs-5 mb-2">
        {" "}
        <FontAwesomeIcon icon={faEraser} /> Remove
      </button>
    </div>
  );
};

export default ReviewItem;
