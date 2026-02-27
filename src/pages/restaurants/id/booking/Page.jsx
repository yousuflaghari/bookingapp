import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #222;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #555;
`;

const Status = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: white;
  background: ${(props) =>
    props.type === "confirmed"
      ? "#28a745"
      : props.type === "pending"
      ? "#ffc107"
      : "#dc3545"};
`;

const BtnGroup = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.bg || "#0d6efd"};

  &:hover {
    opacity: 0.85;
  }
`;

/* ===========================
   Component
=========================== */

const BookingPage = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Ali Khan",
      date: "2026-02-25",
      time: "7:30 PM",
      guests: 4,
      status: "pending",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      date: "2026-02-26",
      time: "8:00 PM",
      guests: 2,
      status: "confirmed",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: newStatus } : b
      )
    );
  };

  return (
    <Container>
      <Title>Restaurant Bookings</Title>

      {bookings.map((b) => (
        <Card key={b.id}>
          <Row>
            <div>
              <Label>Name:</Label> {b.name}
            </div>
            <Status type={b.status}>{b.status}</Status>
          </Row>

          <Row>
            <div>
              <Label>Date:</Label> {b.date}
            </div>
            <div>
              <Label>Time:</Label> {b.time}
            </div>
          </Row>

          <Row>
            <div>
              <Label>Guests:</Label> {b.guests}
            </div>
          </Row>

          <BtnGroup>
            <Button
              bg="#28a745"
              onClick={() => updateStatus(b.id, "confirmed")}
            >
              Confirm
            </Button>
            <Button
              bg="#dc3545"
              onClick={() => updateStatus(b.id, "cancelled")}
            >
              Cancel
            </Button>
          </BtnGroup>
        </Card>
      ))}
    </Container>
  );
};

export default BookingPage;