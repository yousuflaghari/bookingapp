import React from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  min-width: 200px;
  background: #fff;
  padding: 25px;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

// ================= Component =================

const VendorRevenue = () => {

  const revenueData = [
    { month: "Jan", revenue: 4500 },
    { month: "Feb", revenue: 6000 },
    { month: "Mar", revenue: 7000 },
    { month: "Apr", revenue: 5000 },
    { month: "May", revenue: 8000 },
    { month: "Jun", revenue: 6500 },
  ];

  const propertiesRevenue = [
    { id: 1, name: "Hilton Paris Opera", revenue: "$4500" },
    { id: 2, name: "Sunny Beach Villa", revenue: "$3200" },
    { id: 3, name: "Downtown Apartment", revenue: "$2800" },
  ];

  const totalRevenue = revenueData.reduce((acc,d)=>acc + d.revenue,0);

  return (
    <Container>
      <Title>Revenue Analytics</Title>

      <Cards>
        <Card>
          <CardTitle>Total Revenue</CardTitle>
          <CardValue>${totalRevenue}</CardValue>
        </Card>
        <Card>
          <CardTitle>Highest Month</CardTitle>
          <CardValue>${Math.max(...revenueData.map(d=>d.revenue))}</CardValue>
        </Card>
        <Card>
          <CardTitle>Lowest Month</CardTitle>
          <CardValue>${Math.min(...revenueData.map(d=>d.revenue))}</CardValue>
        </Card>
      </Cards>

      <Card>
        <h2>Revenue Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#007bff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <h2>Revenue by Property</h2>
        <Table>
          <thead>
            <tr>
              <Th>Property</Th>
              <Th>Revenue</Th>
            </tr>
          </thead>
          <tbody>
            {propertiesRevenue.map(p=>(
              <tr key={p.id}>
                <Td>{p.name}</Td>
                <Td>{p.revenue}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

    </Container>
  );
};

export default VendorRevenue;