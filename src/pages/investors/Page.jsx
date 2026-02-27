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

/* ================== Investor Cards ================== */
const InvestorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const InvestorCard = styled(Card)`
  padding: 25px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const InvestorLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const InvestorName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const InvestorRole = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 15px;
`;

/* ================== Stats Section ================== */
const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 60px;
`;

const StatCard = styled(Card)`
  padding: 30px;
  width: 220px;
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray};
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

/* ================== Fake Data ================== */
const investors = [
  { name: "Global Ventures", role: "Lead Investor", logo: "https://via.placeholder.com/80" },
  { name: "Luxury Capital", role: "Strategic Partner", logo: "https://via.placeholder.com/80" },
  { name: "Travel Partners", role: "Co-Investor", logo: "https://via.placeholder.com/80" },
  { name: "Elite Funds", role: "Angel Investor", logo: "https://via.placeholder.com/80" },
];

const stats = [
  { number: "50+", label: "Properties" },
  { number: "120k+", label: "Happy Customers" },
  { number: "20+", label: "Countries" },
  { number: "$30M+", label: "Funding Raised" },
];

/* ================== Page Component ================== */
export default function Investors() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Our Investors"
        text="Meet the visionary investors supporting LuxuryStay's global expansion."
        bg="https://images.unsplash.com/photo-1523952578875-e11b2c1f1a16"
      />

      {/* Investor Cards */}
      <Section>
        <SectionTitle>Our Partners</SectionTitle>
        <SectionText>We are proud to collaborate with leading investors and strategic partners worldwide.</SectionText>
        <InvestorsGrid>
          {investors.map((inv, idx) => (
            <InvestorCard key={idx}>
              <InvestorLogo src={inv.logo} alt={inv.name} />
              <InvestorName>{inv.name}</InvestorName>
              <InvestorRole>{inv.role}</InvestorRole>
            </InvestorCard>
          ))}
        </InvestorsGrid>
      </Section>

      {/* Stats Section */}
      <Section bg>
        <SectionTitle>Our Achievements</SectionTitle>
        <StatsWrapper>
          {stats.map((stat, idx) => (
            <StatCard key={idx}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsWrapper>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Interested in Investing?</h2>
        <p>Reach out to explore partnership opportunities with LuxuryStay.</p>
        <CTAButton>Contact Us</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
