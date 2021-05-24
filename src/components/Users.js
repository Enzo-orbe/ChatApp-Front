import React from "react";
import { UserList } from "./UserList";
import { UserProfile } from "./UserProfile";

export const Users = () => {
  return (
    <div className="inbox_people">
      {/* <!-- Searchbox inicio --> */}
      <UserProfile />
      {/* <!-- Searchbox Fin --> */}

      {/* <!-- Sidebar inicio --> */}
      <UserList />
      {/* <!-- Sidebar Fin --> */}
    </div>
  );
};
