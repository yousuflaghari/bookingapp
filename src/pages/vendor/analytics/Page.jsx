import React, { useState } from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// ================= Styled Components =================

const Container = styled.div`
  padding: 30px;
  min-height: 100vh;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background: #fff;
  flex: 1;
  min-width: 200px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
`;

const CardValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #222;
`;

const ChartCard = styled(Card)`
  width: 100%;
  height: 300px;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// ================= Component =================

const Analytics = () => {

  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-02-20");

  // Sample analytics data
  const bookingsData = [
    { date: "2026-01-01", bookings: 10, revenue: 1000 },
    { date: "2026-01-05", bookings: 15, revenue: 1500 },
    { date: "2026-01-10", bookings: 8, revenue: 800 },
    { date: "2026-01-15", bookings: 20, revenue: 2500 },
    { date: "2026-01-20", bookings: 12, revenue: 1200 },
    { date: "2026-01-25", bookings: 18, revenue: 2000 },
    { date: "2026-02-01", bookings: 22, revenue: 2700 },
    { date: "2026-02-10", bookings: 16, revenue: 1800 },
    { date: "2026-02-15", bookings: 24, revenue: 3000 },
    { date: "2026-02-20", bookings: 28, revenue: 3500 },
  ];

  const totalBookings = bookingsData.reduce((sum, item) => sum + item.bookings, 0);
  const totalRevenue = bookingsData.reduce((sum, item) => sum + item.revenue, 0);
  const upcomingBookings = 8; // Sample static number

  const handleFilter = () => {
    alert(`Filtered from ${startDate} to ${endDate}`);
    // Here you can integrate API to fetch filtered analytics
  };

  return (
    <Container>
      <Title>Analytics Dashboard</Title>

      {/* Filters */}
      <FilterRow>
        <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <Button onClick={handleFilter}>Apply Filter</Button>
      </FilterRow>

      {/* Summary Cards */}
      <Cards>
        <Card>
          <CardTitle>Total Bookings</CardTitle>
          <CardValue>{totalBookings}</CardValue>
        </Card>
        <Card>
          <CardTitle>Total Revenue ($)</CardTitle>
          <CardValue>{totalRevenue}</CardValue>
        </Card>
        <Card>
          <CardTitle>Upcoming Bookings</CardTitle>
          <CardValue>{upcomingBookings}</CardValue>
        </Card>
      </Cards>

      {/* Charts */}
      <ChartCard>
        <h3>Bookings Over Time</h3>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={bookingsData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bookings" stroke="#007bff" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard>
        <h3>Revenue Over Time</h3>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={bookingsData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#28a745" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

    </Container>
  );
};

export default Analytics;