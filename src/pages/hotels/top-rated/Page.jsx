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
export default function HotelsTopRated() {
  const topRatedHotels = [
    { name: "Grand Palace", location: "Berlin, Germany", price: "$250/night", rating: 4.9, image: "/images/hotel1.jpg" },
    { name: "Luxury Suites", location: "Hamburg, Germany", price: "$400/night", rating: 4.8, image: "/images/hotel3.jpg" },
    { name: "Skyline Hotel", location: "Berlin, Germany", price: "$270/night", rating: 4.7, image: "/images/hotel6.jpg" },
    { name: "Urban Retreat", location: "Munich, Germany", price: "$190/night", rating: 4.6, image: "/images/hotel7.jpg" },
    { name: "City Inn", location: "Munich, Germany", price: "$180/night", rating: 4.5, image: "/images/hotel2.jpg" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Top Rated Hotels</Title>

        <HotelsGrid>
          {topRatedHotels.map((hotel, i) => (
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
