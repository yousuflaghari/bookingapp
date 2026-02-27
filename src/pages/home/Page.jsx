import React from "react";
import styled from "styled-components";
import Hero from "../../components/Hero";
import { CardGrid } from "../../components/CardGrid";
import { Button } from "../../components/Button";
import {Card} from "../../components/Card";
import bgImage from "../../images/background.jpg";
import hotel1 from "../../images/hotel1.jpg"
import hotel2 from "../../images/hotel2.jpg"
import hotel3 from "../../images/hotel3.jpg"
import hotel4 from "../../images/hotel4.jpg"
import restaurant1 from "../../images/restaurant1.jpg"
import restaurant2 from "../../images/restaurant2.jpg"
import restaurant3 from "../../images/restaurant3.jpg"
import restaurant4 from "../../images/restaurant4.jpg"

/* ================== Extra Components ================== */
const Section = styled.section`
  padding: 80px 20px;
  background: ${({ bg, theme }) => (bg ? theme.colors.light : theme.colors.white)};
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 40px;
`;

const SectionText = styled.p`
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 40px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const InfoCard = styled(Card)`
  text-align: center;
  padding: 30px;
`;

const InfoIcon = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

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
const featuredHotels = [
  { name: "Royal Grand Hotel", city: "Paris", image: hotel1 } ,
  { name: "Luxury Stay Dubai", city: "Dubai", image: hotel2 },
  { name: "Grand Palace", city: "Rome", image: hotel3 },
  { name: "Beachside Resort", city: "Maldives", image: hotel4},
];

const featuredRestaurants = [
  { name: "Saffron Lounge", city: "Paris", image: restaurant1 },
  { name: "Golden Spoon", city: "Dubai", image: restaurant2},
  { name: "The Gourmet", city: "Rome", image: restaurant3},
  { name: "Seafood Delight", city: "Maldives", image: restaurant4 },
];

const infoData = [
  { icon: "🛎️", title: "24/7 Support", text: "Our team is available 24/7 to assist you with bookings." },
  { icon: "🏨", title: "Luxury Stays", text: "Curated premium hotels and resorts for your comfort." },
  { icon: "🍽️", title: "Fine Dining", text: "Explore the best restaurants in every city you visit." },
  { icon: "💳", title: "Secure Payments", text: "All payments are secured and encrypted for your safety." },
];

/* ================== Page Component ================== */

const Home = () => {
  return (
    <div>
   
     

     
      <Hero
        title="Welcome to LuxuryStay"
        text="Book the finest hotels and restaurants with a single click. Your luxury travel companion."
        bg={bgImage}
      />

      {/* Featured Hotels */}
      <Section>
        <SectionTitle>Featured Hotels</SectionTitle>
        <SectionText>Experience the best luxury stays around the world.</SectionText>
        <CardGrid>
          {featuredHotels.map((hotel, idx) => (
            <Card key={idx}>
              <img src={hotel.image} alt={hotel.name} style={{ borderRadius: "10px", width: "100%" , height: "250px"}} />
              <h3 style={{ marginTop: "15px", color: "#0a0a0a" }}>{hotel.name}</h3>
              <p style={{ color: "#666" }}>{hotel.city}</p>
              <Button>Book Now</Button>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section bg>
        <SectionTitle>Top Restaurants</SectionTitle>
        <SectionText>Fine dining experiences to delight your senses.</SectionText>
        <CardGrid>
          {featuredRestaurants.map((rest, idx) => (
            <Card key={idx}>
              <img src={rest.image} alt={rest.name} style={{ borderRadius: "10px", width: "100%" , height: "250px"}} />
              <h3 style={{ marginTop: "15px", color: "#0a0a0a" }}>{rest.name}</h3>
              <p style={{ color: "#666" }}>{rest.city}</p>
              <Button>Reserve Table</Button>
            </Card>
          ))}
        </CardGrid>
      </Section>

      {/* Info Section */}
      <Section>
        <SectionTitle>Why Choose Us</SectionTitle>
        <InfoGrid>
          {infoData.map((info, idx) => (
            <InfoCard key={idx}>
              <InfoIcon>{info.icon}</InfoIcon>
              <h3>{info.title}</h3>
              <p>{info.text}</p>
            </InfoCard>
          ))}
        </InfoGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Ready to Experience Luxury?</h2>
        <p>Book your next trip with LuxuryStay and enjoy premium services worldwide.</p>
        <CTAButton>Start Booking</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
export default Home;