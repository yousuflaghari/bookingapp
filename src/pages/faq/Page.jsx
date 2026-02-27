import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Button } from "../../components/Button";
import {Card} from "../../components/Card";

/* ================== Sections ================== */
const Section = styled.section`
  padding: 80px 20px;
  background: ${({ bg, theme }) => (bg ? theme.colors.light : theme.colors.white)};
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 40px;
`;

/* ================== FAQ Accordion ================== */
const FAQWrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;

const FAQItem = styled(Card)`
  padding: 20px 25px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover { box-shadow: ${({ theme }) => theme.shadow.card}; }
`;

const Question = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const Answer = styled.p`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

/* ================== CTA ================== */
const CTAWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 20px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 60px 0;
`;

const CTAButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  padding: 14px 28px;
  margin-top: 20px;
`;

/* ================== Footer ================== */
const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 20px;
`;

const FooterText = styled.p`
  opacity: 0.8;
  text-align: center;
`;

/* ================== Fake FAQ Data ================== */
const faqData = [
  {
    question: "How do I book a hotel?",
    answer: "Select your destination, choose dates, and pick a hotel. Then complete the payment to confirm your booking."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, cancellations and modifications can be done via your dashboard. Policies depend on each property."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, debit cards, and PayPal. All transactions are secure and encrypted."
  },
  {
    question: "Do you offer luxury packages?",
    answer: "Yes, we provide curated luxury packages including stays, fine dining, and premium experiences."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact our support via the Contact Page form, live chat, or email. Our team is available 24/7."
  },
];

/* ================== Page Component ================== */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Frequently Asked Questions"
        text="Find answers to common queries about booking, payments, and services."
        bg="https://images.unsplash.com/photo-1515169067868-5387ec356754"
      />

      {/* FAQ Section */}
      <Section>
        <SectionTitle>FAQs</SectionTitle>
        <SectionText>Everything you need to know to make your experience seamless.</SectionText>
        <FAQWrapper>
          {faqData.map((item, idx) => (
            <FAQItem key={idx} onClick={() => toggleFAQ(idx)}>
              <Question>
                {item.question} <span>{openIndex === idx ? "−" : "+"}</span>
              </Question>
              <Answer open={openIndex === idx}>{item.answer}</Answer>
            </FAQItem>
          ))}
        </FAQWrapper>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Need More Help?</h2>
        <p>If you can't find an answer here, contact our support team anytime.</p>
        <CTAButton>Contact Us</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
