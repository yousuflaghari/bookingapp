import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import { Button } from "../../../components/Button";
import {Card} from "../../../components/Card";

/* ================== Sections ================== */
const Section = styled.section`
  padding: 80px 20px;
  background: ${({ bg, theme }) => (bg ? theme.colors.light : theme.colors.white)};
`;

const SectionTitle = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 50px;
  font-size: 18px;
`;

/* ================== City Highlights ================== */
const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const HighlightCard = styled(Card)`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  text-align: center;
  padding: 20px;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const HighlightImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: 15px;
`;

const HighlightTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const HighlightDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
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

/* ================== Fake City Data ================== */
const city = {
  name: "Paris",
  subtitle: "The City of Lights, culture, and luxury experiences.",
  highlights: [
    { title: "Luxury Hotels", description: "Stay at the finest 5-star hotels in Paris.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
    { title: "Gourmet Dining", description: "Experience world-class French cuisine.", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9" },
    { title: "Iconic Landmarks", description: "Visit the Eiffel Tower, Louvre, and more.", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
    { title: "Luxury Shopping", description: "Explore designer boutiques along Champs-Élysées.", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  ]
};

/* ================== Page Component ================== */
export default function DestinationsCity() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* City Hero */}
      <Section>
        <SectionTitle>{city.name}</SectionTitle>
        <SectionSubtitle>{city.subtitle}</SectionSubtitle>
      </Section>

      {/* Highlights Section */}
      <Section bg>
        <HighlightsGrid>
          {city.highlights.map((item, idx) => (
            <HighlightCard key={idx}>
              <HighlightImage src={item.image} alt={item.title} />
              <HighlightTitle>{item.title}</HighlightTitle>
              <HighlightDescription>{item.description}</HighlightDescription>
            </HighlightCard>
          ))}
        </HighlightsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Plan Your Luxury Stay in {city.name}</h2>
        <p>Book your exclusive experience and enjoy the finest luxury services.</p>
        <CTAButton>Book Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
