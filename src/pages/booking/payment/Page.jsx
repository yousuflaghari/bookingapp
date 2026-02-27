import React, { useState, useEffect } from "react";
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
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 15px;
  color: #222;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
`;

const TotalRow = styled(Row)`
  font-weight: bold;
  font-size: 16px;
`;

const PaymentMethods = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background: #f8f9fa;
  }

  input {
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-top: 25px;
  width: 100%;
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

const Payment = () => {
  const navigate = useNavigate();

  // Example state: normally fetched from context/store
  const [subtotal, setSubtotal] = useState(400);
  const [addOns, setAddOns] = useState([
    { name: "Breakfast Included", price: 20 },
    { name: "Airport Pickup", price: 40 },
  ]);
  const [discount, setDiscount] = useState(15);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [loading, setLoading] = useState(false);

  const total = subtotal + addOns.reduce((a, b) => a + b.price, 0) - discount;

  const handlePayNow = () => {
    setLoading(true);

    // simulate payment delay
    setTimeout(() => {
      setLoading(false);
      // Random success/fail for demo
      const success = Math.random() > 0.3;
      if (success) {
        navigate("/booking/confirmation");
      } else {
        navigate("/booking/failed");
      }
    }, 2000);
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Payment</Title>

        <Row>
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </Row>

        {addOns.map((item, idx) => (
          <Row key={idx}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </Row>
        ))}

        <Row>
          <span>Discount:</span>
          <span>-${discount}</span>
        </Row>

        <TotalRow>
          <span>Total:</span>
          <span>${total}</span>
        </TotalRow>

        <PaymentMethods>
          <RadioLabel>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit / Debit Card
          </RadioLabel>

          <RadioLabel>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            PayPal
          </RadioLabel>

          <RadioLabel>
            <input
              type="radio"
              name="payment"
              value="wallet"
              checked={paymentMethod === "wallet"}
              onChange={() => setPaymentMethod("wallet")}
            />
            Wallet
          </RadioLabel>
        </PaymentMethods>

        <Button onClick={handlePayNow} disabled={loading}>
          {loading ? "Processing Payment..." : "Pay Now"}
        </Button>
      </Card>
    </PageWrapper>
  );
};

export default Payment;