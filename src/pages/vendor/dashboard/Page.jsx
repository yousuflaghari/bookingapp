import React from "react";
import styled from "styled-components";
import { FaPlus, FaChartLine, FaClipboardList, FaHeart } from "react-icons/fa";

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
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardInfo = styled.div`
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

const CardIcon = styled.div`
  font-size: 32px;
  color: ${({ color }) => color || "#007bff"};
`;

const QuickLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const LinkCard = styled.div`
  background: #fff;
  flex: 1;
  min-width: 200px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #007bff;
    color: #fff;

    svg {
      color: #fff;
    }
  }
`;

const LinkIcon = styled.div`
  font-size: 28px;
  margin-right: 15px;
  color: ${({ color }) => color || "#007bff"};
`;

const LinkText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// ================= Component =================

const Dashboard = () => {

  const stats = [
    { title: "Total Bookings", value: 120, icon: <FaClipboardList />, color: "#007bff" },
    { title: "Total Revenue ($)", value: 45000, icon: <FaChartLine />, color: "#28a745" },
    { title: "Upcoming Bookings", value: 12, icon: <FaPlus />, color: "#ff9800" },
    { title: "Wishlist Items", value: 18, icon: <FaHeart />, color: "#f44336" },
  ];

  const quickLinks = [
    { title: "Add Property", icon: <FaPlus /> },
    { title: "View Bookings", icon: <FaClipboardList /> },
    { title: "Analytics", icon: <FaChartLine /> },
    { title: "Wishlist", icon: <FaHeart /> },
  ];

  return (
    <Container>
      <Title>Vendor Dashboard</Title>

      {/* Stats Cards */}
      <Cards>
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardInfo>
              <CardTitle>{stat.title}</CardTitle>
              <CardValue>{stat.value}</CardValue>
            </CardInfo>
            <CardIcon color={stat.color}>{stat.icon}</CardIcon>
          </Card>
        ))}
      </Cards>

      {/* Quick Links */}
      <h2>Quick Actions</h2>
      <QuickLinks>
        {quickLinks.map((link, index) => (
          <LinkCard key={index}>
            <LinkIcon>{link.icon}</LinkIcon>
            <LinkText>{link.title}</LinkText>
          </LinkCard>
        ))}
      </QuickLinks>
    </Container>
  );
};

export default Dashboard;