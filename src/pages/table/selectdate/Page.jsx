import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiCalendar, FiCheckCircle, FiXCircle } from "react-icons/fi";

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
  max-width:800px;
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

const DatePickerContainer = styled.div`
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:25px;
`;

const DateInput = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  flex:1;
`;

const TableList = styled.div`
  display:flex;
  flex-direction:column;
  gap:12px;
`;

const TableItem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px;
  border-radius:10px;
  background:#f8f9fa;
  cursor:pointer;
  border:1px solid ${props => props.selected ? "#0d6efd" : "#eee"};

  &:hover {
    border-color:#0d6efd;
  }
`;

const TableName = styled.span`
  font-weight:bold;
`;

const Badge = styled.span`
  padding:4px 8px;
  border-radius:6px;
  font-size:12px;
  font-weight:bold;
  color:white;
  background:${props => props.status === "Available" ? "#28a745" : "#dc3545"};
`;

const TimeSlots = styled.div`
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:10px;
`;

const Slot = styled.button`
  padding:6px 12px;
  border-radius:6px;
  border:1px solid ${props => props.selected ? "#0d6efd" : "#ccc"};
  background:${props => props.selected ? "#0d6efd" : "white"};
  color:${props => props.selected ? "white" : "#495057"};
  cursor:pointer;

  &:hover {
    border-color:#0d6efd;
  }
`;

const ConfirmButton = styled.button`
  margin-top:20px;
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

const availableTables = [
  { id: 1, name: "Table 1", status: "Available" },
  { id: 2, name: "Table 2", status: "Booked" },
  { id: 3, name: "Table 3", status: "Available" },
  { id: 4, name: "Table 4", status: "Available" },
];

const timeSlots = [
  "6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM"
];

/* ================= COMPONENT ================= */

const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTable || !selectedTime) {
      alert("Please select date, table, and time slot.");
      return;
    }
    alert(`Booking confirmed!\nDate: ${selectedDate}\nTable: ${selectedTable.name}\nTime: ${selectedTime}`);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Select Table Date</Header>

        <DatePickerContainer>
          <FiCalendar />
          <DateInput
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </DatePickerContainer>

        <TableList>
          {availableTables.map(table => (
            <TableItem
              key={table.id}
              selected={selectedTable?.id === table.id}
              onClick={() => table.status === "Available" && setSelectedTable(table)}
            >
              <TableName>{table.name}</TableName>
              <Badge status={table.status}>{table.status}</Badge>
            </TableItem>
          ))}
        </TableList>

        {selectedTable && (
          <>
            <h4 style={{marginTop:"20px"}}>Select Time Slot</h4>
            <TimeSlots>
              {timeSlots.map(slot => (
                <Slot
                  key={slot}
                  selected={selectedTime === slot}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </Slot>
              ))}
            </TimeSlots>
          </>
        )}

        <ConfirmButton onClick={handleConfirm}>Confirm Booking</ConfirmButton>
      </Container>
    </>
  );
};

export default SelectDate;