import React, { useState } from "react";
import styled from "styled-components";

const BookingPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const bookingsData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    guest: `Guest ${i + 1}`,
    hotel: `Hotel ${i + 1}`,
    date: "2026-02-20",
    amount: 120 + i * 5,
    status: i % 3 === 0 ? "Confirmed" : i % 3 === 1 ? "Pending" : "Cancelled",
  }));

  const filteredBookings = bookingsData.filter((b) => {
    const matchesSearch = b.guest.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Container>
      <Header>
        <Title>Bookings Management</Title>
        <Actions>
          <SearchInput
            placeholder="Search by guest..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </Select>
          <AddButton>+ New Booking</AddButton>
        </Actions>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatNumber>1,245</StatNumber>
          <StatLabel>Total Bookings</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>980</StatNumber>
          <StatLabel>Confirmed</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>120</StatNumber>
          <StatLabel>Pending</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>$45,000</StatNumber>
          <StatLabel>Revenue</StatLabel>
        </StatCard>
      </StatsGrid>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Guest</th>
              <th>Hotel</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id}>
                <td>#{b.id}</td>
                <td>{b.guest}</td>
                <td>{b.hotel}</td>
                <td>{b.date}</td>
                <td>${b.amount}</td>
                <td>
                  <Status status={b.status}>{b.status}</Status>
                </td>
                <td>
                  <ActionBtn>Edit</ActionBtn>
                  <DeleteBtn>Delete</DeleteBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default BookingPage;

// ================= STYLES =================

const Container = styled.div`
  padding: 30px;
  background: #f5f7fb;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const AddButton = styled.button`
  background: #4cafef;
  border: none;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
`;

const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const StatNumber = styled.h3`
  margin: 0;
  font-size: 22px;
`;

const StatLabel = styled.p`
  margin: 5px 0 0;
  color: #777;
`;

const TableWrapper = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #fafafa;
    font-weight: 600;
  }
`;

const Status = styled.span`
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: white;

  background: ${(p) =>
    p.status === "Confirmed"
      ? "#4caf50"
      : p.status === "Pending"
      ? "#ff9800"
      : "#f44336"};
`;

const ActionBtn = styled.button`
  margin-right: 8px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: #2196f3;
  color: white;
  cursor: pointer;
  font-size: 12px;
`;

const DeleteBtn = styled.button`
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: #f44336;
  color: white;
  cursor: pointer;
  font-size: 12px;
`;
