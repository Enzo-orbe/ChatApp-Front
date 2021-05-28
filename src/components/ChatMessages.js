import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { ChatInput } from "./ChatInput";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { SelectFile } from "./SelectFile";

export const ChatMessages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { mensajes } = chatState;
  const { uid } = auth;

  return (
    <Container fluid className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div id="messages" className="msg_history">
        {mensajes.map((msg) =>
          msg.to === uid ? (
            <IncomingMessage key={msg._id} msg={msg} />
          ) : (
            <OutgoingMessage key={msg._id} msg={msg} />
          )
        )}
      </div>
      <ChatInput />
      <SelectFile />
    </Container>
  );
};
