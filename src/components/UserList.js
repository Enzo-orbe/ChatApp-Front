import React from "react";
import { UserConnect } from "./UserConnect";

export const UserList = () => {
  return (
    <div className="inbox_chat">
      {/* <!-- conversación activa inicio --> */}
      <UserConnect />
      {/* <!-- conversación activa Fin --> */}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
