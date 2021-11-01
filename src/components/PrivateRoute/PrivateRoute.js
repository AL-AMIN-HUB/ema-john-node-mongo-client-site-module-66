import React from "react";
import { Spinner, Button } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Button variant="primary" disabled>
          <Spinner size="sm" animation="border" variant="danger" />
          <span className="ms-2"> Loading...</span>
        </Button>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) => (user?.email ? children : <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>)}
    ></Route>
  );
};

export default PrivateRoute;
