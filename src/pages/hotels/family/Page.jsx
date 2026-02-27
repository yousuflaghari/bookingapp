import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const hoverCard = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.04);}
  100% { transform: scale(1);}
`;

/* ================== Sections ================== */
const Section = styled.section`
  padding: 120px 20px;
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  animation: ${fadeInUp} 1s ease forwards;
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
`;

const HotelCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    animation: ${hoverCard} 0.6s ease infinite;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HotelContent = styled.div`
  padding: 15px;
`;

const HotelName = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 8px;
`;

const HotelLocation = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 8px;
`;

const HotelPrice = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const HotelRating = styled.p`
  font-size: 14px;
  color: gold;
  font-weight: 600;
`;

/* ================== Page Component ================== */
export default function HotelsFamily() {
  const familyHotels = [
    { name: "Family Comfort Inn", location: "Berlin, Germany", price: "$220/night", rating: 4.5, image: "/images/hotel14.jpg" },
    { name: "Happy Stay Suites", location: "Munich, Germany", price: "$250/night", rating: 4.6, image: "/images/hotel15.jpg" },
    { name: "City Family Lodge", location: "Hamburg, Germany", price: "$210/night", rating: 4.4, image: "/images/hotel16.jpg" },
    { name: "Urban Family Retreat", location: "Cologne, Germany", price: "$230/night", rating: 4.5, image: "/images/hotel17.jpg" },
    { name: "Comfort Family Hotel", location: "Frankfurt, Germany", price: "$200/night", rating: 4.3, image: "/images/hotel18.jpg" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Family-Friendly Hotels</Title>

        <HotelsGrid>
          {familyHotels.map((hotel, i) => (
            <HotelCard key={i}>
              <HotelImage src={hotel.image} alt={hotel.name} />
              <HotelContent>
                <HotelName>{hotel.name}</HotelName>
                <HotelLocation>{hotel.location}</HotelLocation>
                <HotelPrice>{hotel.price}</HotelPrice>
                <HotelRating>⭐ {hotel.rating}</HotelRating>
              </HotelContent>
            </HotelCard>
          ))}
        </HotelsGrid>
      </Section>

      <Footer />
    </div>
  );
}
