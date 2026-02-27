import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiClock } from "react-icons/fi";

/* ================= GLOBAL ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  max-width:600px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.h2`
  color:#333;
  margin-bottom:20px;
`;

const DateInfo = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:bold;
  margin-bottom:20px;
`;

const TimeSlots = styled.div`
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:20px;
`;

const Slot = styled.button`
  padding:8px 14px;
  border-radius:8px;
  border:1px solid ${props => props.selected ? "#0d6efd" : "#ccc"};
  background:${props => props.selected ? "#0d6efd" : "white"};
  color:${props => props.selected ? "white" : "#495057"};
  cursor:pointer;

  &:hover {
    border-color:#0d6efd;
  }

  &[disabled] {
    background:#e9ecef;
    border-color:#ced4da;
    color:#6c757d;
    cursor:not-allowed;
  }
`;

const ConfirmButton = styled.button`
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#343a40;
  color:white;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#23272b;
  }
`;

/* ================= SAMPLE DATA ================= */

const timeSlotsData = [
  { time: "6:00 PM", status: "Available" },
  { time: "6:30 PM", status: "Booked" },
  { time: "7:00 PM", status: "Available" },
  { time: "7:30 PM", status: "Available" },
  { time: "8:00 PM", status: "Booked" },
];

/* ================= COMPONENT ================= */

const SelectTime = ({ selectedDate = "2026-02-25" }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirm = () => {
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }
    alert(`Time slot confirmed!\nDate: ${selectedDate}\nTime: ${selectedTime}`);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Select Time Slot</Header>

        <DateInfo>
          <FiClock />
          {selectedDate}
        </DateInfo>

        <TimeSlots>
          {timeSlotsData.map(slot => (
            <Slot
              key={slot.time}
              disabled={slot.status !== "Available"}
              selected={selectedTime === slot.time}
              onClick={() => slot.status === "Available" && setSelectedTime(slot.time)}
            >
              {slot.time} {slot.status !== "Available" ? "(Booked)" : ""}
            </Slot>
          ))}
        </TimeSlots>

        <ConfirmButton onClick={handleConfirm}>Confirm Time</ConfirmButton>
      </Container>
    </>
  );
};

export default SelectTime;