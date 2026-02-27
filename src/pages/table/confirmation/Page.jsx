import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSearch, FiEdit, FiTrash2, FiCheckCircle, FiXCircle } from "react-icons/fi";

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
  max-width:1100px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

const Title = styled.h2`
  color:#333;
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

/* ================= SAMPLE DATA ================= */

const initialBookings = [
  {
    id: 1,
    user: "Ali Khan",
    table: "Table 5",
    date: "2026-02-25",
    time: "7:00 PM",
    status: "Confirmed",
  },
  {
    id: 2,
    user: "Sara Ahmed",
    table: "Table 2",
    date: "2026-02-26",
    time: "8:00 PM",
    status: "Pending",
  },
];

/* ================= COMPONENT ================= */

const TableConfirmation = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [search, setSearch] = useState("");

  const filteredBookings = bookings.filter(b =>
    b.user.toLowerCase().includes(search.toLowerCase()) ||
    b.table.toLowerCase().includes(search.toLowerCase())
  );

  const changeStatus = (booking, status) => {
    setBookings(prev => prev.map(b => b.id === booking.id ? {...b, status} : b));
  };

  const deleteBooking = (booking) => {
    setBookings(prev => prev.filter(b => b.id !== booking.id));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Table Confirmations</Title>
        </Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search by user or table..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchBox>

        <TableStyled>
          <thead>
            <tr>
              <Th>User</Th>
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
                <Td>{b.user}</Td>
                <Td>{b.table}</Td>
                <Td>{b.date}</Td>
                <Td>{b.time}</Td>
                <Td><Badge status={b.status}>{b.status}</Badge></Td>
                <Td>
                  <Actions>
                    <FiCheckCircle onClick={() => changeStatus(b,"Confirmed")} />
                    <FiXCircle onClick={() => changeStatus(b,"Pending")} />
                    <FiTrash2 onClick={() => deleteBooking(b)} />
                  </Actions>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableStyled>

      </Container>
    </>
  );
};

export default TableConfirmation;