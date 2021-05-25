import React, { useContext } from "react";
import { ChatMessages } from "../components/ChatMessages";
import { ChatSelect } from "../components/ChatSelect";
import { Users } from "../components/Users";
import { ChatContext } from "../context/chat/ChatContext";
import "../css/chat.css";

export const Chat = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <Users />

        {chatState.chatActivo ? <ChatMessages /> : <ChatSelect />}
      </div>
    </div>
  );
};
