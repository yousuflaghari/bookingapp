import React from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const MethodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;

const MethodLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
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

const PaymentMethods = ({ selectedMethod, onChange }) => {
  const methods = [
    { id: "card", name: "Credit / Debit Card" },
    { id: "paypal", name: "PayPal" },
    { id: "wallet", name: "Wallet" },
  ];

  return (
    <MethodsWrapper>
      {methods.map((method) => (
        <MethodLabel key={method.id}>
          <input
            type="radio"
            name="paymentMethod"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={() => onChange(method.id)}
          />
          {method.name}
        </MethodLabel>
      ))}
    </MethodsWrapper>
  );
};

export default PaymentMethods;