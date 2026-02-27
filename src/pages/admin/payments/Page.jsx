import React, { useState } from "react";
import styled from "styled-components";

const PaymentWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  &:hover { opacity: 0.9; }
`;

const Message = styled.div`
  margin-top: 12px;
  padding: 10px;
  border-radius: 6px;
  color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
  background: ${(props) => (props.type === "success" ? "#d4edda" : "#f8d7da")};
  border: 1px solid ${(props) => (props.type === "success" ? "#c3e6cb" : "#f5c6cb")};
`;

const Payment = ({ hotelName, amount }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [message, setMessage] = useState(null);

  const handlePayment = (e) => {
    e.preventDefault();

    // ===== Dummy Validation =====
    if (!cardNumber || !expiry || !cvc) {
      setMessage({ type: "error", text: "Please fill all fields" });
      return;
    }

    // ===== Dummy Payment Success =====
    setMessage({ type: "success", text: `Payment of $${amount} for ${hotelName} successful!` });

    // Clear form
    setCardNumber("");
    setExpiry("");
    setCVC("");
  };

  return (
    <PaymentWrapper>
      <Title>Pay for {hotelName}</Title>
      <form onSubmit={handlePayment}>
        <Input
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={16}
        />
        <Input
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <Input
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCVC(e.target.value)}
          maxLength={4}
        />
        <Button type="submit">Pay ${amount}</Button>
      </form>
      {message && <Message type={message.type}>{message.text}</Message>}
    </PaymentWrapper>
  );
};

export default Payment;