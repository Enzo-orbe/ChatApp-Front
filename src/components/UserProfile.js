import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../auth/AuthContext";

export const UserProfile = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <Container fluid className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{auth.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button onClick={() => logout()} className="btn text-danger">
            Salir
          </button>
        </div>
      </div>
    </Container>
  );
};
