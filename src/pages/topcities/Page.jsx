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

/* ================== Cities Grid ================== */
const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const CityCard = styled(Card)`
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

const CityImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CityInfo = styled.div`
  padding: 20px;
`;

const CityName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const CityDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const ExploreButton = styled(Button)`
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

/* ================== Fake Top Cities Data ================== */
const topCities = [
  { name: "Paris", description: "City of lights and luxury experiences.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { name: "Rome", description: "Historic landmarks and premium stays await you.", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { name: "Dubai", description: "Experience opulent resorts and world-class shopping.", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { name: "Tokyo", description: "Blend of modern luxury and traditional culture.", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { name: "New York", description: "The city that never sleeps with premium experiences.", image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107" },
  { name: "London", description: "Historic charm and luxury combined.", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function TopCities() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Top Cities for Luxury Stay"
        text="Explore curated top cities offering premium accommodations and experiences."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Cities Grid Section */}
      <Section>
        <SectionTitle>Explore Top Cities</SectionTitle>
        <SectionText>Discover the finest cities to experience luxury travel like never before.</SectionText>
        <CitiesGrid>
          {topCities.map((city, idx) => (
            <CityCard key={idx}>
              <CityImage src={city.image} alt={city.name} />
              <CityInfo>
                <CityName>{city.name}</CityName>
                <CityDescription>{city.description}</CityDescription>
                <ExploreButton>Explore</ExploreButton>
              </CityInfo>
            </CityCard>
          ))}
        </CitiesGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Start Your Luxury Journey</h2>
        <p>Book your stay at top cities and enjoy exclusive experiences.</p>
        <CTAButton>Book Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
