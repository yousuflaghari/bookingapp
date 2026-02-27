// src/components/Notification.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { FaTimesCircle } from "react-icons/fa";

// ===== Animations =====
const slideIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// ===== Styled Components =====
const NotificationContainer = styled.div`
  background-color: ${(props) =>
    props.type === "error" ? "#ff4d4f" :
    props.type === "success" ? "#52c41a" :
    "#1890ff"};
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  min-width: 250px;
  max-width: 350px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${slideIn} 0.5s ease;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
`;

const Message = styled.div`
  font-size: 14px;
`;

const CloseIcon = styled(FaTimesCircle)`
  cursor: pointer;
  font-size: 18px;
  margin-left: 15px;
  &:hover {
    opacity: 0.8;
  }
`;

// ===== Notification Component =====
const Notification = ({ message, type = "info", onClose }) => {
  return (
    <NotificationContainer type={type}>
      <Message>{message}</Message>
      <CloseIcon onClick={onClose} />
    </NotificationContainer>
  );
};

export default Notification;