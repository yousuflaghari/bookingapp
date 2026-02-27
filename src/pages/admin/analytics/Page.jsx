import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

// =============================
// Styled Components
// =============================
const Page = styled(motion.div)`
  padding: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

// =============================
// Mock Data Generators
// =============================
const generateStats = () => ({
  users: Math.floor(Math.random() * 5000) + 1000,
  bookings: Math.floor(Math.random() * 3000) + 500,
  revenue: Math.floor(Math.random() * 100000) + 20000,
  hotels: Math.floor(Math.random() * 400) + 50,
});

const generateMonthlyBookings = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months.map((m) => ({
    name: m,
    bookings: Math.floor(Math.random() * 400) + 50,
  }));
};

const generateRevenueTrend = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `M${i + 1}`,
    revenue: Math.floor(Math.random() * 10000) + 2000,
  }));
};

const generateUserRoles = () => ([
  { name: "Customers", value: 400 },
  { name: "Hotel Owners", value: 120 },
  { name: "Admins", value: 20 },
]);

// =============================
// Main Component
// =============================
const AdminAnalyticsPage = () => {
  const [stats, setStats] = useState({});
  const [monthlyBookings, setMonthlyBookings] = useState([]);
  const [revenueTrend, setRevenueTrend] = useState([]);
  const [rolesData, setRolesData] = useState([]);

  useEffect(() => {
    setStats(generateStats());
    setMonthlyBookings(generateMonthlyBookings());
    setRevenueTrend(generateRevenueTrend());
    setRolesData(generateUserRoles());
  }, []);

  const COLORS = ["#2563eb", "#16a34a", "#f59e0b"];

  return (
    <Page initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Stats */}
      <Grid>
        <Card>
          <StatValue>{stats.users}</StatValue>
          <StatLabel>Total Users</StatLabel>
        </Card>
        <Card>
          <StatValue>{stats.bookings}</StatValue>
          <StatLabel>Total Bookings</StatLabel>
        </Card>
        <Card>
          <StatValue>${stats.revenue}</StatValue>
          <StatLabel>Total Revenue</StatLabel>
        </Card>
        <Card>
          <StatValue>{stats.hotels}</StatValue>
          <StatLabel>Hotels Listed</StatLabel>
        </Card>
      </Grid>

      <br />

      {/* Charts */}
      <Grid>
        <Card>
          <Title>Monthly Bookings</Title>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyBookings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <Title>Revenue Trend</Title>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <Title>User Roles Distribution</Title>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={rolesData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {rolesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Grid>
    </Page>
  );
};

export default AdminAnalyticsPage;
