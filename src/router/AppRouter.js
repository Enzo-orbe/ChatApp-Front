import React, { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { Chat } from "../pages/Chat";
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (auth.checking) {
    return <Spinner animation="grow" variant="info" />;
  }

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <PublicRoute
            isAthenticated={auth.logged}
            path="/auth"
            component={AuthRouter}
          />
          {/* <Route exact path="/" component={Chat} /> */}
          <PrivateRoute
            isAthenticated={auth.logged}
            path="/"
            component={Chat}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
