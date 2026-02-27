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

/* ================== Romantic Getaways Grid ================== */
const GetawaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const GetawayCard = styled(Card)`
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

const GetawayImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const GetawayInfo = styled.div`
  padding: 20px;
`;

const GetawayName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const GetawayDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const GetawayPrice = styled.p`
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

/* ================== Fake Romantic Getaways Data ================== */
const romanticGetaways = [
  { name: "Paris Love Nest", description: "Romantic suites with Eiffel Tower views.", price: "$500/night", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { name: "Venice Canals Retreat", description: "Charming canal-side rooms with gondola rides.", price: "$480/night", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { name: "Santorini Sunset Villas", description: "Private villas with ocean views and sunsets.", price: "$550/night", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { name: "Maldives Overwater Bungalows", description: "Romantic bungalows over turquoise waters.", price: "$600/night", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { name: "Bali Jungle Retreat", description: "Secluded villas amidst tropical jungle.", price: "$450/night", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { name: "Kyoto Traditional Ryokan", description: "Authentic Japanese stay for couples.", price: "$470/night", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function RomanticGetaways() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Romantic Getaways"
        text="Escape with your loved one to the most romantic destinations."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Romantic Getaways Grid Section */}
      <Section>
        <SectionTitle>Explore Romantic Getaways</SectionTitle>
        <SectionText>Perfect destinations and stays for couples looking for romance and luxury.</SectionText>
        <GetawaysGrid>
          {romanticGetaways.map((stay, idx) => (
            <GetawayCard key={idx}>
              <GetawayImage src={stay.image} alt={stay.name} />
              <GetawayInfo>
                <GetawayName>{stay.name}</GetawayName>
                <GetawayDescription>{stay.description}</GetawayDescription>
                <GetawayPrice>{stay.price}</GetawayPrice>
                <BookButton>Book Now</BookButton>
              </GetawayInfo>
            </GetawayCard>
          ))}
        </GetawaysGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Book Your Romantic Stay Today</h2>
        <p>Reserve the perfect getaway and enjoy a romantic experience with your loved one.</p>
        <CTAButton>Reserve Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
