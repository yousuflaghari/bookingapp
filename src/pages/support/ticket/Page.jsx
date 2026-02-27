import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSearch, FiEdit, FiTrash2, FiPlus, FiMessageCircle } from "react-icons/fi";

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
  max-width:1100px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

const Title = styled.h2`
  color:#333;
`;

const AddButton = styled.button`
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 18px;
  border:none;
  border-radius:8px;
  background:#0d6efd;
  color:white;
  cursor:pointer;
  font-weight:bold;

  &:hover {
    background:#0b5ed7;
  }
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

const FilterGroup = styled.div`
  display:flex;
  gap:12px;
  margin-bottom:20px;
`;

const FilterButton = styled.button`
  padding:6px 12px;
  border:none;
  border-radius:6px;
  cursor:pointer;
  background:${props => props.active ? "#0d6efd" : "#e9ecef"};
  color:${props => props.active ? "white" : "#495057"};

  &:hover {
    background:${props => props.active ? "#0b5ed7" : "#dee2e6"};
  }
`;

const TicketTable = styled.table`
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

const Badge = styled.span`
  padding:4px 8px;
  border-radius:6px;
  font-size:12px;
  font-weight:bold;
  color:white;
  background:${props =>
    props.status === "Open" ? "#28a745" :
    props.status === "Pending" ? "#ffc107" :
    "#6c757d"};
`;

const Actions = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;

  svg:hover {
    color:#0d6efd;
  }
`;

const ModalOverlay = styled.div`
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Modal = styled.div`
  background:white;
  padding:25px;
  border-radius:12px;
  width:500px;
`;

const Input = styled.input`
  width:100%;
  padding:10px;
  margin-bottom:12px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const Textarea = styled.textarea`
  width:100%;
  padding:10px;
  margin-bottom:12px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const SaveButton = styled.button`
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#343a40;
  color:white;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#23272b;
  }
`;

/* ================= SAMPLE DATA ================= */

const initialTickets = [
  {
    id: 1,
    user: "Ali Khan",
    subject: "Booking Issue",
    status: "Open",
    messages: [
      { id: 1, sender: "user", text: "I cannot book my table." },
      { id: 2, sender: "admin", text: "Please try again after refresh." }
    ]
  },
  {
    id: 2,
    user: "Sara Ahmed",
    subject: "Cancel Reservation",
    status: "Pending",
    messages: [
      { id: 1, sender: "user", text: "I want to cancel my booking." }
    ]
  },
];

/* ================= COMPONENT ================= */

const SupportTickets = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(null);
  const [reply, setReply] = useState("");

  const filteredTickets = tickets.filter(t =>
    (filterStatus === "All" || t.status === filterStatus) &&
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  const openTicketModal = (ticket) => {
    setActiveTicket(ticket);
    setReply("");
    setModalOpen(true);
  };

  const sendReply = () => {
    if (!reply.trim()) return;
    const updatedTickets = tickets.map(t => 
      t.id === activeTicket.id ? 
      { ...t, messages: [...t.messages, { id: Date.now(), sender: "admin", text: reply }] } :
      t
    );
    setTickets(updatedTickets);
    setActiveTicket({...activeTicket, messages: [...activeTicket.messages, { id: Date.now(), sender: "admin", text: reply }]});
    setReply("");
  };

  const changeStatus = (ticket, status) => {
    setTickets(prev => prev.map(t => t.id === ticket.id ? {...t, status} : t));
  };

  return (
    <>
      <GlobalStyle />
      <Container>

        <Header>
          <Title>Support Tickets</Title>
          <AddButton>
            <FiPlus /> New Ticket
          </AddButton>
        </Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search tickets..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchBox>

        <FilterGroup>
          {["All","Open","Pending","Closed"].map(status => (
            <FilterButton
              key={status}
              active={filterStatus === status}
              onClick={() => setFilterStatus(status)}
            >
              {status}
            </FilterButton>
          ))}
        </FilterGroup>

        <TicketTable>
          <thead>
            <tr>
              <Th>User</Th>
              <Th>Subject</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map(ticket => (
              <tr key={ticket.id}>
                <Td>{ticket.user}</Td>
                <Td>{ticket.subject}</Td>
                <Td><Badge status={ticket.status}>{ticket.status}</Badge></Td>
                <Td>
                  <Actions>
                    <FiEdit onClick={() => openTicketModal(ticket)} />
                    <FiTrash2 onClick={() => setTickets(tickets.filter(t => t.id !== ticket.id))} />
                  </Actions>
                </Td>
              </tr>
            ))}
          </tbody>
        </TicketTable>

        {modalOpen && activeTicket && (
          <ModalOverlay>
            <Modal>
              <h3>{activeTicket.subject}</h3>
              <div style={{maxHeight:"300px", overflowY:"auto", marginBottom:"12px"}}>
                {activeTicket.messages.map(msg => (
                  <div key={msg.id} style={{marginBottom:"10px", textAlign: msg.sender==="admin" ? "right" : "left"}}>
                    <strong>{msg.sender==="admin" ? "Admin" : activeTicket.user}</strong>: {msg.text}
                  </div>
                ))}
              </div>

              <Textarea
                rows={3}
                placeholder="Type reply..."
                value={reply}
                onChange={e => setReply(e.target.value)}
              />

              <div style={{display:"flex", gap:"10px", marginBottom:"12px"}}>
                {["Open","Pending","Closed"].map(status => (
                  <FilterButton key={status} active={activeTicket.status===status} onClick={()=>changeStatus(activeTicket,status)}>
                    {status}
                  </FilterButton>
                ))}
              </div>

              <SaveButton onClick={sendReply}>Send Reply</SaveButton>
            </Modal>
          </ModalOverlay>
        )}

      </Container>
    </>
  );
};

export default SupportTickets;