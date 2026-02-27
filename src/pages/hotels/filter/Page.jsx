import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
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

const FiltersWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const FilterPanel = styled.div`
  min-width: 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
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
export default function HotelsFilter() {
  const [filters, setFilters] = useState({
    Luxury: true,
    Budget: true,
    Family: false,
    Deals: false,
    "5 Star": true,
    "4 Star": true,
    "3 Star": false,
  });

  const hotels = [
    { name: "Grand Palace", location: "Berlin, Germany", price: "$250/night", image: "/images/hotel1.jpg", type: "Luxury", stars: "5 Star", deals: true },
    { name: "City Inn", location: "Munich, Germany", price: "$180/night", image: "/images/hotel2.jpg", type: "Budget", stars: "4 Star", deals: false },
    { name: "Family Stay", location: "Frankfurt, Germany", price: "$220/night", image: "/images/hotel4.jpg", type: "Family", stars: "4 Star", deals: true },
    { name: "Luxury Suites", location: "Hamburg, Germany", price: "$400/night", image: "/images/hotel3.jpg", type: "Luxury", stars: "5 Star", deals: true },
    { name: "Budget Lodge", location: "Cologne, Germany", price: "$90/night", image: "/images/hotel5.jpg", type: "Budget", stars: "3 Star", deals: false },
  ];

  const handleCheckboxChange = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  const filteredHotels = hotels.filter((hotel) => {
    return (
      filters[hotel.type] &&
      filters[hotel.stars] &&
      (filters.Deals ? hotel.deals : true)
    );
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Hotel Filters</Title>

        <FiltersWrapper>
          <FilterPanel>
            <FilterTitle>Type</FilterTitle>
            {["Luxury","Budget","Family"].map((type) => (
              <CheckboxWrapper key={type}>
                <Checkbox type="checkbox" checked={filters[type]} onChange={() => handleCheckboxChange(type)} />
                <span>{type}</span>
              </CheckboxWrapper>
            ))}
          </FilterPanel>

          <FilterPanel>
            <FilterTitle>Stars</FilterTitle>
            {["5 Star","4 Star","3 Star"].map((star) => (
              <CheckboxWrapper key={star}>
                <Checkbox type="checkbox" checked={filters[star]} onChange={() => handleCheckboxChange(star)} />
                <span>{star}</span>
              </CheckboxWrapper>
            ))}
          </FilterPanel>

          <FilterPanel>
            <FilterTitle>Deals</FilterTitle>
            <CheckboxWrapper>
              <Checkbox type="checkbox" checked={filters.Deals} onChange={() => handleCheckboxChange("Deals")} />
              <span>Only with deals</span>
            </CheckboxWrapper>
          </FilterPanel>
        </FiltersWrapper>

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
      </Section>

      <Footer />
    </div>
  );
}
