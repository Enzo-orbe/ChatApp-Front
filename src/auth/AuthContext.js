import React, { createContext, useCallback, useState } from "react";
import { fetchSimple, fetchToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchSimple("login", { email, password }, "POST");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { userDb } = resp;
      setAuth({
        uid: userDb.uid,
        checking: false,
        logged: true,
        name: userDb.name,
        email: userDb.email,
      });
    }

    return resp.ok;
  };

  const register = async (name, email, password) => {
    const resp = await fetchSimple(
      "login/new",
      { name, email, password },
      "POST"
    );
    if (resp.ok) {
      localStorage.setItem("token", resp.token);

      const { users } = resp;
      setAuth({
        uid: users.uid,
        checking: false,
        logged: true,
        name: users.name,
        email: users.email,
      });

      return true;
    }
    return resp.msg;
  };

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({
        checking: false,
        logged: false,
      });

      return false;
    }

    const resp = await fetchToken("login/renew");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);

      const { user } = resp;
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });

      return true;
    } else {
      setAuth({
        checking: false,
        logged: false,
      });

      return false;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      checking: false,
      logged: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        register,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
