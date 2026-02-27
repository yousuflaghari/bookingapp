import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const SummaryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
`;

const SummaryNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #0d6efd;
`;

const SummaryLabel = styled.div`
  font-size: 14px;
  color: #555;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  background: #0d6efd;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const PageBtn = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #0d6efd;
  background: ${(props) => (props.active ? "#0d6efd" : "white")};
  color: ${(props) => (props.active ? "white" : "#0d6efd")};
  cursor: pointer;
  &:hover {
    background: #0d6efd;
    color: white;
  }
`;

/* ===========================
   Component
=========================== */
const ReportsPage = () => {
  const allBookings = Array.from({length:50}, (_,i)=>({
    id: i+1,
    guest: ["Alice","Bob","Charlie","David","Eva"][i%5],
    room: ["Deluxe","Standard","Suite","Family"][i%4],
    date: `2026-02-${(i%28)+1}`,
    status: ["Completed","Cancelled","Pending"][i%3],
    amount: (Math.floor(Math.random()*500)+50)
  }));

  const [bookings, setBookings] = useState(allBookings);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(()=>{
    let filtered = allBookings;
    if(search) filtered = filtered.filter(b=>b.guest.toLowerCase().includes(search.toLowerCase()));
    if(statusFilter) filtered = filtered.filter(b=>b.status===statusFilter);
    setBookings(filtered);
    setCurrentPage(1);
  }, [search,statusFilter]);

  const indexOfLast = currentPage*itemsPerPage;
  const indexOfFirst = indexOfLast-itemsPerPage;
  const currentItems = bookings.slice(indexOfFirst,indexOfLast);
  const totalPages = Math.ceil(bookings.length/itemsPerPage);

  const totalRevenue = bookings.reduce((sum,b)=>sum+b.amount,0);
  const totalBookings = bookings.length;
  const totalCancelled = bookings.filter(b=>b.status==="Cancelled").length;
  const totalCompleted = bookings.filter(b=>b.status==="Completed").length;

  return (
    <Wrapper>
      <Title>Hotel Reports</Title>

      <FilterSection>
        <Input type="text" placeholder="Search guest..." value={search} onChange={e=>setSearch(e.target.value)} />
        <Select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Pending">Pending</option>
        </Select>
      </FilterSection>

      <SummaryGrid>
        <SummaryCard>
          <SummaryNumber>{totalBookings}</SummaryNumber>
          <SummaryLabel>Total Bookings</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryNumber>${totalRevenue}</SummaryNumber>
          <SummaryLabel>Total Revenue</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryNumber>{totalCompleted}</SummaryNumber>
          <SummaryLabel>Completed</SummaryLabel>
        </SummaryCard>
        <SummaryCard>
          <SummaryNumber>{totalCancelled}</SummaryNumber>
          <SummaryLabel>Cancelled</SummaryLabel>
        </SummaryCard>
      </SummaryGrid>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Guest</Th>
            <Th>Room</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Amount</Th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(b=>(
            <tr key={b.id}>
              <Td>{b.id}</Td>
              <Td>{b.guest}</Td>
              <Td>{b.room}</Td>
              <Td>{b.date}</Td>
              <Td>{b.status}</Td>
              <Td>${b.amount}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {Array.from({ length: totalPages },(_,i)=>(
          <PageBtn key={i+1} active={currentPage===i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default ReportsPage;