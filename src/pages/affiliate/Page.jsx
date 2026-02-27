import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import  Hero  from "../../components/Hero";
import { Button } from "../../components/Button";
import { Card }from "../../components/Card";

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

/* ================== Affiliate Cards ================== */
const AffiliatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const AffiliateCard = styled(Card)`
  padding: 25px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const AffiliateIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const AffiliateName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const AffiliateDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
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

/* ================== Fake Affiliate Data ================== */
const affiliates = [
  { name: "TravelBuddy", description: "Earn commissions by referring luxury travelers.", icon: "https://via.placeholder.com/80" },
  { name: "GlobalExplorer", description: "Partner with us to promote top destinations worldwide.", icon: "https://via.placeholder.com/80" },
  { name: "LuxuryRewards", description: "Get exclusive rewards for driving bookings.", icon: "https://via.placeholder.com/80" },
  { name: "JetSetters", description: "Collaborate and earn from our premium travel offerings.", icon: "https://via.placeholder.com/80" },
];

/* ================== Page Component ================== */
export default function Affiliate() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Affiliate Program"
        text="Join our affiliate network and earn commissions promoting LuxuryStay."
        bg="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      />

      {/* Affiliates Section */}
      <Section>
        <SectionTitle>Our Affiliate Partners</SectionTitle>
        <SectionText>We collaborate with top travel and lifestyle affiliates to expand our reach globally.</SectionText>
        <AffiliatesGrid>
          {affiliates.map((aff, idx) => (
            <AffiliateCard key={idx}>
              <AffiliateIcon src={aff.icon} alt={aff.name} />
              <AffiliateName>{aff.name}</AffiliateName>
              <AffiliateDescription>{aff.description}</AffiliateDescription>
              <CTAButton>Join Now</CTAButton>
            </AffiliateCard>
          ))}
        </AffiliatesGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Become a Partner</h2>
        <p>Sign up to start earning from LuxuryStay's premium bookings and promotions.</p>
        <CTAButton>Sign Up</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
