import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSearch, FiTrash2, FiEye } from "react-icons/fi";

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
  max-width:1000px;
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

const FilterGroup = styled.div`
  display:flex;
  gap:12px;
  margin-bottom:20px;
`;

const FilterButton = styled.button`
  padding:6px 12px;
  border:none;
  border-radius:6px;
  cursor:pointer;
  background:${props => props.active ? "#0d6efd" : "#e9ecef"};
  color:${props => props.active ? "white" : "#495057"};

  &:hover {
    background:${props => props.active ? "#0b5ed7" : "#dee2e6"};
  }
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
  background:${props =>
    props.status === "Confirmed" ? "#28a745" :
    props.status === "Pending" ? "#ffc107" :
    "#dc3545"};
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

const initialBookings = [
  {
    id: 1,
    table: "Table 5",
    date: "2026-02-25",
    time: "7:00 PM",
    status: "Confirmed",
    guests: 3,
    notes: "Window side preferred"
  },
  {
    id: 2,
    table: "Table 2",
    date: "2026-02-26",
    time: "8:00 PM",
    status: "Pending",
    guests: 2,
    notes: ""
  },
  {
    id: 3,
    table: "Table 3",
    date: "2026-02-27",
    time: "6:30 PM",
    status: "Cancelled",
    guests: 4,
    notes: "Birthday celebration"
  },
];

/* ================= COMPONENT ================= */

const UserBooking = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBooking, setActiveBooking] = useState(null);

  const filteredBookings = bookings.filter(b =>
    (filterStatus === "All" || b.status === filterStatus) &&
    (b.table.toLowerCase().includes(search.toLowerCase()))
  );

  const openModal = (booking) => {
    setActiveBooking(booking);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveBooking(null);
    setModalOpen(false);
  };

  const cancelBooking = (booking) => {
    setBookings(prev => prev.map(b => b.id === booking.id ? {...b, status: "Cancelled"} : b));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>My Bookings</Header>

        <FilterGroup>
          {["All","Confirmed","Pending","Cancelled"].map(status => (
            <FilterButton
              key={status}
              active={filterStatus === status}
              onClick={() => setFilterStatus(status)}
            >
              {status}
            </FilterButton>
          ))}
        </FilterGroup>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search by table..."
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
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(b => (
              <tr key={b.id}>
                <Td>{b.table}</Td>
                <Td>{b.date}</Td>
                <Td>{b.time}</Td>
                <Td><Badge status={b.status}>{b.status}</Badge></Td>
                <Td>
                  <Actions>
                    <FiEye onClick={() => openModal(b)} />
                    {b.status === "Pending" && <FiTrash2 onClick={() => cancelBooking(b)} />}
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
              <p><strong>Status:</strong> {activeBooking.status}</p>
            </Modal>
          </ModalOverlay>
        )}

      </Container>
    </>
  );
};

export default UserBooking;