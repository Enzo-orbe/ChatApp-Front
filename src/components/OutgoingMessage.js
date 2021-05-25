import React from "react";
import { dateHour } from "../helpers/dateHour";

export const OutgoingMessage = ({ msg }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.message}</p>
        <span className="time_date">{dateHour(msg.createdAt)}</span>
      </div>
    </div>
  );
};
