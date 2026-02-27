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
  max-width: 800px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  color: #222;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
`;

const SectionTitle = styled.h4`
  margin-top: 20px;
  margin-bottom: 10px;
  color: #0d6efd;
`;

const TotalRow = styled(Row)`
  font-weight: bold;
  font-size: 16px;
  border-top: 1px dashed #ccc;
  padding-top: 10px;
`;

const Btn = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
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
const BookingSummary = ({ booking, onNext }) => {
  const navigate = useNavigate();

  // Demo data if booking not passed
  const demoBooking = {
    room: { name: "Deluxe Room", price: 150 },
    guests: 2,
    addOns: [
      { name: "Breakfast Included", price: 20 },
      { name: "Airport Pickup", price: 40 },
    ],
    insurance: { name: "Premium Insurance", price: 50 },
    specialRequest: "Late check-in requested",
    discount: 15,
  };

  const current = booking || demoBooking;

  const subtotal = current.room.price;
  const addOnsTotal = current.addOns.reduce((a, b) => a + b.price, 0);
  const insurancePrice = current.insurance?.price || 0;
  const total = subtotal + addOnsTotal + insurancePrice - current.discount;

  const handleContinue = () => {
    if (onNext) onNext(total);
    else navigate("/booking/payment");
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Booking Summary</Title>

        <SectionTitle>Room Details</SectionTitle>
        <Row>
          <span>{current.room.name}</span>
          <span>${current.room.price}</span>
        </Row>

        <SectionTitle>Guests</SectionTitle>
        <Row>
          <span>Number of Guests</span>
          <span>{current.guests}</span>
        </Row>

        {current.addOns.length > 0 && (
          <>
            <SectionTitle>Add-Ons</SectionTitle>
            {current.addOns.map((a, idx) => (
              <Row key={idx}>
                <span>{a.name}</span>
                <span>${a.price}</span>
              </Row>
            ))}
          </>
        )}

        {current.insurance && current.insurance.price > 0 && (
          <>
            <SectionTitle>Insurance</SectionTitle>
            <Row>
              <span>{current.insurance.name}</span>
              <span>${current.insurance.price}</span>
            </Row>
          </>
        )}

        {current.specialRequest && (
          <>
            <SectionTitle>Special Requests</SectionTitle>
            <Row>
              <span colSpan={2}>{current.specialRequest}</span>
            </Row>
          </>
        )}

        {current.discount > 0 && (
          <Row>
            <span>Discount</span>
            <span>-${current.discount}</span>
          </Row>
        )}

        <TotalRow>
          <span>Total</span>
          <span>${total}</span>
        </TotalRow>

        <Btn onClick={handleContinue}>Proceed to Payment</Btn>
      </Card>
    </PageWrapper>
  );
};

export default BookingSummary;