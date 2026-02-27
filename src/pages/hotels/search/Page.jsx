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
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease forwards;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 14px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const FiltersSidebar = styled.div`
  min-width: 220px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FilterTitle = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 8px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input``;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
  flex: 1;
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
export default function HotelsSearch() {
  const [filters, setFilters] = useState({
    Luxury: true,
    Budget: false,
    Family: false,
    Deals: false,
  });

  const hotels = [
    { name: "Grand Palace", location: "Berlin, Germany", price: "$250/night", image: "/images/hotel1.jpg", type: "Luxury" },
    { name: "City Inn", location: "Munich, Germany", price: "$180/night", image: "/images/hotel2.jpg", type: "Budget" },
    { name: "Family Stay", location: "Frankfurt, Germany", price: "$220/night", image: "/images/hotel4.jpg", type: "Family" },
    { name: "Luxury Suites", location: "Hamburg, Germany", price: "$400/night", image: "/images/hotel3.jpg", type: "Luxury" },
    { name: "Budget Lodge", location: "Cologne, Germany", price: "$90/night", image: "/images/hotel5.jpg", type: "Budget" },
  ];

  const handleCheckboxChange = (type) => {
    setFilters({ ...filters, [type]: !filters[type] });
  };

  const filteredHotels = hotels.filter((hotel) => filters[hotel.type]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Search Hotels</Title>

        <SearchWrapper>
          <Input type="text" placeholder="Search city or hotel..." />
          <Input type="date" placeholder="Check-in" />
          <Input type="date" placeholder="Check-out" />
          <Input type="number" placeholder="Guests" />
          <Button>Search</Button>
        </SearchWrapper>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <FiltersSidebar>
            <FilterTitle>Filters</FilterTitle>
            {Object.keys(filters).map((key) => (
              <CheckboxWrapper key={key}>
                <Checkbox
                  type="checkbox"
                  checked={filters[key]}
                  onChange={() => handleCheckboxChange(key)}
                />
                <span>{key}</span>
              </CheckboxWrapper>
            ))}
          </FiltersSidebar>

          <HotelsGrid>
            {filteredHotels.map((hotel, i) => (
              <HotelCard key={i}>
                <HotelImage src={hotel.image} alt={hotel.name} />
                <HotelContent>
                  <HotelName>{hotel.name}</HotelName>
                  <HotelLocation>{hotel.location}</HotelLocation>
                  <HotelPrice>{hotel.price}</HotelPrice>
                </HotelContent>
              </HotelCard>
            ))}
          </HotelsGrid>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
