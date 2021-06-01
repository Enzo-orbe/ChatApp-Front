import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ChatContext } from "../context/chat/ChatContext";
export const SelectFile = () => {
  const { setPictures, setModal } = useContext(ChatContext);

  const handleChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    reader.onload = () => {
      const base64 = reader.result;
      setPictures(base64);
      setModal(true);
    };
  };

  return (
    <Container fluid>
      <input
        type="file"
        accept="image/*"
        variant="primary"
        id="input"
        name="file"
        style={{ width: "100%", marginTop: "3px", backgroundColor: "#AED6F1" }}
        onChange={(e) => handleChange(e.target.files[0])}
        size="sm"
        className="d-none text-center"
      />
      <label
        htmlFor="input"
        className="text-center"
        style={{
          width: "100%",
          marginTop: "3px",
          backgroundColor: "#AED6F1",
          color: "white",
        }}
      >
        Enviar Foto
      </label>
    </Container>
  );
};
