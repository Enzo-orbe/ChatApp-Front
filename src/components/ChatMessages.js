import React from "react";
import { ChatInput } from "./ChatInput";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";

export const ChatMessages = () => {
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        {/* <!-- Mensaje recibido Inicio --> */}
        <IncomingMessage />
        {/* <!-- Mensaje recibido Fin --> */}

        {/* <!-- Mensaje enviado inicio --> */}
        <OutgoingMessage />
        {/* <!-- Mensaje enviado inicio --> */}
      </div>
      {/* <!-- Historia Fin --> */}

      {/* <!-- Enviar mensaje Inicio --> */}
      <ChatInput />
      {/* <!-- Enviar mensaje Fin --> */}
    </div>
  );
};
