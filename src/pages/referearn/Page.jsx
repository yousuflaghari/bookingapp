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

/* ================== Referral Cards Grid ================== */
const ReferralGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ReferralCard = styled(Card)`
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

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const CardReward = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ShareButton = styled(Button)`
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

/* ================== Fake Referral Data ================== */
const referrals = [
  { title: "Refer a Friend $50", description: "Invite friends and earn $50 for each successful booking.", reward: "$50", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "Refer 5 Friends $300", description: "Invite 5 friends and earn $300 bonus rewards.", reward: "$300", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Holiday Referral Bonus", description: "Special seasonal bonus when referring friends for holidays.", reward: "$100", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { title: "Weekend Referral Reward", description: "Earn rewards when friends book weekend stays.", reward: "$75", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { title: "Luxury Getaway Referral", description: "Refer a friend for luxury stay and earn big rewards.", reward: "$200", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { title: "Family Trip Referral", description: "Refer friends for family trips and earn $150.", reward: "$150", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function ReferEarn() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Refer & Earn"
        text="Invite your friends and earn amazing rewards on their bookings."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Referral Grid Section */}
      <Section>
        <SectionTitle>Referral Programs</SectionTitle>
        <SectionText>Check out our referral offers and start earning rewards today.</SectionText>
        <ReferralGrid>
          {referrals.map((ref, idx) => (
            <ReferralCard key={idx}>
              <CardImage src={ref.image} alt={ref.title} />
              <CardInfo>
                <CardTitle>{ref.title}</CardTitle>
                <CardDescription>{ref.description}</CardDescription>
                <CardReward>{ref.reward}</CardReward>
                <ShareButton>Share Now</ShareButton>
              </CardInfo>
            </ReferralCard>
          ))}
        </ReferralGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Start Referring Today</h2>
        <p>Invite friends and family and enjoy exclusive rewards for every successful referral.</p>
        <CTAButton>Refer Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
