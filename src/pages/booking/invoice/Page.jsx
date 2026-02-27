import React from "react";
import styled, { keyframes } from "styled-components";

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
  max-width: 700px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  text-align: center;
  color: #222;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Divider = styled.hr`
  margin: 15px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const TotalRow = styled(Row)`
  font-weight: bold;
  font-size: 16px;
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
  border: none;
  border-radius: 10px;
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
const Invoice = () => {
  const booking = {
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
    total: 425,
  };

  const handleDownload = () => {
    alert("Download PDF functionality coming soon!");
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Booking Invoice</Title>

        <Row>
          <span>Booking ID:</span>
          <span>{booking.id}</span>
        </Row>
        <Row>
          <span>Hotel:</span>
          <span>{booking.hotel}</span>
        </Row>
        <Row>
          <span>Check-In:</span>
          <span>{booking.checkIn}</span>
        </Row>
        <Row>
          <span>Check-Out:</span>
          <span>{booking.checkOut}</span>
        </Row>
        <Row>
          <span>Guests:</span>
          <span>{booking.guests}</span>
        </Row>
        <Row>
          <span>Rooms:</span>
          <span>{booking.rooms}</span>
        </Row>

        <Divider />

        {booking.addOns.map((item, idx) => (
          <Row key={idx}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </Row>
        ))}

        <Divider />

        <Row>
          <span>Subtotal:</span>
          <span>${booking.subtotal}</span>
        </Row>
        <Row>
          <span>Discount:</span>
          <span>-${booking.discount}</span>
        </Row>
        <TotalRow>
          <span>Total:</span>
          <span>${booking.total}</span>
        </TotalRow>

        <BtnGroup>
          <Button onClick={handleDownload}>Download Invoice</Button>
        </BtnGroup>
      </Card>
    </PageWrapper>
  );
};

export default Invoice;