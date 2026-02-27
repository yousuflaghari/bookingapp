import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Button } from "../../../components/Button";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const hoverCard = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.03);}
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
  margin-bottom: 40px;
  animation: ${fadeInUp} 1s ease forwards;
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
`;

const RoomCard = styled.div`
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

const RoomImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  padding: 15px;
`;

const RoomName = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 8px;
`;

const RoomPrice = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 8px;
`;

const RoomDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 12px;
`;

const BookButton = styled(Button)`
  padding: 10px 25px;
  font-size: 14px;
  width: 100%;
`;

/* ================== Page Component ================== */
export default function HotelRooms() {
  const rooms = [
    { name: "Standard Room", price: "$150/night", desc: "Comfortable room with city view", image: "/images/room1.jpg" },
    { name: "Deluxe Room", price: "$220/night", desc: "Spacious deluxe room with balcony", image: "/images/room2.jpg" },
    { name: "Suite", price: "$350/night", desc: "Luxury suite with separate living area", image: "/images/room3.jpg" },
    { name: "Family Room", price: "$280/night", desc: "Large family room with 2 beds", image: "/images/room4.jpg" },
    { name: "Executive Suite", price: "$400/night", desc: "Premium suite for business travelers", image: "/images/room5.jpg" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Container>
          <Title>Available Rooms</Title>

          <RoomsGrid>
            {rooms.map((room, i) => (
              <RoomCard key={i}>
                <RoomImage src={room.image} alt={room.name} />
                <RoomContent>
                  <RoomName>{room.name}</RoomName>
                  <RoomPrice>{room.price}</RoomPrice>
                  <RoomDescription>{room.desc}</RoomDescription>
                  <BookButton>Book Now</BookButton>
                </RoomContent>
              </RoomCard>
            ))}
          </RoomsGrid>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
