import { Types } from "../../types/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case Types.usuariosCargados:
      return {
        ...state,
        usuarios: [...action.payload],
      };
    case Types.activarChat:
      if (state.chatActivo === action.payload) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };
    case Types.nuevoMensaje:
      if (
        state.chatActivo === action.payload.from ||
        state.chatActivo === action.payload.to
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload],
        };
      } else {
        return state;
      }
    case Types.mensajesCargados:
      return {
        ...state,
        mensajes: [...action.payload],
      };
    case Types.clearChatState:
      return {
        uid: "",
        chatActivo: null,
        usuarios: [],
        mensajes: [],
      };
    default:
      return state;
  }
};
