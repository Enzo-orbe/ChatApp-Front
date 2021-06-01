import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { dateHour } from "../helpers/dateHour";
import GenericModal from "./GenericModal";

export const OutgoingMessage = ({ msg }) => {
  const [modal, setModal] = useState(false);

  const onClose = () => setModal(false);
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        {msg?.message ? (
          <p>{msg.message}</p>
        ) : (
          <Image src={msg.img} alt="img" onClick={() => setModal(true)} />
        )}
        <span className="time_date">{dateHour(msg.createdAt)}</span>
      </div>
      <GenericModal modal={modal} onClose={onClose} data={msg} />
    </div>
  );
};
