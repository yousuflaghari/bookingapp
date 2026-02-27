import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const hoverZoom = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.05);}
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

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
`;

const HotelCard = styled.div`
  flex: 0 0 300px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  scroll-snap-align: start;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    animation: ${hoverZoom} 0.6s ease infinite;
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

/* ================== Page Component ================== */
export default function HotelsTrending() {
  const trendingHotels = [
    { name: "Grand Palace", location: "Berlin, Germany", price: "$250/night", image: "/images/hotel1.jpg" },
    { name: "City Inn", location: "Munich, Germany", price: "$180/night", image: "/images/hotel2.jpg" },
    { name: "Luxury Suites", location: "Hamburg, Germany", price: "$400/night", image: "/images/hotel3.jpg" },
    { name: "Family Stay", location: "Frankfurt, Germany", price: "$220/night", image: "/images/hotel4.jpg" },
    { name: "Budget Lodge", location: "Cologne, Germany", price: "$90/night", image: "/images/hotel5.jpg" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Trending Hotels</Title>

        <CarouselContainer>
          {trendingHotels.map((hotel, i) => (
            <HotelCard key={i}>
              <HotelImage src={hotel.image} alt={hotel.name} />
              <HotelContent>
                <HotelName>{hotel.name}</HotelName>
                <HotelLocation>{hotel.location}</HotelLocation>
                <HotelPrice>{hotel.price}</HotelPrice>
              </HotelContent>
            </HotelCard>
          ))}
        </CarouselContainer>
      </Section>

      <Footer />
    </div>
  );
}
