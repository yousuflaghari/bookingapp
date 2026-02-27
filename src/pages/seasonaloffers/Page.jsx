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

/* ================== Seasonal Offers Grid ================== */
const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const OfferCard = styled(Card)`
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

const OfferImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const OfferInfo = styled.div`
  padding: 20px;
`;

const OfferTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const OfferDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const OfferPrice = styled.p`
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

/* ================== Fake Seasonal Offers Data ================== */
const seasonalOffers = [
  { title: "Winter Special", description: "Enjoy winter stays with 40% off.", price: "$180/night", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "Spring Blossom", description: "30% off spring destinations.", price: "$200/night", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Summer Adventure", description: "Special summer discounts for families.", price: "$220/night", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { title: "Autumn Escape", description: "30% off autumn stays in cozy locations.", price: "$210/night", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { title: "Holiday Specials", description: "Festive season deals for luxury stays.", price: "$250/night", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { title: "Weekend Offers", description: "Exclusive weekend deals for couples.", price: "$200/night", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function SeasonalOffers() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Seasonal Offers"
        text="Discover our seasonal promotions and enjoy special discounts."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Offers Grid Section */}
      <Section>
        <SectionTitle>Explore Seasonal Offers</SectionTitle>
        <SectionText>Take advantage of exclusive deals and discounts for every season.</SectionText>
        <OffersGrid>
          {seasonalOffers.map((offer, idx) => (
            <OfferCard key={idx}>
              <OfferImage src={offer.image} alt={offer.title} />
              <OfferInfo>
                <OfferTitle>{offer.title}</OfferTitle>
                <OfferDescription>{offer.description}</OfferDescription>
                <OfferPrice>{offer.price}</OfferPrice>
                <BookButton>Book Now</BookButton>
              </OfferInfo>
            </OfferCard>
          ))}
        </OffersGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Grab Your Seasonal Offer Today</h2>
        <p>Book now and enjoy luxury stays with our exclusive seasonal deals.</p>
        <CTAButton>Reserve Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
