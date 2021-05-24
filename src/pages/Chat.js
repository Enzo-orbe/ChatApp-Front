import React from "react";
import { ChatMessages } from "../components/ChatMessages";
import { ChatSelect } from "../components/ChatSelect";
import { Users } from "../components/Users";
import "../css/chat.css";

export const Chat = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <Users />
        {/* <!-- Chat inicio --> */}
        <ChatMessages />
        {/* <!-- Chat Fin --> */}
        {/* <ChatSelect /> */}
      </div>
    </div>
  );
};
