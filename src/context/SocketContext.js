import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { useSocket } from "../hooks/useSocket";
import { Types } from "../types/types";
import { ChatContext } from "./chat/ChatContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  useEffect(() => {
    socket?.on("lista-usuarios", (users) => {
      dispatch({
        type: Types.usuariosCargados,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("mensaje-personal", (mensaje) => {
      dispatch({
        type: Types.nuevoMensaje,
        payload: mensaje,
      });

      scrollToBottom("messages");
    });
  }, [socket, dispatch]);
  useEffect(() => {
    socket?.on("mensaje-image", (mensaje) => {
      dispatch({
        type: Types.nuevoMensajeImagen,
        payload: mensaje,
      });

      scrollToBottom("messages");
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
