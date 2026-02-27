import React, { useState } from "react";
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
  background: #fff;
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
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

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const ApplyBtn = styled.button`
  padding: 12px 18px;
  background: #0d6efd;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0b5ed7;
  }
`;

const Message = styled.div`
  margin-top: 15px;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  color: ${(props) => (props.success ? "#0f5132" : "#842029")};
  background: ${(props) =>
    props.success ? "#d1e7dd" : "#f8d7da"};
`;

const Summary = styled.div`
  margin-top: 25px;
  text-align: left;
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

/* ===========================
   Component
=========================== */

const ApplyCoupon = () => {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState(0);

  const baseTotal = 200; // example booking total

  const validCoupons = {
    SAVE10: 10,
    TRAVEL15: 15,
    HOLIDAY20: 20,
  };

  const handleApply = () => {
    const upper = coupon.toUpperCase();

    if (validCoupons[upper]) {
      const value = validCoupons[upper];
      setDiscount(value);
      setMessage(`Coupon applied! ${value}% discount applied.`);
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code.");
    }
  };

  const discountedTotal = baseTotal - (baseTotal * discount) / 100;

  return (
    <PageWrapper>
      <Card>
        <Title>Apply Coupon</Title>
        <Description>
          Enter your coupon code to get a discount on your booking
        </Description>

        <InputGroup>
          <Input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <ApplyBtn onClick={handleApply}>Apply</ApplyBtn>
        </InputGroup>

        {message && (
          <Message success={discount > 0}>{message}</Message>
        )}

        <Summary>
          <Row>
            <span>Subtotal:</span>
            <span>${baseTotal}</span>
          </Row>
          {discount > 0 && (
            <Row>
              <span>Discount ({discount}%):</span>
              <span>- ${((baseTotal * discount) / 100).toFixed(2)}</span>
            </Row>
          )}
          <Total>
            <span>Total:</span>
            <span>${discountedTotal.toFixed(2)}</span>
          </Total>
        </Summary>
      </Card>
    </PageWrapper>
  );
};

export default ApplyCoupon;