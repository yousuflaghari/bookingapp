import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 1;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const DealGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 20px;
`;

const DealCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const DealImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const DealContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HotelName = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #0d6efd;
`;

const Location = styled.span`
  font-size: 14px;
  color: #555;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #198754;
`;

const Discount = styled.span`
  font-size: 14px;
  color: #dc3545;
  font-weight: bold;
`;

const Rating = styled.span`
  font-size: 14px;
  color: #ffc107;
`;

const Btn = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background: #0d6efd;
  margin-top: 8px;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
`;

const Pagination = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const PageBtn = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #0d6efd;
  background: ${(props) => (props.active ? "#0d6efd" : "white")};
  color: ${(props) => (props.active ? "white" : "#0d6efd")};
  cursor: pointer;

  &:hover {
    background: #0d6efd;
    color: white;
  }
`;

/* ===========================
   Component
=========================== */
const Deals = () => {
  // Dummy deals data
  const allDeals = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    hotelName: `Hotel ${i + 1}`,
    location: ["Paris", "London", "Berlin", "Dubai", "New York"][i % 5],
    price: Math.floor(Math.random() * 500) + 50,
    discount: Math.floor(Math.random() * 50) + 5,
    rating: (Math.random() * 5).toFixed(1),
    image: `https://picsum.photos/300/180?random=${i + 1}`,
    category: ["Luxury", "Budget", "Family", "Business"][i % 4],
  }));

  const [deals, setDeals] = useState(allDeals);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 12;

  useEffect(() => {
    let filtered = allDeals;

    if (search) {
      filtered = filtered.filter((d) =>
        d.hotelName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((d) => d.category === category);
    }

    if (ratingFilter) {
      filtered = filtered.filter((d) => Math.floor(d.rating) === parseInt(ratingFilter));
    }

    setDeals(filtered);
    setCurrentPage(1);
  }, [search, category, ratingFilter]);

  // Pagination logic
  const indexOfLastDeal = currentPage * dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
  const currentDeals = deals.slice(indexOfFirstDeal, indexOfLastDeal);
  const totalPages = Math.ceil(deals.length / dealsPerPage);

  return (
    <Wrapper>
      <Title>Hotel Deals</Title>

      <FilterSection>
        <Input
          type="text"
          placeholder="Search hotels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Luxury">Luxury</option>
          <option value="Budget">Budget</option>
          <option value="Family">Family</option>
          <option value="Business">Business</option>
        </Select>
        <Select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </Select>
      </FilterSection>

      <DealGrid>
        {currentDeals.map((d) => (
          <DealCard key={d.id}>
            <DealImage src={d.image} alt={d.hotelName} />
            <DealContent>
              <HotelName>{d.hotelName}</HotelName>
              <Location>{d.location}</Location>
              <Price>${d.price}</Price>
              <Discount>{d.discount}% OFF</Discount>
              <Rating>Rating: {d.rating}⭐</Rating>
              <Btn>Book Now</Btn>
            </DealContent>
          </DealCard>
        ))}
      </DealGrid>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default Deals;