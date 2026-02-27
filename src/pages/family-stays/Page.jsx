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

/* ================== Family Stays Grid ================== */
const StaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const StayCard = styled(Card)`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`;

const StayImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StayInfo = styled.div`
  padding: 20px;
`;

const StayName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const StayDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const StayPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const BookButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 12px 24px;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
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

/* ================== Fake Family Stays Data ================== */
const familyStays = [
  { name: "Grand Family Hotel", description: "Spacious rooms with kid-friendly amenities.", price: "$250/night", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { name: "Happy Family Resort", description: "Perfect for family vacations with playgrounds.", price: "$220/night", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { name: "Family Stay Inn", description: "Cozy and comfortable stays for families.", price: "$200/night", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { name: "Sunny Family Lodge", description: "Affordable and fun stays for the entire family.", price: "$210/night", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { name: "City Family Suites", description: "Modern amenities and extra space for families.", price: "$230/night", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { name: "Urban Family Inn", description: "Comfortable family accommodations in city center.", price: "$240/night", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function FamilyStays() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Family Stays"
        text="Comfortable and spacious stays perfect for families."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Family Stays Grid Section */}
      <Section>
        <SectionTitle>Explore Family Stays</SectionTitle>
        <SectionText>Enjoy family vacations with extra space, kid-friendly amenities, and comfort.</SectionText>
        <StaysGrid>
          {familyStays.map((stay, idx) => (
            <StayCard key={idx}>
              <StayImage src={stay.image} alt={stay.name} />
              <StayInfo>
                <StayName>{stay.name}</StayName>
                <StayDescription>{stay.description}</StayDescription>
                <StayPrice>{stay.price}</StayPrice>
                <BookButton>Book Now</BookButton>
              </StayInfo>
            </StayCard>
          ))}
        </StaysGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Book Your Family Stay Today</h2>
        <p>Reserve a spacious and comfortable stay for your whole family at the best locations.</p>
        <CTAButton>Reserve Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
