import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";

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

const initialGuests = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali@example.com",
    phone: "+923001234567",
    guests: 3,
    table: "Table 5",
    status: "Confirmed"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara@example.com",
    phone: "+923001112233",
    guests: 2,
    table: "Table 2",
    status: "Pending"
  },
];

/* ================= COMPONENT ================= */

const GuestInfo = () => {
  const [guests, setGuests] = useState(initialGuests);
  const [search, setSearch] = useState("");

  const filteredGuests = guests.filter(g =>
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.email.toLowerCase().includes(search.toLowerCase()) ||
    g.table.toLowerCase().includes(search.toLowerCase())
  );

  const changeStatus = (guest, status) => {
    setGuests(prev => prev.map(g => g.id === guest.id ? {...g, status} : g));
  };

  const deleteGuest = (guest) => {
    setGuests(prev => prev.filter(g => g.id !== guest.id));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Guest Info</Title>
        </Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search by name, email or table..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchBox>

        <TableStyled>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Guests</Th>
              <Th>Table</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.map(guest => (
              <tr key={guest.id}>
                <Td>{guest.name}</Td>
                <Td>{guest.email}</Td>
                <Td>{guest.phone}</Td>
                <Td>{guest.guests}</Td>
                <Td>{guest.table}</Td>
                <Td><Badge status={guest.status}>{guest.status}</Badge></Td>
                <Td>
                  <Actions>
                    <FiEdit onClick={() => alert("Edit feature coming soon")} />
                    <FiTrash2 onClick={() => deleteGuest(guest)} />
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

export default GuestInfo;