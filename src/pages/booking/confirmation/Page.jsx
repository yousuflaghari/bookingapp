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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  color: #222;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
`;

const DetailsBox = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
  margin-bottom: 25px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: 0.3s;
  min-width: 150px;
  background: ${(props) =>
    props.variant === "secondary" ? "#6c757d" : "#0d6efd"};
  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

/* ===========================
   Component
=========================== */

const BookingConfirmation = () => {
  const navigate = useNavigate();

  // Example booking details
  const bookingDetails = {
    id: "BK20260220XYZ",
    hotel: "Grand Palace Hotel",
    checkIn: "2026-03-01",
    checkOut: "2026-03-05",
    guests: 2,
    rooms: 1,
    addOns: [
      { name: "Breakfast Included", price: 20 },
      { name: "Airport Pickup", price: 40 },
    ],
    subtotal: 400,
    discount: 15,
    total: 400 - 15,
  };

  const handleInvoice = () => {
    alert("Download Invoice feature coming soon!");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <PageWrapper>
      <Card>
        <Icon>🎉</Icon>
        <Title>Booking Confirmed!</Title>
        <Description>
          Thank you for booking with us. Your booking has been successfully confirmed.
        </Description>

        <DetailsBox>
          <Row>
            <span>Booking ID:</span>
            <span>{bookingDetails.id}</span>
          </Row>
          <Row>
            <span>Hotel:</span>
            <span>{bookingDetails.hotel}</span>
          </Row>
          <Row>
            <span>Check-In:</span>
            <span>{bookingDetails.checkIn}</span>
          </Row>
          <Row>
            <span>Check-Out:</span>
            <span>{bookingDetails.checkOut}</span>
          </Row>
          <Row>
            <span>Guests:</span>
            <span>{bookingDetails.guests}</span>
          </Row>
          <Row>
            <span>Rooms:</span>
            <span>{bookingDetails.rooms}</span>
          </Row>

          {bookingDetails.addOns.map((item, idx) => (
            <Row key={idx}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </Row>
          ))}

          <hr />
          <Row>
            <span>Subtotal:</span>
            <span>${bookingDetails.subtotal}</span>
          </Row>
          <Row>
            <span>Discount:</span>
            <span>-${bookingDetails.discount}</span>
          </Row>
          <Total>
            <span>Total:</span>
            <span>${bookingDetails.total}</span>
          </Total>
        </DetailsBox>

        <BtnGroup>
          <Button onClick={handleInvoice}>Download Invoice</Button>
          <Button variant="secondary" onClick={handleDashboard}>
            Back to Dashboard
          </Button>
        </BtnGroup>
      </Card>
    </PageWrapper>
  );
};

export default BookingConfirmation;