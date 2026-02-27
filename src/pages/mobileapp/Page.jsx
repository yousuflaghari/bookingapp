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

/* ================== App Features ================== */
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled(Card)`
  padding: 25px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

/* ================== Download Section ================== */
const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 60px 0;
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
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

/* ================== Fake Features Data ================== */
const appFeatures = [
  { icon: "https://via.placeholder.com/60", title: "Easy Booking", description: "Book luxury stays in just a few taps using our intuitive mobile app." },
  { icon: "https://via.placeholder.com/60", title: "Exclusive Offers", description: "Access app-only deals and discounts for premium properties." },
  { icon: "https://via.placeholder.com/60", title: "Personalized Experience", description: "Get recommendations and personalized services based on your preferences." },
  { icon: "https://via.placeholder.com/60", title: "Instant Support", description: "Chat with our support team anytime directly from the app." },
];

/* ================== Page Component ================== */
export default function MobileApp() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="LuxuryStay Mobile App"
        text="Experience luxury booking at your fingertips."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Features Section */}
      <Section>
        <SectionTitle>App Features</SectionTitle>
        <SectionText>Discover how our mobile app enhances your luxury travel experience.</SectionText>
        <FeaturesGrid>
          {appFeatures.map((feat, idx) => (
            <FeatureCard key={idx}>
              <FeatureIcon src={feat.icon} alt={feat.title} />
              <FeatureTitle>{feat.title}</FeatureTitle>
              <FeatureDescription>{feat.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      {/* Download Section */}
      <DownloadWrapper>
        <h2>Download the App Now</h2>
        <p>Available on both iOS and Android devices.</p>
        <DownloadButtons>
          <Button>App Store</Button>
          <Button>Google Play</Button>
        </DownloadButtons>
      </DownloadWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
