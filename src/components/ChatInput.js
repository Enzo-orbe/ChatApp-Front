import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { uid } = auth;
  const { chatActivo } = chatState;

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0) {
      return;
    }
    setMessage("");

    socket.emit("mensaje-personal", {
      from: uid,
      to: chatActivo,
      message: message,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            value={message}
            onChange={handleChange}
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
