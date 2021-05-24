import React from "react";
import { Redirect, Route } from "react-router";

export const PublicRoute = ({
  isAthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
