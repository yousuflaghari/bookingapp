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
  background: #fff0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  padding: 35px;
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
  color: #dc3545;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
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
  min-width: 140px;
  background: ${(props) =>
    props.variant === "secondary" ? "#6c757d" : "#dc3545"};
  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

/* ===========================
   Component
=========================== */

const BookingFailed = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/booking/payment"); // redirect to payment
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <PageWrapper>
      <Card>
        <Icon>❌</Icon>
        <Title>Booking Failed</Title>
        <Description>
          Unfortunately, your booking could not be completed. This may be due to payment failure or technical issues. Please try again or contact support.
        </Description>

        <BtnGroup>
          <Button onClick={handleRetry}>Retry Payment</Button>
          <Button variant="secondary" onClick={handleDashboard}>Back to Dashboard</Button>
        </BtnGroup>
      </Card>
    </PageWrapper>
  );
};

export default BookingFailed;