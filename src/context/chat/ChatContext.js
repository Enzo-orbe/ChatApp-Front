import React, { useReducer, useState } from "react";
import { createContext } from "react";
import { chatReducer } from "./chatReducer";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  chatActivo: null,
  usuarios: [],
  mensajes: [],
};

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);
  const [pictures, setPictures] = useState([]);

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
        pictures,
        setPictures,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
