import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginBox } from "../pages/LoginBox";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginBox} />
      <Route exact path="/auth/register" component={RegisterPage} />

      <Redirect to="/auth/login" />
    </Switch>
  );
};
