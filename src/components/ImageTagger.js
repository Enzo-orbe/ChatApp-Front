import React, { useContext, useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CanvasDraw from "react-canvas-draw";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";

export const ImageTagger = () => {
  const {
    modal,
    handleCloseModal,
    pictures,
    setEtiquets,
    etiquets,
    chatState,
  } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const { uid } = auth;
  const { chatActivo } = chatState;

  const [form, setForm] = useState(false);
  const [names, setNames] = useState([]);
  const [points, setPoints] = useState();

  const handleChange = (e) => {
    setPoints(e.lines);
    setForm(true);
  };

  const handleClick = async (e) => {
    await e.preventDefault();
    if (names?.name?.length > 0) {
      await points?.map((poin) => {
        return setEtiquets([
          ...etiquets,
          {
            names: names,
            points: poin,
          },
        ]);
      });

      setNames([]);
    } else {
      alert("Debe introducir un nombre");
    }
  };

  const onChange = (e) => {
    setNames({
      [e.target.name]: e.target.value,
    });
  };

  const onCancel = () => {
    setPoints();
    setNames();
    setForm(false);
  };

  const closeModal = () => {
    setEtiquets([]);
    handleCloseModal();
  };

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit("mensaje-image", {
      from: uid,
      to: chatActivo,
      img: pictures,
      etiquets: etiquets,
    });
    setEtiquets([]);
    handleCloseModal();
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      centered
      show={modal}
      //   className="d-flex justify-content-center align-content-center  "
    >
      <Modal.Header
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#aed6f1", color: "white" }}
      >
        <Modal.Title>Foto</Modal.Title>
      </Modal.Header>
      {form ? (
        <InputGroup style={{ width: "100%" }} className="mb-3">
          <FormControl
            placeholder="Nombre de la persona"
            aria-label="Nombre de la persona"
            aria-describedby="basic-addon1"
            style={{ width: "70%", height: "45px" }}
            name="name"
            onChange={onChange}
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon
                icon={faCheck}
                size="sm"
                onClick={(e) => handleClick(e)}
              />
            </InputGroup.Text>
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon
                icon={faWindowClose}
                size="sm"
                onClick={onCancel}
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      ) : null}
      <CanvasDraw
        style={{ width: "100%" }}
        imgSrc={pictures ? pictures : "Null"}
        brushColor="none"
        onChange={handleChange}
        hideInterface
        hideGrid
        brushRadius={0.5}
      />

      <Modal.Footer className="d-flex justify-content-center align-content-center">
        <Button
          style={{ width: "50%", backgroundColor: "#aed6f1", border: "none" }}
          type="submit"
          onClick={(e) => sendMessage(e)}
        >
          Enviar
        </Button>

        <Button
          style={{ width: "50%" }}
          variant="secondary"
          onClick={closeModal}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
