import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { dateHour } from "../helpers/dateHour";
import GenericModal from "./GenericModal";

export const IncomingMessage = ({ msg }) => {
  const [modal, setModal] = useState(false);

  const onClose = () => setModal(false);
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          {msg?.message ? (
            <p>{msg.message}</p>
          ) : (
            <Image src={msg.img} alt="img" onClick={() => setModal(true)} />
          )}
          <span className="time_date">{dateHour(msg.createdAt)}</span>
        </div>
      </div>
      <GenericModal modal={modal} onClose={onClose} data={msg} />
    </div>
  );
};
