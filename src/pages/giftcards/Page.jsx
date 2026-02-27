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

/* ================== Gift Cards Grid ================== */
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const GiftCard = styled(Card)`
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

const CardPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const BuyButton = styled(Button)`
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

/* ================== Fake Gift Cards Data ================== */
const giftCards = [
  { title: "Luxury Stay $100", description: "Gift a luxury stay worth $100.", price: "$100", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "Luxury Stay $250", description: "Gift a luxury stay worth $250.", price: "$250", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Luxury Stay $500", description: "Gift a luxury stay worth $500.", price: "$500", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { title: "Couples Retreat $300", description: "Gift a romantic getaway worth $300.", price: "$300", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { title: "Family Fun $400", description: "Gift a family experience worth $400.", price: "$400", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { title: "Business Travel $350", description: "Gift a corporate stay worth $350.", price: "$350", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function GiftCards() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Gift Cards"
        text="Give the gift of luxury stays and experiences to your loved ones."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Gift Cards Grid Section */}
      <Section>
        <SectionTitle>Available Gift Cards</SectionTitle>
        <SectionText>Choose from a variety of gift cards for luxury stays, romantic getaways, family vacations, and more.</SectionText>
        <CardsGrid>
          {giftCards.map((card, idx) => (
            <GiftCard key={idx}>
              <CardImage src={card.image} alt={card.title} />
              <CardInfo>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardPrice>{card.price}</CardPrice>
                <BuyButton>Buy Now</BuyButton>
              </CardInfo>
            </GiftCard>
          ))}
        </CardsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Gift Luxury Today</h2>
        <p>Purchase a gift card and let your loved ones enjoy unforgettable luxury experiences.</p>
        <CTAButton>Buy Gift Card</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
