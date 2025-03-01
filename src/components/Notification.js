import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Эта буква уже введена</p>
    </div>
  );
};

export default Notification;
