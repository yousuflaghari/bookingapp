// src/components/AdminReports.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiDownload } from "react-icons/fi";

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f6f8;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const FilterButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${props => (props.active ? "#007bff" : "#e0e0e0")};
  color: ${props => (props.active ? "#fff" : "#333")};
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${props => (props.active ? "#0069d9" : "#d5d5d5")};
  }
`;

const ReportsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1 1 200px;
  background-color: #e6f7ff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #555;
`;

const CardValue = styled.h2`
  margin: 10px 0 0 0;
  font-size: 28px;
  color: #007bff;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`;

const DownloadButton = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #218838;
  }
`;

// Sample Data
const sampleReports = [
  { id: 1, user: "John Doe", booking: "#1234", status: "Completed", amount: "$200", date: "2026-02-20" },
  { id: 2, user: "Jane Smith", booking: "#1235", status: "Canceled", amount: "$150", date: "2026-02-21" },
  { id: 3, user: "Ali Khan", booking: "#1236", status: "Completed", amount: "$300", date: "2026-02-21" },
  { id: 4, user: "Sara Ahmed", booking: "#1237", status: "Pending", amount: "$100", date: "2026-02-22" },
  { id: 5, user: "Ahmed Ali", booking: "#1238", status: "Completed", amount: "$250", date: "2026-02-22" },
];

const AdminReports = () => {
  const [filter, setFilter] = useState("daily");
  
  // Filtered reports example
  const filteredReports = sampleReports.filter(r => {
    if(filter === "daily") return r.date === "2026-02-22";
    if(filter === "weekly") return true; // Example, apply weekly logic
    if(filter === "monthly") return true; // Example, apply monthly logic
  });

  const handleDownload = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "User,Booking,Status,Amount,Date\n";
    filteredReports.forEach(r => {
      csvContent += `${r.user},${r.booking},${r.status},${r.amount},${r.date}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "booking_reports.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Admin Reports</Title>
          <FilterWrapper>
            <FilterButton active={filter==="daily"} onClick={()=>setFilter("daily")}>Daily</FilterButton>
            <FilterButton active={filter==="weekly"} onClick={()=>setFilter("weekly")}>Weekly</FilterButton>
            <FilterButton active={filter==="monthly"} onClick={()=>setFilter("monthly")}>Monthly</FilterButton>
          </FilterWrapper>
        </Header>

        <ReportsWrapper>
          <Cards>
            <Card>
              <CardTitle>Total Bookings</CardTitle>
              <CardValue>{filteredReports.length}</CardValue>
            </Card>
            <Card>
              <CardTitle>Completed</CardTitle>
              <CardValue>{filteredReports.filter(r=>r.status==="Completed").length}</CardValue>
            </Card>
            <Card>
              <CardTitle>Canceled</CardTitle>
              <CardValue>{filteredReports.filter(r=>r.status==="Canceled").length}</CardValue>
            </Card>
            <Card>
              <CardTitle>Total Revenue</CardTitle>
              <CardValue>${filteredReports.reduce((a,b)=>a+parseInt(b.amount.replace("$","")),0)}</CardValue>
            </Card>
          </Cards>

          <TableWrapper>
            <Table>
              <Thead>
                <tr>
                  <Th>User</Th>
                  <Th>Booking</Th>
                  <Th>Status</Th>
                  <Th>Amount</Th>
                  <Th>Date</Th>
                </tr>
              </Thead>
              <tbody>
                {filteredReports.map(r=>(
                  <tr key={r.id}>
                    <Td>{r.user}</Td>
                    <Td>{r.booking}</Td>
                    <Td>{r.status}</Td>
                    <Td>{r.amount}</Td>
                    <Td>{r.date}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>

          <DownloadButton onClick={handleDownload}><FiDownload /> Download CSV</DownloadButton>
        </ReportsWrapper>
      </Container>
    </>
  );
};

export default AdminReports;