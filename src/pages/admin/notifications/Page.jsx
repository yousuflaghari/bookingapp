import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${(props) => (props.type === "success" ? "#28a745" : "#dc3545")};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-20px)")};
  transition: all 0.3s ease-in-out;
  z-index: 999;
`;

const Notification = ({ message, type = "success", duration = 3000, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <NotificationWrapper type={type} show={show}>{message}</NotificationWrapper>;
};

export default Notification;