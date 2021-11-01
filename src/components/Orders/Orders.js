import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user.email, history]);

  return (
    <div>
      <h2>You have placed {orders.length} </h2>
      {orders.map((order) => (
        <li key={order._id}>
          {" "}
          {order.name}: {order.email}{" "}
        </li>
      ))}
    </div>
  );
};

export default Orders;
