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
  padding: 8px 14px;
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

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
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

const TravelModalButton = styled(Button)`
  background: #28a745;
`;

// ================= Component =================

const UpcomingBooking = () => {

  const [bookings, setBookings] = useState([
    {
      id: 1,
      destination: "Paris, France",
      date: "2026-04-15",
      status: "Confirmed",
      amount: "$1200",
      bookingId: "BK1001"
    },
    {
      id: 2,
      destination: "Dubai, UAE",
      date: "2026-05-10",
      status: "Pending",
      amount: "$900",
      bookingId: "BK1002"
    },
    {
      id: 3,
      destination: "Istanbul, Turkey",
      date: "2026-06-01",
      status: "Confirmed",
      amount: "$1100",
      bookingId: "BK1003"
    }
  ]);

  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter(booking => {
    return (
      booking.destination.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? booking.status === filterStatus : true)
    );
  });

  const cancelBooking = (id) => {
    if(window.confirm("Are you sure you want to cancel this booking?")){
      setBookings(bookings.map(b => 
        b.id === id ? {...b, status: "Cancelled"} : b
      ));
    }
  };

  const downloadItinerary = (booking) => {
    alert(`Downloading itinerary for ${booking.destination}...`);
  };

  return (
    <Container>
      <Title>Upcoming Bookings</Title>

      {/* Filters */}
      <Card>
        <Row>
          <Input
            placeholder="Search by destination"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </Select>
        </Row>
      </Card>

      {/* Bookings Table */}
      <Card>
        <Table>
          <thead>
            <tr>
              <Th>Booking ID</Th>
              <Th>Destination</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Amount</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(booking => (
              <tr key={booking.id}>
                <Td>{booking.bookingId}</Td>
                <Td>{booking.destination}</Td>
                <Td>{booking.date}</Td>
                <Td><Status status={booking.status}>{booking.status}</Status></Td>
                <Td>{booking.amount}</Td>
                <Td>
                  <Button onClick={() => setSelectedBooking(booking)}>Details</Button>
                  {booking.status !== "Cancelled" && 
                    <Button onClick={() => cancelBooking(booking.id)}>Cancel</Button>
                  }
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
            <p><b>Destination:</b> {selectedBooking.destination}</p>
            <p><b>Date:</b> {selectedBooking.date}</p>
            <p><b>Status:</b> {selectedBooking.status}</p>
            <p><b>Booking ID:</b> {selectedBooking.bookingId}</p>
            <p><b>Amount:</b> {selectedBooking.amount}</p>

            <TravelModalButton onClick={() => downloadItinerary(selectedBooking)}>
              Download Itinerary
            </TravelModalButton>

            <Button onClick={() => setSelectedBooking(null)} style={{ marginLeft: 10 }}>
              Close
            </Button>
          </Modal>
        </ModalOverlay>
      )}

    </Container>
  );
};

export default UpcomingBooking;