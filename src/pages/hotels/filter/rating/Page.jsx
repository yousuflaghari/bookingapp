import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* Styled Components */
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

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 20px;
`;

const HotelCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover { transform: scale(1.02); }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const HotelContent = styled.div`
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
  &:hover { opacity: 0.9; }
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
  &:hover { background: #0d6efd; color: white; }
`;

/* Component */
const RatingHotels = () => {
  const allHotels = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    hotelName: `Hotel ${i + 1}`,
    location: ["Paris", "London", "Berlin", "Dubai", "New York"][i % 5],
    price: Math.floor(Math.random() * 500) + 50,
    rating: (Math.random() * 5).toFixed(1),
    image: `https://picsum.photos/300/180?random=${i + 300}`,
    type: ["Luxury", "Budget", "Family", "Business"][i % 4],
  }));

  const [hotels, setHotels] = useState(allHotels);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 12;

  useEffect(() => {
    let filtered = allHotels;
    if (search) filtered = filtered.filter(h => h.hotelName.toLowerCase().includes(search.toLowerCase()));
    if (typeFilter) filtered = filtered.filter(h => h.type === typeFilter);
    filtered.sort((a,b) => b.rating - a.rating);
    setHotels(filtered);
    setCurrentPage(1);
  }, [search, typeFilter]);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  return (
    <Wrapper>
      <Title>Hotels by Rating</Title>
      <FilterSection>
        <Input type="text" placeholder="Search hotels..." value={search} onChange={e => setSearch(e.target.value)} />
        <Select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Luxury">Luxury</option>
          <option value="Budget">Budget</option>
          <option value="Family">Family</option>
          <option value="Business">Business</option>
        </Select>
      </FilterSection>

      <HotelGrid>
        {currentHotels.map(h => (
          <HotelCard key={h.id}>
            <HotelImage src={h.image} alt={h.hotelName} />
            <HotelContent>
              <HotelName>{h.hotelName}</HotelName>
              <Location>{h.location}</Location>
              <Price>${h.price}</Price>
              <Rating>Rating: {h.rating}⭐</Rating>
              <Btn>View Hotel</Btn>
            </HotelContent>
          </HotelCard>
        ))}
      </HotelGrid>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn key={i+1} active={currentPage===i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default RatingHotels;