// user/notification.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  z-index: 999;
`;

const NotificationItem = styled.div`
  background-color: ${(props) => (props.type === "error" ? "#ff4d4f" : "#4caf50")};
  color: white;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;

const Notification = ({ notifications }) => {
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  useEffect(() => {
    setVisibleNotifications(notifications);

    const timers = notifications.map((notif) =>
      setTimeout(() => {
        setVisibleNotifications((prev) =>
          prev.filter((n) => n.id !== notif.id)
        );
      }, 5000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [notifications]);

  return (
    <NotificationWrapper>
      {visibleNotifications.map((notif) => (
        <NotificationItem key={notif.id} type={notif.type}>
          {notif.message}
        </NotificationItem>
      ))}
    </NotificationWrapper>
  );
};

export default Notification;