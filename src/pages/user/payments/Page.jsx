// user/payments.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const PaymentsWrapper = styled.div`
  padding: 20px;
`;

const PaymentCard = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const PaymentTitle = styled.h3`
  margin: 0 0 8px 0;
`;

const PaymentDate = styled.p`
  margin: 0;
  color: #555;
`;

const PaymentAmount = styled.p`
  margin: 4px 0 0 0;
  font-weight: bold;
  color: ${(props) => (props.status === "Failed" ? "#ff4d4f" : "#4caf50")};
`;

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Simulate fetching from API
    const fetchPayments = async () => {
      const data = [
        { id: 1, title: "Booking: Grand Hotel", amount: 120, date: "2026-01-05", status: "Success" },
        { id: 2, title: "Booking: Sea View Resort", amount: 200, date: "2025-12-15", status: "Success" },
        { id: 3, title: "Booking: Mountain Inn", amount: 150, date: "2025-11-01", status: "Failed" },
      ];
      setPayments(data);
    };
    fetchPayments();
  }, []);

  return (
    <PaymentsWrapper>
      <h2>Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        payments.map((payment) => (
          <PaymentCard key={payment.id}>
            <PaymentTitle>{payment.title}</PaymentTitle>
            <PaymentDate>{payment.date}</PaymentDate>
            <PaymentAmount status={payment.status}>${payment.amount} - {payment.status}</PaymentAmount>
          </PaymentCard>
        ))
      )}
    </PaymentsWrapper>
  );
};

export default Payments;