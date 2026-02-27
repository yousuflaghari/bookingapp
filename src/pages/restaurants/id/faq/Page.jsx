import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #222;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  overflow: hidden;
`;

const Question = styled.div`
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
`;

const Answer = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
  color: #555;
`;

const Button = styled.button`
  margin-bottom: 15px;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: #0d6efd;

  &:hover {
    opacity: 0.85;
  }
`;

/* ===========================
   Component
=========================== */

const FAQPage = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do I need reservation?",
      answer: "Yes, reservations are recommended especially on weekends."
    },
    {
      id: 2,
      question: "Do you offer home delivery?",
      answer: "Yes, we offer delivery through multiple platforms."
    },
    {
      id: 3,
      question: "Is parking available?",
      answer: "Yes, free parking is available for customers."
    }
  ];

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>

      <Button>Add FAQ</Button>

      {faqs.map((faq) => (
        <Card key={faq.id}>
          <Question onClick={() => toggle(faq.id)}>
            {faq.question}
            <span>{openId === faq.id ? "-" : "+"}</span>
          </Question>

          {openId === faq.id && (
            <Answer>{faq.answer}</Answer>
          )}
        </Card>
      ))}
    </Container>
  );
};

export default FAQPage;