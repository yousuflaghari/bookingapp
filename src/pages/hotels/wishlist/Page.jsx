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

const pulse = keyframes`
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

const WishlistGrid = styled.div`
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
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    animation: ${pulse} 0.6s ease infinite;
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

const RemoveButton = styled(Button)`
  background: red;
  color: white;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

/* ================== Page Component ================== */
export default function HotelsWishlist() {
  const [wishlist, setWishlist] = useState([
    { name: "Grand Palace", location: "Berlin, Germany", price: "$250/night", image: "/images/hotel1.jpg" },
    { name: "City Inn", location: "Munich, Germany", price: "$180/night", image: "/images/hotel2.jpg" },
    { name: "Luxury Suites", location: "Hamburg, Germany", price: "$400/night", image: "/images/hotel3.jpg" },
  ]);

  const removeHotel = (index) => {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    setWishlist(newWishlist);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>My Wishlist</Title>

        {wishlist.length === 0 ? (
          <p>Your wishlist is empty 😢</p>
        ) : (
          <WishlistGrid>
            {wishlist.map((hotel, i) => (
              <HotelCard key={i}>
                <HotelImage src={hotel.image} alt={hotel.name} />
                <HotelContent>
                  <HotelName>{hotel.name}</HotelName>
                  <HotelLocation>{hotel.location}</HotelLocation>
                  <HotelPrice>{hotel.price}</HotelPrice>
                  <RemoveButton onClick={() => removeHotel(i)}>Remove</RemoveButton>
                </HotelContent>
              </HotelCard>
            ))}
          </WishlistGrid>
        )}
      </Section>

      <Footer />
    </div>
  );
}
