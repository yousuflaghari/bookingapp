import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiShield, FiClipboard, FiXCircle, FiActivity } from "react-icons/fi";

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
  padding:20px;
`;

const Header = styled.h2`
  color:#333;
  margin-bottom:20px;
`;

const CardGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  gap:20px;
  margin-bottom:30px;
`;

const Card = styled.div`
  background:white;
  padding:20px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:12px;
`;

const CardIcon = styled.div`
  font-size:28px;
  color:${props => props.color || "#343a40"};
`;

const CardTitle = styled.div`
  font-weight:bold;
  font-size:16px;
`;

const CardNumber = styled.div`
  font-size:22px;
  font-weight:bold;
  color:#0d6efd;
`;

const Section = styled.div`
  margin-bottom:30px;
`;

const SectionHeader = styled.h3`
  margin-bottom:15px;
  color:#333;
`;

const ActivityList = styled.ul`
  list-style:none;
  padding:0;
  margin:0;
`;

const ActivityItem = styled.li`
  padding:10px 15px;
  background:#fff;
  border-radius:8px;
  margin-bottom:10px;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Badge = styled.span`
  padding:4px 8px;
  border-radius:6px;
  font-size:12px;
  font-weight:bold;
  color:white;
  background:${props => props.status === "Success" ? "#28a745" : "#dc3545"};
`;

/* ================= SAMPLE DATA ================= */

const dashboardStats = {
  totalBookings: 15,
  upcomingBookings: 4,
  cancelledBookings: 2,
  twoFAEnabled: true,
};

const recentActivity = [
  { id:1, action:"Login from Chrome on Windows", status:"Success" },
  { id:2, action:"Booked Table 5 on 2026-02-25", status:"Success" },
  { id:3, action:"Attempted login from unknown device", status:"Failed" },
  { id:4, action:"Cancelled Table 2 booking", status:"Success" },
  { id:5, action:"Updated profile information", status:"Success" },
];

/* ================= COMPONENT ================= */

const UserDashboard = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>User Dashboard</Header>

        <CardGrid>
          <Card>
            <CardIcon color="#0d6efd"><FiClipboard /></CardIcon>
            <CardTitle>Total Bookings</CardTitle>
            <CardNumber>{dashboardStats.totalBookings}</CardNumber>
          </Card>
          <Card>
            <CardIcon color="#28a745"><FiClipboard /></CardIcon>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardNumber>{dashboardStats.upcomingBookings}</CardNumber>
          </Card>
          <Card>
            <CardIcon color="#dc3545"><FiXCircle /></CardIcon>
            <CardTitle>Cancelled Bookings</CardTitle>
            <CardNumber>{dashboardStats.cancelledBookings}</CardNumber>
          </Card>
          <Card>
            <CardIcon color="#ffc107"><FiShield /></CardIcon>
            <CardTitle>2FA Enabled</CardTitle>
            <CardNumber>{dashboardStats.twoFAEnabled ? "Yes" : "No"}</CardNumber>
          </Card>
        </CardGrid>

        <Section>
          <SectionHeader>Recent Activity</SectionHeader>
          <ActivityList>
            {recentActivity.map(act => (
              <ActivityItem key={act.id}>
                <span>{act.action}</span>
                <Badge status={act.status}>{act.status}</Badge>
              </ActivityItem>
            ))}
          </ActivityList>
        </Section>

      </Container>
    </>
  );
};

export default UserDashboard;