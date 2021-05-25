import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { Types } from "../types/types";

export const UserConnect = ({ usuario }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    dispatch({
      type: Types.activarChat,
      payload: usuario.uid,
    });

    const resp = await fetchToken(`mensajes/${usuario.uid}`);
    dispatch({
      type: Types.mensajesCargados,
      payload: resp.messages,
    });

    scrollToBottom("messages");
  };

  return (
    <div
      onClick={onClick}
      className={`chat_list ${usuario.uid === chatActivo && "active_chat"}`}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.name}</h5>
          {usuario?.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
