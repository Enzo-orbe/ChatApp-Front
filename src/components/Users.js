import React from "react";
import { Container } from "react-bootstrap";
import { UserProfile } from "./UserProfile";

export const Users = () => {
  return (
    <Container fluid className="inbox_people">
      {/* <!-- Searchbox inicio --> */}
      <UserProfile />
      {/* <!-- Searchbox Fin --> */}

      {/* <!-- Sidebar inicio --> */}

      {/* <!-- Sidebar Fin --> */}
    </Container>
  );
};
