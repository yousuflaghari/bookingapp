import React, { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

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

const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 12px 18px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
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

const DeleteButton = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #dc3545;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

// ================= Component =================

const VendorSupport = () => {

  const [tickets, setTickets] = useState([
    { id:1, subject:"Payment Issue", message:"My last payout not received.", status:"Pending", date:"2026-02-15" },
    { id:2, subject:"Property Listing", message:"Need help adding new property.", status:"Resolved", date:"2026-01-20" },
  ]);

  const [form, setForm] = useState({ subject:"", message:"" });

  const handleSubmit = () => {
    if(!form.subject || !form.message){
      alert("Please fill subject and message");
      return;
    }
    const newTicket = { id: Date.now(), ...form, status:"Pending", date: new Date().toISOString().slice(0,10) };
    setTickets([newTicket, ...tickets]);
    setForm({ subject:"", message:"" });
    alert("Ticket submitted!");
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this ticket?")){
      setTickets(tickets.filter(t=>t.id!==id));
    }
  };

  return (
    <Container>
      <Title>Support Tickets</Title>

      <Card>
        <h2>Submit New Ticket</h2>
        <Field>
          <Label>Subject</Label>
          <Input value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
        </Field>
        <Field>
          <Label>Message</Label>
          <TextArea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
        </Field>
        <Button onClick={handleSubmit}>Submit Ticket</Button>
      </Card>

      <Card>
        <h2>Previous Tickets</h2>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Subject</Th>
              <Th>Message</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket=>(
              <tr key={ticket.id}>
                <Td>{ticket.date}</Td>
                <Td>{ticket.subject}</Td>
                <Td>{ticket.message}</Td>
                <Td>{ticket.status}</Td>
                <Td>
                  <DeleteButton onClick={()=>handleDelete(ticket.id)}><FaTrash /></DeleteButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default VendorSupport;