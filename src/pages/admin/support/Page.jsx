// src/components/AdminSupport.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiTrash2, FiCheckCircle, FiMessageCircle, FiPlus } from "react-icons/fi";

// Global Styles
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
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
`;

const Title = styled.h1`
  font-size:28px;
  color:#333;
`;

const TableWrapper = styled.div`
  overflow-x:auto;
`;

const Table = styled.table`
  width:100%;
  border-collapse:collapse;
`;

const Thead = styled.thead`
  background-color: #007bff;
  color:#fff;
`;

const Th = styled.th`
  padding:12px 15px;
  text-align:left;
`;

const Td = styled.td`
  padding:12px 15px;
  border-bottom:1px solid #ddd;
`;

const ActionWrapper = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;
  color:#555;
  svg:hover { color:#007bff; }
`;

const FilterWrapper = styled.div`
  margin-bottom:20px;
  display:flex;
  gap:10px;
`;

const FilterInput = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  flex:1;
`;

const ModalOverlay = styled.div`
  position:fixed;
  top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ModalContent = styled.div`
  background:#fff;
  padding:30px;
  border-radius:12px;
  width:400px;
`;

const Input = styled.input`
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const Textarea = styled.textarea`
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border-radius:8px;
  border:1px solid #ccc;
  resize:vertical;
`;

const Button = styled.button`
  padding:12px 20px;
  border-radius:8px;
  border:none;
  background-color:#007bff;
  color:#fff;
  cursor:pointer;
  font-weight:bold;
  display:flex;
  align-items:center;
  gap:8px;
  &:hover{ background-color:#0069d9; }
`;

const AddButton = styled(Button)`
  background-color:#28a745;
  &:hover{ background-color:#218838; }
`;

const Cards = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:20px;
`;

const Card = styled.div`
  flex:1 1 200px;
  background-color:#e6f7ff;
  padding:20px;
  border-radius:12px;
  text-align:center;
  box-shadow:0 3px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  margin:0;
  font-size:16px;
  color:#555;
`;

const CardValue = styled.h2`
  margin:10px 0 0 0;
  font-size:28px;
  color:#007bff;
`;

// Sample Tickets Data
const initialTickets = [
  { id:1, user:"John Doe", subject:"Booking not confirmed", status:"pending", priority:"high", date:"2026-02-20", message:"I haven't received confirmation yet." },
  { id:2, user:"Jane Smith", subject:"Payment issue", status:"resolved", priority:"medium", date:"2026-02-21", message:"Payment failed during checkout." },
  { id:3, user:"Ali Khan", subject:"Cancellation request", status:"pending", priority:"high", date:"2026-02-21", message:"Need to cancel my booking." },
  { id:4, user:"Sara Ahmed", subject:"Room amenities", status:"resolved", priority:"low", date:"2026-02-22", message:"Room didn't have towels." },
  { id:5, user:"Ahmed Ali", subject:"Invoice request", status:"pending", priority:"medium", date:"2026-02-22", message:"Please send invoice PDF." },
];

const AdminSupport = () => {
  const [tickets,setTickets] = useState(initialTickets);
  const [search,setSearch] = useState("");
  const [modalOpen,setModalOpen] = useState(false);
  const [replyTicket,setReplyTicket] = useState(null);
  const [reply,setReply] = useState("");

  const filteredTickets = tickets.filter(t =>
    t.user.toLowerCase().includes(search.toLowerCase()) ||
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  const openReplyModal = ticket => {
    setReplyTicket(ticket);
    setReply("");
    setModalOpen(true);
  };

  const sendReply = () => {
    console.log("Reply sent to ticket:", replyTicket, "Message:", reply);
    alert(`Reply sent to ${replyTicket.user}`);
    setModalOpen(false);
  };

  const closeTicket = id => setTickets(prev=>prev.map(t=>t.id===id?{...t,status:"resolved"}:t));
  const deleteTicket = id => setTickets(prev=>prev.filter(t=>t.id!==id));

  const total = tickets.length;
  const pending = tickets.filter(t=>t.status==="pending").length;
  const resolved = tickets.filter(t=>t.status==="resolved").length;

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Support Tickets</Title>
          <AddButton><FiPlus /> Add Ticket</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput placeholder="Search by user or subject..." value={search} onChange={e=>setSearch(e.target.value)}/>
        </FilterWrapper>

        <Cards>
          <Card><CardTitle>Total Tickets</CardTitle><CardValue>{total}</CardValue></Card>
          <Card><CardTitle>Pending</CardTitle><CardValue>{pending}</CardValue></Card>
          <Card><CardTitle>Resolved</CardTitle><CardValue>{resolved}</CardValue></Card>
        </Cards>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>User</Th>
                <Th>Subject</Th>
                <Th>Status</Th>
                <Th>Priority</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredTickets.map(t=>(
                <tr key={t.id}>
                  <Td>{t.user}</Td>
                  <Td>{t.subject}</Td>
                  <Td>{t.status}</Td>
                  <Td>{t.priority}</Td>
                  <Td>{t.date}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiMessageCircle onClick={()=>openReplyModal(t)} title="Reply"/>
                      <FiCheckCircle onClick={()=>closeTicket(t.id)} title="Resolve"/>
                      <FiTrash2 onClick={()=>deleteTicket(t.id)} title="Delete"/>
                    </ActionWrapper>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        {modalOpen && (
          <ModalOverlay>
            <ModalContent>
              <h3>Reply to {replyTicket.user}</h3>
              <Textarea value={reply} onChange={e=>setReply(e.target.value)} placeholder="Type your reply..."/>
              <Button onClick={sendReply}><FiMessageCircle/> Send Reply</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  )
};

export default AdminSupport;