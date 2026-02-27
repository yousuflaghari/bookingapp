import React, { useState } from "react";
import styled from "styled-components";

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

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`;

const Question = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: #0d6efd;
`;

const Answer = styled.div`
  margin-top: 8px;
  color: #555;
`;

const FAQs = () => {
  const faqs = [
    { q: "Is check-in available 24/7?", a: "Yes, check-in is available anytime." },
    { q: "Do you allow pets?", a: "Yes, pets are allowed in selected rooms." },
    { q: "Is breakfast included?", a: "Breakfast is included for all rooms." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Wrapper>
      <Title>Hotel FAQs</Title>
      {faqs.map((f, i) => (
        <FAQItem key={i}>
          <Question onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {f.q}
          </Question>
          {openIndex === i && <Answer>{f.a}</Answer>}
        </FAQItem>
      ))}
    </Wrapper>
  );
};

export default FAQs;