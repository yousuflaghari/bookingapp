// src/components/AdminNotifications.jsx
import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiTrash2, FiCheckCircle, FiBell } from "react-icons/fi";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f6f8;
    margin: 0;
    padding: 0;
  }
`;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${props => (props.active ? "#007bff" : "#e0e0e0")};
  color: ${props => (props.active ? "#fff" : "#333")};
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${props => (props.active ? "#0069d9" : "#d5d5d5")};
  }
`;

const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NotificationItem = styled.div`
  background-color: ${props => (props.read ? "#f0f0f0" : "#e6f7ff")};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NotificationTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const NotificationMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;
  font-size: 20px;
  color: #555;
  cursor: pointer;
  svg:hover {
    color: #007bff;
  }
`;

const AddNotificationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 14px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  background-color: #28a745;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

// Sample Data
const initialNotifications = [
  { id: 1, title: "Booking Confirmed", message: "Booking #1234 has been confirmed.", read: false },
  { id: 2, title: "Payment Received", message: "You received $300 for booking #1220.", read: true },
  { id: 3, title: "New Review", message: "User John Doe left a review on Hotel ABC.", read: false },
  { id: 4, title: "Cancellation Alert", message: "Booking #1200 has been canceled.", read: true },
  { id: 5, title: "New Subscriber", message: "1,000 new users subscribed this month.", read: false },
  { id: 6, title: "Maintenance Scheduled", message: "Server maintenance on Feb 25, 2:00 AM.", read: true },
];

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");
  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");

  // Filtered notifications
  const filteredNotifications = notifications.filter(n => {
    if (filter === "all") return true;
    if (filter === "read") return n.read;
    if (filter === "unread") return !n.read;
  });

  // Mark as read/unread
  const toggleRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: !n.read } : n)
    );
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Add notification
  const addNotification = () => {
    if (!newTitle || !newMessage) return;
    const newNotif = {
      id: Date.now(),
      title: newTitle,
      message: newMessage,
      read: false,
    };
    setNotifications([newNotif, ...notifications]);
    setNewTitle("");
    setNewMessage("");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title><FiBell /> Admin Notifications</Title>
          <FilterWrapper>
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>All</FilterButton>
            <FilterButton active={filter === "read"} onClick={() => setFilter("read")}>Read</FilterButton>
            <FilterButton active={filter === "unread"} onClick={() => setFilter("unread")}>Unread</FilterButton>
          </FilterWrapper>
        </Header>

        <NotificationList>
          {filteredNotifications.map(n => (
            <NotificationItem key={n.id} read={n.read}>
              <NotificationContent>
                <NotificationTitle>{n.title}</NotificationTitle>
                <NotificationMessage>{n.message}</NotificationMessage>
              </NotificationContent>
              <Actions>
                <FiCheckCircle onClick={() => toggleRead(n.id)} title="Toggle Read/Unread"/>
                <FiTrash2 onClick={() => deleteNotification(n.id)} title="Delete"/>
              </Actions>
            </NotificationItem>
          ))}
        </NotificationList>

        <AddNotificationWrapper>
          <Input 
            placeholder="Notification Title" 
            value={newTitle} 
            onChange={e => setNewTitle(e.target.value)} 
          />
          <Textarea 
            placeholder="Notification Message" 
            rows={4} 
            value={newMessage} 
            onChange={e => setNewMessage(e.target.value)} 
          />
          <Button onClick={addNotification}>Add Notification</Button>
        </AddNotificationWrapper>
      </Container>
    </>
  );
};

export default AdminNotifications;