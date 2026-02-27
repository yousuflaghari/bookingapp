import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSearch, FiEye } from "react-icons/fi";

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
  max-width:900px;
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

const SearchBox = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  border:1px solid #ccc;
  border-radius:8px;
  padding:8px 12px;
  margin-bottom:20px;
`;

const SearchInput = styled.input`
  border:none;
  outline:none;
  flex:1;
`;

const TableStyled = styled.table`
  width:100%;
  border-collapse:collapse;
`;

const Th = styled.th`
  text-align:left;
  padding:12px;
  background:#343a40;
  color:white;
`;

const Td = styled.td`
  padding:12px;
  border-bottom:1px solid #eee;
`;

const Badge = styled.span`
  padding:4px 8px;
  border-radius:6px;
  font-size:12px;
  font-weight:bold;
  color:white;
  background:#dc3545;
`;

const Actions = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;

  svg:hover {
    color:#0d6efd;
  }
`;

const ModalOverlay = styled.div`
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Modal = styled.div`
  background:white;
  padding:25px;
  border-radius:12px;
  width:500px;
`;

const CloseButton = styled.button`
  padding:6px 12px;
  border:none;
  border-radius:6px;
  background:#dc3545;
  color:white;
  font-weight:bold;
  cursor:pointer;
  float:right;

  &:hover {
    opacity:0.9;
  }
`;

/* ================= SAMPLE DATA ================= */

const cancelledBookingsData = [
  {
    id: 1,
    table: "Table 5",
    date: "2026-02-20",
    time: "7:00 PM",
    guests: 3,
    notes: "Window seat preferred",
  },
  {
    id: 2,
    table: "Table 2",
    date: "2026-02-18",
    time: "8:30 PM",
    guests: 2,
    notes: "Birthday celebration",
  },
];

/* ================= COMPONENT ================= */

const CancelledBooking = () => {
  const [bookings, setBookings] = useState(cancelledBookingsData);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBooking, setActiveBooking] = useState(null);

  const filteredBookings = bookings.filter(b =>
    b.table.toLowerCase().includes(search.toLowerCase()) ||
    b.notes.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (booking) => {
    setActiveBooking(booking);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveBooking(null);
    setModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Cancelled Bookings</Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search by table or notes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchBox>

        <TableStyled>
          <thead>
            <tr>
              <Th>Table</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Guests</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(b => (
              <tr key={b.id}>
                <Td>{b.table}</Td>
                <Td>{b.date}</Td>
                <Td>{b.time}</Td>
                <Td>{b.guests}</Td>
                <Td>
                  <Actions>
                    <FiEye onClick={() => openModal(b)} />
                  </Actions>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableStyled>

        {modalOpen && activeBooking && (
          <ModalOverlay>
            <Modal>
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <h3>Booking Details</h3>
              <p><strong>Table:</strong> {activeBooking.table}</p>
              <p><strong>Date:</strong> {activeBooking.date}</p>
              <p><strong>Time:</strong> {activeBooking.time}</p>
              <p><strong>Guests:</strong> {activeBooking.guests}</p>
              <p><strong>Notes:</strong> {activeBooking.notes || "None"}</p>
              <p><strong>Status:</strong> Cancelled</p>
            </Modal>
          </ModalOverlay>
        )}

      </Container>
    </>
  );
};

export default CancelledBooking;