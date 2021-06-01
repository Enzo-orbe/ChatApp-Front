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
  const [pictures, setPictures] = useState();
  const [etiquets, setEtiquets] = useState([]);
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
        modal,
        pictures,
        etiquets,
        setPictures,
        setModal,
        handleCloseModal,
        setEtiquets,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
