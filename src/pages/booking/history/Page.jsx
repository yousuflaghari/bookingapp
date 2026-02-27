import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

/* ===========================
   Animations
=========================== */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px);}
  to { opacity: 1; transform: translateY(0);}
`;

/* ===========================
   Styled Components
=========================== */
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  color: #222;
`;

const BookingCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.5s ease;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  flex-wrap: wrap;
`;

const Info = styled.div`
  flex: 2;
  min-width: 200px;
`;

const HotelName = styled.h4`
  margin-bottom: 5px;
`;

const Dates = styled.p`
  font-size: 13px;
  color: #666;
`;

const Status = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background: ${(props) =>
    props.status === "Confirmed" ? "#0d6efd" :
    props.status === "Cancelled" ? "#dc3545" :
    "#6c757d"};
`;

const Price = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  min-width: 80px;
  text-align: right;
`;

const BtnGroup = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
  min-width: 180px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background: ${(props) =>
    props.variant === "danger" ? "#dc3545" :
    props.variant === "secondary" ? "#6c757d" : "#0d6efd"};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

/* ===========================
   Component
=========================== */

const bookings = [
  {
    id: "BK20260220A",
    hotel: "Grand Palace Hotel",
    checkIn: "2026-03-01",
    checkOut: "2026-03-05",
    guests: 2,
    rooms: 1,
    price: 400,
    status: "Confirmed",
  },
  {
    id: "BK20260215B",
    hotel: "Ocean View Resort",
    checkIn: "2026-02-10",
    checkOut: "2026-02-14",
    guests: 1,
    rooms: 1,
    price: 250,
    status: "Cancelled",
  },
  {
    id: "BK20260120C",
    hotel: "City Lights Hotel",
    checkIn: "2026-01-25",
    checkOut: "2026-01-28",
    guests: 2,
    rooms: 1,
    price: 300,
    status: "Confirmed",
  },
];

const BookingHistory = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/booking/confirmation/${id}`); // detail page
  };

  const handleCancel = (id) => {
    navigate(`/booking/cancel/${id}`);
  };

  const handleRebook = (id) => {
    alert(`Rebook feature coming soon for ${id}`);
  };

  return (
    <PageWrapper>
      <Container>
        <Title>My Bookings</Title>

        {bookings.map((b) => (
          <BookingCard key={b.id}>
            <Info>
              <HotelName>{b.hotel}</HotelName>
              <Dates>
                {b.checkIn} - {b.checkOut} • {b.guests} Guests • {b.rooms} Room(s)
              </Dates>
              <Status status={b.status}>{b.status}</Status>
            </Info>

            <Price>${b.price}</Price>

            <BtnGroup>
              {b.status === "Confirmed" && (
                <Button variant="danger" onClick={() => handleCancel(b.id)}>
                  Cancel
                </Button>
              )}
              <Button onClick={() => handleView(b.id)}>View</Button>
              {b.status === "Cancelled" && (
                <Button variant="secondary" onClick={() => handleRebook(b.id)}>
                  Rebook
                </Button>
              )}
            </BtnGroup>
          </BookingCard>
        ))}
      </Container>
    </PageWrapper>
  );
};

export default BookingHistory;