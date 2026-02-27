import React, { useState } from "react";
import styled from "styled-components";

// ================= Styled Components =================

const Container = styled.div`
  padding: 30px;
  background: #f4f6f8;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
  color: #222;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 16px;
  background: #0077ff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #005ecc;
  }
`;

const Status = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  color: white;
  background: ${({ status }) =>
    status === "Open"
      ? "#ff9800"
      : status === "Resolved"
      ? "#4caf50"
      : "#f44336"};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  width: 500px;
  max-width: 90%;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

// ================= Component =================

const SupportTickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: "Payment Issue",
      category: "Billing",
      status: "Open",
      date: "2026-02-01",
      message: "I was charged twice for my booking.",
    },
    {
      id: 2,
      subject: "Login Problem",
      category: "Account",
      status: "Resolved",
      date: "2026-01-28",
      message: "Unable to login into my account.",
    },
    {
      id: 3,
      subject: "Booking Error",
      category: "Technical",
      status: "Closed",
      date: "2026-01-20",
      message: "App crashes while booking hotel.",
    },
  ]);

  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [newTicket, setNewTicket] = useState({
    subject: "",
    category: "General",
    message: "",
  });

  const filteredTickets = tickets.filter((t) => {
    return (
      t.subject.toLowerCase().includes(filter.toLowerCase()) &&
      (statusFilter ? t.status === statusFilter : true)
    );
  });

  const createTicket = () => {
    const ticket = {
      id: Date.now(),
      subject: newTicket.subject,
      category: newTicket.category,
      message: newTicket.message,
      status: "Open",
      date: new Date().toISOString().split("T")[0],
    };

    setTickets([ticket, ...tickets]);
    setShowModal(false);
    setNewTicket({ subject: "", category: "General", message: "" });
  };

  return (
    <Container>
      <Title>Support Tickets</Title>

      {/* Filters */}
      <Card>
        <Row>
          <div>
            <Input
              placeholder="Search tickets..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Open">Open</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </Select>
          </div>

          <Button onClick={() => setShowModal(true)}>+ Create Ticket</Button>
        </Row>
      </Card>

      {/* Tickets Table */}
      <Card>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Subject</Th>
              <Th>Category</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <Td>#{ticket.id}</Td>
                <Td>{ticket.subject}</Td>
                <Td>{ticket.category}</Td>
                <Td>
                  <Status status={ticket.status}>{ticket.status}</Status>
                </Td>
                <Td>{ticket.date}</Td>
                <Td>
                  <Button onClick={() => setSelectedTicket(ticket)}>
                    View
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Ticket Details */}
      {selectedTicket && (
        <ModalOverlay onClick={() => setSelectedTicket(null)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>Ticket Details</h2>

            <p><b>Subject:</b> {selectedTicket.subject}</p>
            <p><b>Category:</b> {selectedTicket.category}</p>
            <p><b>Status:</b> {selectedTicket.status}</p>
            <p><b>Date:</b> {selectedTicket.date}</p>
            <p><b>Message:</b></p>
            <p>{selectedTicket.message}</p>

            <Button onClick={() => setSelectedTicket(null)}>
              Close
            </Button>
          </Modal>
        </ModalOverlay>
      )}

      {/* Create Ticket Modal */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>Create Support Ticket</h2>

            <div style={{ marginBottom: 10 }}>
              <Input
                placeholder="Subject"
                value={newTicket.subject}
                onChange={(e) =>
                  setNewTicket({ ...newTicket, subject: e.target.value })
                }
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <Select
                value={newTicket.category}
                onChange={(e) =>
                  setNewTicket({ ...newTicket, category: e.target.value })
                }
              >
                <option>General</option>
                <option>Billing</option>
                <option>Technical</option>
                <option>Account</option>
              </Select>
            </div>

            <div style={{ marginBottom: 10 }}>
              <TextArea
                placeholder="Describe your issue..."
                value={newTicket.message}
                onChange={(e) =>
                  setNewTicket({ ...newTicket, message: e.target.value })
                }
              />
            </div>

            <Button onClick={createTicket}>Submit Ticket</Button>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default SupportTickets;