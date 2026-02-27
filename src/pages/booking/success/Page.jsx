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
  background: #e6f8ed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 700px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #198754;
`;

const InfoRow = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
`;

const Total = styled.div`
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 12px 22px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  color: white;
  background: #0d6efd;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

/* ===========================
   Component
=========================== */
const BookingSuccess = ({ booking }) => {
  const navigate = useNavigate();

  // For demo if booking not passed
  const demoBooking = {
    id: "BK20260220XYZ",
    hotel: "Grand Palace Hotel",
    checkIn: "2026-03-01",
    checkOut: "2026-03-05",
    guests: 2,
    rooms: 1,
    total: 425,
  };

  const currentBooking = booking || demoBooking;

  return (
    <PageWrapper>
      <Card>
        <Title>Booking Confirmed!</Title>

        <InfoRow>Booking ID: {currentBooking.id}</InfoRow>
        <InfoRow>Hotel: {currentBooking.hotel}</InfoRow>
        <InfoRow>Check-In: {currentBooking.checkIn}</InfoRow>
        <InfoRow>Check-Out: {currentBooking.checkOut}</InfoRow>
        <InfoRow>Guests: {currentBooking.guests}</InfoRow>
        <InfoRow>Rooms: {currentBooking.rooms}</InfoRow>

        <Total>Total Paid: ${currentBooking.total}</Total>

        <BtnGroup>
          <Button onClick={() => navigate("/booking/invoice")}>View Invoice</Button>
          <Button onClick={() => navigate("/booking/history")}>View Booking History</Button>
        </BtnGroup>
      </Card>
    </PageWrapper>
  );
};

export default BookingSuccess;