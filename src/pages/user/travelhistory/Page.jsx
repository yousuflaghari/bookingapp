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
    status === "Completed" ? "#4caf50" :
    status === "Cancelled" ? "#f44336" :
    "#ff9800"};
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #007bff;
  color: #fff;

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

// ================= Component =================

const TravelHistory = () => {

  const [trips, setTrips] = useState([
    {
      id: 1,
      destination: "Paris, France",
      date: "2025-12-01",
      status: "Completed",
      amount: "$1200",
      bookingId: "BK00123"
    },
    {
      id: 2,
      destination: "Dubai, UAE",
      date: "2026-01-15",
      status: "Cancelled",
      amount: "$900",
      bookingId: "BK00456"
    },
    {
      id: 3,
      destination: "Istanbul, Turkey",
      date: "2026-02-10",
      status: "Completed",
      amount: "$1100",
      bookingId: "BK00789"
    }
  ]);

  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);

  const filteredTrips = trips.filter(trip => {
    return (
      trip.destination.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? trip.status === filterStatus : true)
    );
  });

  const downloadItinerary = (trip) => {
    alert(`Downloading itinerary for ${trip.destination}...`);
  };

  return (
    <Container>
      <Title>Travel History</Title>

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
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Upcoming">Upcoming</option>
          </Select>
        </Row>
      </Card>

      {/* Trips Table */}
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
            {filteredTrips.map(trip => (
              <tr key={trip.id}>
                <Td>{trip.bookingId}</Td>
                <Td>{trip.destination}</Td>
                <Td>{trip.date}</Td>
                <Td><Status status={trip.status}>{trip.status}</Status></Td>
                <Td>{trip.amount}</Td>
                <Td>
                  <Button onClick={() => setSelectedTrip(trip)}>Details</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Trip Details Modal */}
      {selectedTrip && (
        <ModalOverlay onClick={() => setSelectedTrip(null)}>
          <Modal onClick={e => e.stopPropagation()}>
            <h2>Trip Details</h2>
            <p><b>Destination:</b> {selectedTrip.destination}</p>
            <p><b>Date:</b> {selectedTrip.date}</p>
            <p><b>Status:</b> {selectedTrip.status}</p>
            <p><b>Booking ID:</b> {selectedTrip.bookingId}</p>
            <p><b>Amount:</b> {selectedTrip.amount}</p>

            <Button onClick={() => downloadItinerary(selectedTrip)}>
              Download Itinerary
            </Button>

            <Button onClick={() => setSelectedTrip(null)} style={{ marginLeft: 10 }}>
              Close
            </Button>
          </Modal>
        </ModalOverlay>
      )}

    </Container>
  );
};

export default TravelHistory;