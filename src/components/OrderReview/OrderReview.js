import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  //   add even handler
  const handleRemove = (key) => {
    //   remove item logic here
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    // delete from db
    removeFromDb(key);
  };
  return (
    <div className="row w-75 mx-auto">
      <div className="col-md-9">
        {cart.map((product) => (
          <ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>
        ))}
      </div>
      <div className="col-md-3 border-start mt-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
