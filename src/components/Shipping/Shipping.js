import React from "react";
import { useForm } from "react-hook-form";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import useAuth from "../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed successfully");
          clearTheCart();
          reset();
        }
      });
  };
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input defaultValue={user.email} {...register("email", { required: true })} />
        <input placeholder="Address" {...register("address")} />
        <input placeholder="City" {...register("city")} />
        <input placeholder="Your phone number" {...register("phone")} />

        {errors.email && <span className="error">This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
