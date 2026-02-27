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

/* ================== Destinations Grid ================== */
const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const DestinationCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DestinationInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const DestinationName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const DestinationDescription = styled.p`
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

/* ================== Fake Destinations Data ================== */
const destinations = [
  { name: "Paris", description: "City of lights and luxury experiences.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { name: "Rome", description: "Historic landmarks and premium stays await you.", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { name: "Dubai", description: "Experience opulent resorts and world-class shopping.", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { name: "Tokyo", description: "Blend of modern luxury and traditional culture.", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
];

/* ================== Page Component ================== */
export default function Destinations() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Top Destinations"
        text="Discover luxury destinations curated for the perfect stay."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Destinations Section */}
      <Section>
        <SectionTitle>Explore Our Destinations</SectionTitle>
        <SectionText>From historic cities to tropical paradises, find the perfect luxury getaway.</SectionText>
        <DestinationsGrid>
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx}>
              <DestinationImage src={dest.image} alt={dest.name} />
              <DestinationInfo>
                <DestinationName>{dest.name}</DestinationName>
                <DestinationDescription>{dest.description}</DestinationDescription>
                <ExploreButton>Explore</ExploreButton>
              </DestinationInfo>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Plan Your Luxury Trip</h2>
        <p>Start planning your exclusive travel experience today with LuxuryStay.</p>
        <CTAButton>Book Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
