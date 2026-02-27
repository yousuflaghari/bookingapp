import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const expandAccordion = keyframes`
  0% { max-height: 0; opacity: 0;}
  100% { max-height: 500px; opacity: 1;}
`;

/* ================== Layout ================== */
const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

const Accordion = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.light};
  margin-bottom: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
`;

const AccordionContent = styled.div`
  padding: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  animation: ${expandAccordion} 0.3s ease forwards;
  max-height: ${({ open }) => (open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

/* ================== Page Component ================== */
export default function HotelPolicies() {
  const policies = [
    { title: "Check-In / Check-Out", content: "Check-in from 2:00 PM, Check-out until 11:00 AM. Early check-in or late check-out subject to availability." },
    { title: "Cancellation Policy", content: "Free cancellation up to 24 hours before arrival. After that, one night charge applies." },
    { title: "No Smoking Policy", content: "Smoking is not allowed in rooms or indoor areas. Designated smoking areas are available." },
    { title: "Pet Policy", content: "Pets are not allowed except service animals. Cleaning fee applies for any damages." },
    { title: "Payment Methods", content: "We accept all major credit cards, debit cards, and mobile payments." },
    { title: "Age Restrictions", content: "Guests under 18 must be accompanied by an adult. Valid ID required at check-in." },
    { title: "Extra Beds", content: "Extra beds available on request. Additional charges may apply." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Container>
          <Title>Hotel Policies</Title>

          {policies.map((p, i) => (
            <Accordion key={i}>
              <AccordionHeader onClick={() => toggleAccordion(i)}>
                {p.title} {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </AccordionHeader>
              <AccordionContent open={openIndex === i}>{p.content}</AccordionContent>
            </Accordion>
          ))}
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
