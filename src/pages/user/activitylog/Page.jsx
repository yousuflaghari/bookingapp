import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSearch } from "react-icons/fi";

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
  max-width:900px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.h2`
  color:#333;
  margin-bottom:20px;
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

const Pagination = styled.div`
  display:flex;
  justify-content:center;
  margin-top:20px;
  gap:8px;
`;

const PageButton = styled.button`
  padding:6px 12px;
  border-radius:6px;
  border:none;
  cursor:pointer;
  background:${props => props.active ? "#0d6efd" : "#e9ecef"};
  color:${props => props.active ? "white" : "#495057"};

  &:hover {
    background:#0b5ed7;
    color:white;
  }
`;

/* ================= SAMPLE DATA ================= */

const activityLogs = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  date: `2026-02-${(i%28)+1}`.padStart(2,'0'),
  time: `${9 + (i%12)}:${i%60} AM`,
  action: i % 3 === 0 ? "Login" : i % 3 === 1 ? "Password Change" : "Profile Update",
  device: i % 2 === 0 ? "Chrome on Windows" : "Firefox on Mac",
  ip: `192.168.1.${i+10}`
}));

/* ================= COMPONENT ================= */

const ActivityLog = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 10;

  const filteredLogs = activityLogs.filter(log =>
    log.action.toLowerCase().includes(search.toLowerCase()) ||
    log.device.toLowerCase().includes(search.toLowerCase()) ||
    log.ip.includes(search)
  );

  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);
  const currentLogs = filteredLogs.slice((currentPage-1)*logsPerPage, currentPage*logsPerPage);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Activity Log</Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search by action, device, or IP..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchBox>

        <TableStyled>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Action</Th>
              <Th>Device</Th>
              <Th>IP Address</Th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map(log => (
              <tr key={log.id}>
                <Td>{log.date}</Td>
                <Td>{log.time}</Td>
                <Td>{log.action}</Td>
                <Td>{log.device}</Td>
                <Td>{log.ip}</Td>
              </tr>
            ))}
          </tbody>
        </TableStyled>

        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i+1}
              active={currentPage === i+1}
              onClick={() => setCurrentPage(i+1)}
            >
              {i+1}
            </PageButton>
          ))}
        </Pagination>
      </Container>
    </>
  );
};

export default ActivityLog;