import React, { useState } from "react";
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
  max-width: 700px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 25px;
  color: #222;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 12px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  resize: none;
  margin-bottom: 20px;
`;

const Btn = styled.button`
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
const SpecialRequest = ({ onNext }) => {
  const [request, setRequest] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    // send request to parent/store
    console.log("Special Request:", request);
    if (onNext) onNext(request);
    else navigate("/booking/add-ons"); // fallback navigation
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Special Requests</Title>
        <TextArea
          rows={6}
          placeholder="Any special requests? (Optional)"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
        <Btn onClick={handleContinue}>Continue</Btn>
      </Card>
    </PageWrapper>
  );
};

export default SpecialRequest;