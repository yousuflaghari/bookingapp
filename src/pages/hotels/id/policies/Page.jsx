import React from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const PolicyCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const PolicyTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #0d6efd;
`;

const PolicyText = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.5;
`;

const PoliciesPage = () => {
  const policies = [
    {
      title: "Cancellation Policy",
      text: "Free cancellation up to 24 hours before check-in. After that, 50% of booking amount will be charged."
    },
    {
      title: "Payment Policy",
      text: "Payment is required at check-in. We accept all major credit cards and cash."
    },
    {
      title: "Check-in / Check-out",
      text: "Check-in from 2:00 PM, Check-out by 12:00 PM. Early check-in or late check-out subject to availability."
    },
    {
      title: "Pets",
      text: "Pets are allowed in selected rooms only. Additional charges may apply."
    },
    {
      title: "Smoking",
      text: "Smoking is prohibited inside the rooms. Designated smoking areas are available."
    },
    {
      title: "Guest Age",
      text: "Guests must be 18 years or older to book a room. Children under 12 stay free with parents."
    },
    {
      title: "Damage Policy",
      text: "Guests are responsible for any damage caused to hotel property during their stay."
    }
  ];

  return (
    <Wrapper>
      <Title>Hotel Policies</Title>
      {policies.map((p, i) => (
        <PolicyCard key={i}>
          <PolicyTitle>{p.title}</PolicyTitle>
          <PolicyText>{p.text}</PolicyText>
        </PolicyCard>
      ))}
    </Wrapper>
  );
};

export default PoliciesPage;