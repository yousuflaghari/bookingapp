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

/* ================== Restaurants Grid ================== */
const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const RestaurantCard = styled(Card)`
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

const RestaurantImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RestaurantInfo = styled.div`
  padding: 20px;
`;

const RestaurantName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const RestaurantDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  margin-bottom: 15px;
`;

const CuisineTag = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  margin-bottom: 15px;
`;

const ReserveButton = styled(Button)`
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

/* ================== Fake Top Restaurants Data ================== */
const topRestaurants = [
  { name: "Le Meurice", description: "Michelin-starred French cuisine in Paris.", cuisine: "French", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { name: "Nobu Dubai", description: "Luxury Japanese fusion in Dubai.", cuisine: "Japanese Fusion", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  { name: "Per Se", description: "Exquisite fine dining in New York City.", cuisine: "American Fine Dining", image: "https://images.unsplash.com/photo-1526779259212-8d1c50b62b32" },
  { name: "Gordon Ramsay London", description: "Award-winning British cuisine.", cuisine: "British", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { name: "Osteria Francescana", description: "World-famous Italian gourmet experience.", cuisine: "Italian", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  { name: "Aragawa Tokyo", description: "Premium Wagyu dining experience.", cuisine: "Japanese", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" }
];

/* ================== Page Component ================== */
export default function TopRestaurants() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Top Luxury Restaurants"
        text="Indulge in fine dining experiences across the world's most luxurious cities."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Restaurants Grid Section */}
      <Section>
        <SectionTitle>Explore Top Restaurants</SectionTitle>
        <SectionText>Experience exquisite cuisine and premium dining at top restaurants worldwide.</SectionText>
        <RestaurantsGrid>
          {topRestaurants.map((restaurant, idx) => (
            <RestaurantCard key={idx}>
              <RestaurantImage src={restaurant.image} alt={restaurant.name} />
              <RestaurantInfo>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantDescription>{restaurant.description}</RestaurantDescription>
                <CuisineTag>Cuisine: {restaurant.cuisine}</CuisineTag>
                <ReserveButton>Reserve Now</ReserveButton>
              </RestaurantInfo>
            </RestaurantCard>
          ))}
        </RestaurantsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Book a Table Today</h2>
        <p>Reserve your spot at the finest restaurants for an unforgettable gourmet experience.</p>
        <CTAButton>Reserve Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
