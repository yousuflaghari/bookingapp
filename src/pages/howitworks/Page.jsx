import React from "react";
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

/* ================== Steps Cards ================== */
const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const StepCard = styled(Card)`
  padding: 25px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const StepNumber = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

const StepTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
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

/* ================== Fake Steps Data ================== */
const steps = [
  {
    number: "1",
    title: "Choose Your Destination",
    description: "Browse our curated selection of luxury hotels, resorts, and restaurants across the globe."
  },
  {
    number: "2",
    title: "Select Dates & Rooms",
    description: "Pick the dates, room type, and package that fits your luxury experience."
  },
  {
    number: "3",
    title: "Add Special Requests",
    description: "Customize your stay with spa, dining, and exclusive experience requests."
  },
  {
    number: "4",
    title: "Secure Payment",
    description: "Pay securely with our encrypted payment system using cards or PayPal."
  },
  {
    number: "5",
    title: "Enjoy Your Stay",
    description: "Arrive and enjoy your luxury stay with seamless service and unforgettable experiences."
  },
];

/* ================== Page Component ================== */
export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="How It Works"
        text="Booking your luxury stay is simple, fast, and secure with LuxuryStay."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Steps Section */}
      <Section>
        <SectionTitle>Our Process</SectionTitle>
        <SectionText>Follow these simple steps to enjoy a seamless luxury travel experience.</SectionText>
        <StepsGrid>
          {steps.map((step, idx) => (
            <StepCard key={idx}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Ready to Book?</h2>
        <p>Start your luxury journey today with LuxuryStay!</p>
        <CTAButton>Book Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
