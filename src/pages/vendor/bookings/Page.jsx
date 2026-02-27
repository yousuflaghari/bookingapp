import React, { useState } from "react";
import styled from "styled-components";

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
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
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

const Status = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  color: #fff;
  background: ${({ status }) =>
    status === "Confirmed" ? "#4caf50" :
    status === "Pending" ? "#ff9800" :
    "#f44336"};
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #007bff;
  color: #fff;
  margin-right: 5px;

  &:hover {
    opacity: 0.9;
  }
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

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top:0;
  left:0;
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

// ================= Component =================

const VendorBooking = () => {

  const [bookings, setBookings] = useState([
    {
      id: 1,
      bookingId: "BK1001",
      customer: "John Doe",
      property: "Hilton Paris Opera",
      date: "2026-04-15",
      status: "Confirmed",
      amount: "$250"
    },
    {
      id: 2,
      bookingId: "BK1002",
      customer: "Jane Smith",
      property: "Burj Al Arab",
      date: "2026-05-10",
      status: "Pending",
      amount: "$400"
    },
    {
      id: 3,
      bookingId: "BK1003",
      customer: "Ali Khan",
      property: "Four Seasons Istanbul",
      date: "2026-06-01",
      status: "Confirmed",
      amount: "$320"
    }
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter(b => 
    (b.customer.toLowerCase().includes(search.toLowerCase()) || b.bookingId.toLowerCase().includes(search.toLowerCase()))
    && (statusFilter ? b.status === statusFilter : true)
  );

  const updateStatus = (id, status) => {
    setBookings(bookings.map(b => b.id === id ? {...b, status} : b));
  };

  return (
    <Container>
      <Title>Property Bookings</Title>

      {/* Filters */}
      <Card>
        <Row>
          <Input
            placeholder="Search by customer or booking ID"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </Select>
        </Row>
      </Card>

      {/* Booking Table */}
      <Card>
        <Table>
          <thead>
            <tr>
              <Th>Booking ID</Th>
              <Th>Customer</Th>
              <Th>Property</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Amount</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(b => (
              <tr key={b.id}>
                <Td>{b.bookingId}</Td>
                <Td>{b.customer}</Td>
                <Td>{b.property}</Td>
                <Td>{b.date}</Td>
                <Td><Status status={b.status}>{b.status}</Status></Td>
                <Td>{b.amount}</Td>
                <Td>
                  <Button onClick={() => setSelectedBooking(b)}>View</Button>
                  {b.status !== "Cancelled" && (
                    <Button onClick={() => updateStatus(b.id, "Cancelled")} style={{ background: "#dc3545" }}>Cancel</Button>
                  )}
                  {b.status !== "Confirmed" && (
                    <Button onClick={() => updateStatus(b.id, "Confirmed")} style={{ background: "#28a745" }}>Confirm</Button>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <ModalOverlay onClick={() => setSelectedBooking(null)}>
          <Modal onClick={e => e.stopPropagation()}>
            <h2>Booking Details</h2>
            <p><b>Booking ID:</b> {selectedBooking.bookingId}</p>
            <p><b>Customer:</b> {selectedBooking.customer}</p>
            <p><b>Property:</b> {selectedBooking.property}</p>
            <p><b>Date:</b> {selectedBooking.date}</p>
            <p><b>Status:</b> {selectedBooking.status}</p>
            <p><b>Amount:</b> {selectedBooking.amount}</p>
            <Button onClick={() => setSelectedBooking(null)}>Close</Button>
          </Modal>
        </ModalOverlay>
      )}

    </Container>
  );
};

export default VendorBooking;