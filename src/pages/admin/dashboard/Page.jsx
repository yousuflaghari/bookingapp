import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

// =====================================================
// Styled Components
// =====================================================

const Container = styled.div`
  padding: 24px;
  background: #f5f7fb;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #4f46e5;
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const StatValue = styled.h3`
  margin: 0;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f3f4f6;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  background: ${({ status }) =>
    status === "CONFIRMED" ? "#dcfce7" : status === "PENDING" ? "#fef9c3" : "#fee2e2"};
`;

// =====================================================
// Mock Data
// =====================================================

const generateBookings = (count = 10) => {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push({
      id: i,
      guest: `Guest ${i}`,
      hotel: `Hotel ${i}`,
      amount: Math.floor(Math.random() * 400) + 100,
      status: i % 3 === 0 ? "CANCELLED" : i % 2 === 0 ? "PENDING" : "CONFIRMED",
      date: new Date().toLocaleDateString(),
    });
  }
  return arr;
};

// =====================================================
// Dashboard Component
// =====================================================

const DashboardAdminPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(generateBookings());
  }, []);

  const stats = useMemo(() => {
    const totalRevenue = bookings.reduce((sum, b) => sum + b.amount, 0);
    const totalBookings = bookings.length;
    const confirmed = bookings.filter((b) => b.status === "CONFIRMED").length;
    const pending = bookings.filter((b) => b.status === "PENDING").length;

    return { totalRevenue, totalBookings, confirmed, pending };
  }, [bookings]);

  return (
    <Container>
      <Header>
        <Title>Admin Dashboard</Title>
        <Button>Refresh</Button>
      </Header>

      {/* Stats */}
      <Grid>
        <Card>
          <p>Total Revenue</p>
          <StatValue>${stats.totalRevenue}</StatValue>
        </Card>

        <Card>
          <p>Total Bookings</p>
          <StatValue>{stats.totalBookings}</StatValue>
        </Card>

        <Card>
          <p>Confirmed</p>
          <StatValue>{stats.confirmed}</StatValue>
        </Card>

        <Card>
          <p>Pending</p>
          <StatValue>{stats.pending}</StatValue>
        </Card>
      </Grid>

      {/* Recent Bookings */}
      <Section>
        <h3>Recent Bookings</h3>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Guest</Th>
              <Th>Hotel</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Date</Th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <Td>{b.id}</Td>
                <Td>{b.guest}</Td>
                <Td>{b.hotel}</Td>
                <Td>${b.amount}</Td>
                <Td>
                  <Badge status={b.status}>{b.status}</Badge>
                </Td>
                <Td>{b.date}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>
    </Container>
  );
};

export default DashboardAdminPage;
