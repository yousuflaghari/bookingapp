import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaWifi, FaSwimmer, FaSpa, FaDumbbell, FaParking, FaUtensils } from "react-icons/fa";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const hoverCard = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.02);}
  100% { transform: scale(1);}
`;

/* ================== Layout ================== */
const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 20px;
`;

const AmenityCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 25px;
  border-radius: ${({ theme }) => theme.radius.lg};
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    animation: ${hoverCard} 0.6s ease infinite;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

const AmenityName = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
`;

/* ================== Page Component ================== */
export default function HotelAmenities() {
  const amenities = [
    { icon: <FaWifi />, name: "Free WiFi" },
    { icon: <FaSwimmer />, name: "Swimming Pool" },
    { icon: <FaSpa />, name: "Spa" },
    { icon: <FaDumbbell />, name: "Gym" },
    { icon: <FaParking />, name: "Parking" },
    { icon: <FaUtensils />, name: "Restaurant" },
    { icon: <FaSpa />, name: "Massage Services" },
    { icon: <FaDumbbell />, name: "Yoga Studio" },
    { icon: <FaWifi />, name: "Business Center" },
    { icon: <FaUtensils />, name: "Cafe & Lounge" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Container>
          <Title>Hotel Amenities</Title>

          <AmenitiesGrid>
            {amenities.map((a, i) => (
              <AmenityCard key={i}>
                <IconWrapper>{a.icon}</IconWrapper>
                <AmenityName>{a.name}</AmenityName>
              </AmenityCard>
            ))}
          </AmenitiesGrid>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
