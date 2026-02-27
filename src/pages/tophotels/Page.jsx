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

/* ================== Hotels Grid ================== */
const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const HotelCard = styled(Card)`
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

const HotelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HotelInfo = styled.div`
  padding: 20px;
`;

const HotelName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const HotelDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const PriceTag = styled.p`
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

/* ================== Fake Top Hotels Data ================== */
const topHotels = [
  { name: "The Ritz Paris", description: "Luxury and elegance in the heart of Paris.", price: "$1200/night", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { name: "Burj Al Arab", description: "Iconic hotel in Dubai with opulent suites.", price: "$1500/night", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { name: "The Plaza, New York", description: "Historic luxury hotel in Manhattan.", price: "$1300/night", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { name: "The Langham, London", description: "Classic British elegance and luxury.", price: "$1100/night", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { name: "Park Hyatt Tokyo", description: "Modern luxury and panoramic city views.", price: "$1400/night", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { name: "Hotel de Crillon, Paris", description: "Historic palace turned luxury hotel.", price: "$1250/night", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function TopHotels() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Top Luxury Hotels"
        text="Discover the finest hotels around the world for your ultimate stay."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Hotels Grid Section */}
      <Section>
        <SectionTitle>Explore Top Hotels</SectionTitle>
        <SectionText>From iconic landmarks to modern luxury, find your perfect hotel.</SectionText>
        <HotelsGrid>
          {topHotels.map((hotel, idx) => (
            <HotelCard key={idx}>
              <HotelImage src={hotel.image} alt={hotel.name} />
              <HotelInfo>
                <HotelName>{hotel.name}</HotelName>
                <HotelDescription>{hotel.description}</HotelDescription>
                <PriceTag>{hotel.price}</PriceTag>
                <BookButton>Book Now</BookButton>
              </HotelInfo>
            </HotelCard>
          ))}
        </HotelsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Book Your Luxury Stay</h2>
        <p>Secure your reservation at top hotels worldwide for an unforgettable experience.</p>
        <CTAButton>Reserve Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
