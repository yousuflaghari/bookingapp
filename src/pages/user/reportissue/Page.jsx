import React, { useState } from "react";
import styled from "styled-components";

// ====================== Styled Components ======================

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
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Field = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-height: 120px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${props => props.secondary ? "#ccc" : "#007bff"};
  color: ${props => props.secondary ? "#000" : "#fff"};

  &:hover {
    opacity: 0.9;
  }
`;

const FileInput = styled.input`
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
  background: ${props =>
    props.status === "Open"
      ? "#007bff"
      : props.status === "In Progress"
      ? "#f0ad4e"
      : "#28a745"};
`;

// ====================== Component ======================

const ReportIssue = () => {

  const [form, setForm] = useState({
    category: "",
    bookingId: "",
    priority: "Medium",
    description: "",
    file: null
  });

  const [tickets, setTickets] = useState([
    {
      id: 1,
      category: "Payment",
      bookingId: "BK1023",
      priority: "High",
      status: "Open",
      date: "2025-02-01"
    },
    {
      id: 2,
      category: "Booking",
      bookingId: "BK1050",
      priority: "Medium",
      status: "In Progress",
      date: "2025-02-05"
    },
    {
      id: 3,
      category: "Account",
      bookingId: "BK1102",
      priority: "Low",
      status: "Resolved",
      date: "2025-02-10"
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      file: e.target.files[0]
    });
  };

  const handleSubmit = () => {

    const newTicket = {
      id: tickets.length + 1,
      category: form.category,
      bookingId: form.bookingId,
      priority: form.priority,
      status: "Open",
      date: new Date().toISOString().slice(0,10)
    };

    setTickets([newTicket, ...tickets]);

    alert("Issue submitted successfully!");

    setForm({
      category: "",
      bookingId: "",
      priority: "Medium",
      description: "",
      file: null
    });
  };

  const handleReset = () => {
    setForm({
      category: "",
      bookingId: "",
      priority: "Medium",
      description: "",
      file: null
    });
  };

  return (
    <Container>

      <Title>Report an Issue</Title>

      {/* ================= Form ================= */}

      <Card>

        <SectionTitle>Submit New Ticket</SectionTitle>

        <Row>

          <Field>
            <Label>Category</Label>
            <Select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Booking</option>
              <option>Payment</option>
              <option>Account</option>
              <option>Technical</option>
              <option>Other</option>
            </Select>
          </Field>

          <Field>
            <Label>Booking ID</Label>
            <Input
              name="bookingId"
              value={form.bookingId}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Priority</Label>
            <Select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Select>
          </Field>

        </Row>

        <Field style={{ marginTop: 15 }}>
          <Label>Description</Label>
          <TextArea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </Field>

        <Field style={{ marginTop: 15 }}>
          <Label>Upload Screenshot</Label>
          <FileInput type="file" onChange={handleFile} />
        </Field>

        <ButtonRow>
          <Button onClick={handleSubmit}>Submit Ticket</Button>
          <Button secondary onClick={handleReset}>Reset</Button>
        </ButtonRow>

      </Card>


      {/* ================= Tickets ================= */}

      <Card>

        <SectionTitle>Your Tickets</SectionTitle>

        <Table>

          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Category</Th>
              <Th>Booking</Th>
              <Th>Priority</Th>
              <Th>Status</Th>
              <Th>Date</Th>
            </tr>
          </thead>

          <tbody>

            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <Td>#{ticket.id}</Td>
                <Td>{ticket.category}</Td>
                <Td>{ticket.bookingId}</Td>
                <Td>{ticket.priority}</Td>
                <Td>
                  <Badge status={ticket.status}>
                    {ticket.status}
                  </Badge>
                </Td>
                <Td>{ticket.date}</Td>
              </tr>
            ))}

          </tbody>

        </Table>

      </Card>

    </Container>
  );
};

export default ReportIssue;