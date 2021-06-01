import React from "react";
import { Modal, Image } from "react-bootstrap";

const GenericModal = (props) => {
  const { modal, onClose, data } = props;

  function tooltip(e, name) {
    return e?.map((j) => {
      let d = document.querySelector("#dtool");
      if (d) {
        d.textContent = name;
        let posx = j.points.points[0].x;
        let posy = j.points.points[0].y;
        d.style.left = posx + 13;
        d.style.top = posy - 13;
        d.style.display = "block";
        window.onmouseout = function () {
          d.textContent = null;
          d.style.display = "none";
        };
      }
    });
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      centered
      show={modal}
      onHide={() => onClose()}
      className="d-flex justify-content-center align-content-center "
    >
      <Modal.Header
        className="d-flex justify-content-center "
        style={{ backgroundColor: "#aed6f1", color: "white" }}
        closeButton
      >
        <Modal.Title>Foto</Modal.Title>
      </Modal.Header>
      <Image style={{ width: "500px" }} src={data?.img} useMap="#mapa" />
      <map name="mapa">
        {data?.etiquets?.map((eti, idx) => {
          return (
            <area
              shape="circle"
              coords={`${eti?.points?.points[0].x},${eti?.points?.points[0].y}, 64`}
              alt={eti.names.name}
              key={idx}
              onMouseOver={() => tooltip(data?.etiquets, eti.names.name)}
            />
          );
        })}
      </map>
      <div
        id="dtool"
        style={{
          backgroundColor: "#aed6f1",
          padding: "5px",
          fontSize: "14px",
          fontWeight: "bold",
          color: "black",
          display: "none",
        }}
      ></div>
    </Modal>
  );
};

export default GenericModal;
