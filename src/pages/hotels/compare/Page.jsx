import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const CardHover = keyframes`
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
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease forwards;
`;

const CompareGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const HotelCard = styled.div`
  flex: 1 1 300px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    animation: ${CardHover} 0.6s ease infinite;
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

const HotelAmenities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`;

const Amenity = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 4px;
`;

/* ================== Page Component ================== */
export default function HotelsCompare() {
  const hotels = [
    {
      name: "Grand Palace",
      location: "Berlin, Germany",
      price: "$250/night",
      image: "/images/hotel1.jpg",
      amenities: ["Pool", "Free Wi-Fi", "Spa", "Restaurant"],
    },
    {
      name: "City Inn",
      location: "Munich, Germany",
      price: "$180/night",
      image: "/images/hotel2.jpg",
      amenities: ["Free Wi-Fi", "Gym", "Parking"],
    },
    {
      name: "Luxury Suites",
      location: "Hamburg, Germany",
      price: "$400/night",
      image: "/images/hotel3.jpg",
      amenities: ["Pool", "Spa", "Bar", "Restaurant", "Gym"],
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Compare Hotels</Title>

        <CompareGrid>
          {hotels.map((hotel, i) => (
            <HotelCard key={i}>
              <HotelImage src={hotel.image} alt={hotel.name} />
              <HotelContent>
                <HotelName>{hotel.name}</HotelName>
                <HotelLocation>{hotel.location}</HotelLocation>
                <HotelPrice>{hotel.price}</HotelPrice>
                <HotelAmenities>
                  {hotel.amenities.map((amenity, idx) => (
                    <Amenity key={idx}>• {amenity}</Amenity>
                  ))}
                </HotelAmenities>
              </HotelContent>
            </HotelCard>
          ))}
        </CompareGrid>
      </Section>

      <Footer />
    </div>
  );
}
