import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  return (
    <div className="row w-75 mx-auto">
      <div className="col-md-9">
          
      </div>
      <div className="col-md-3 border-start mt-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
