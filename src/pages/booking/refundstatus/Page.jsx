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
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  color: #222;
`;

const RefundCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.5s ease;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const Info = styled.div`
  flex: 2;
  min-width: 200px;
`;

const HotelName = styled.h4`
  margin-bottom: 5px;
`;

const RefundAmount = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  min-width: 100px;
  text-align: right;
`;

const Status = styled.div`
  flex: 1;
  min-width: 120px;
  text-align: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background: ${(props) =>
    props.status === "Pending" ? "#ffc107" :
    props.status === "Processed" ? "#0d6efd" :
    props.status === "Completed" ? "#198754" : "#6c757d"};
`;

const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
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

const refunds = [
  {
    id: "BK20260215B",
    hotel: "Ocean View Resort",
    refundAmount: 250,
    status: "Completed",
  },
  {
    id: "BK20260218F",
    hotel: "City Lights Hotel",
    refundAmount: 300,
    status: "Processed",
  },
  {
    id: "BK20260220G",
    hotel: "Grand Palace Hotel",
    refundAmount: 200,
    status: "Pending",
  },
];

const RefundStatus = () => {
  const handleDownload = (id) => {
    alert(`Download refund receipt for ${id} coming soon!`);
  };

  return (
    <PageWrapper>
      <Container>
        <Title>Refund Status</Title>

        {refunds.map((r) => (
          <RefundCard key={r.id}>
            <Info>
              <HotelName>{r.hotel}</HotelName>
              <p>Booking ID: {r.id}</p>
            </Info>
            <RefundAmount>${r.refundAmount}</RefundAmount>
            <Status status={r.status}>{r.status}</Status>
            <Btn onClick={() => handleDownload(r.id)}>Download Receipt</Btn>
          </RefundCard>
        ))}
      </Container>
    </PageWrapper>
  );
};

export default RefundStatus;