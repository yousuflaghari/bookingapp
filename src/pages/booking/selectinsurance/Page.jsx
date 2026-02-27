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

const OptionCard = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f8f9fa;
  }

  input {
    cursor: pointer;
  }
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
const insuranceOptions = [
  { id: "none", name: "No Insurance", description: "You will not have insurance coverage.", price: 0 },
  { id: "basic", name: "Basic Insurance", description: "Covers accidents & basic travel issues.", price: 20 },
  { id: "premium", name: "Premium Insurance", description: "Covers accidents, cancellations, and medical emergencies.", price: 50 },
];

const SelectInsurance = ({ onNext }) => {
  const [selected, setSelected] = useState("none");

  const handleContinue = () => {
    const selectedInsurance = insuranceOptions.find((i) => i.id === selected);
    // send selectedInsurance to parent / store
    console.log("Selected Insurance:", selectedInsurance);
    if(onNext) onNext(selectedInsurance);
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Select Insurance</Title>

        {insuranceOptions.map((option) => (
          <OptionCard key={option.id}>
            <div>
              <input
                type="radio"
                name="insurance"
                value={option.id}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
              />
              <strong style={{ marginLeft: "10px" }}>{option.name}</strong>
              <p style={{ marginLeft: "30px", fontSize: "13px", color: "#555" }}>{option.description}</p>
            </div>
            <div>${option.price}</div>
          </OptionCard>
        ))}

        <Btn onClick={handleContinue}>Continue</Btn>
      </Card>
    </PageWrapper>
  );
};

export default SelectInsurance;