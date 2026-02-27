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

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 20px;
`;

const ReviewCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GuestName = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #0d6efd;
`;

const Rating = styled.div`
  color: #ffc107;
  font-size: 16px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #888;
`;

const Pagination = styled.div`
  margin-top: 20px;
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
const ReviewsPage = () => {
  const allReviews = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    guest: ["Alice","Bob","Charlie","David","Eva"][i%5],
    rating: Math.floor(Math.random()*5)+1,
    text: ["Great stay!","Very clean rooms","Excellent service!","Would visit again","Amazing experience"][i%5],
    date: `2026-02-${(i%28)+1}`
  }));

  const [reviews, setReviews] = useState(allReviews);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(()=>{
    let filtered = allReviews;
    if(search) filtered = filtered.filter(r=>r.guest.toLowerCase().includes(search.toLowerCase()));
    if(ratingFilter) filtered = filtered.filter(r=>r.rating===parseInt(ratingFilter));
    setReviews(filtered);
    setCurrentPage(1);
  }, [search,ratingFilter]);

  const indexOfLast = currentPage*itemsPerPage;
  const indexOfFirst = indexOfLast-itemsPerPage;
  const currentItems = reviews.slice(indexOfFirst,indexOfLast);
  const totalPages = Math.ceil(reviews.length/itemsPerPage);

  const renderStars = (n)=>{
    let stars = "";
    for(let i=0;i<n;i++) stars+="⭐";
    return stars;
  };

  return (
    <Wrapper>
      <Title>Guest Reviews</Title>

      <FilterSection>
        <Input type="text" placeholder="Search guest..." value={search} onChange={e=>setSearch(e.target.value)} />
        <Select value={ratingFilter} onChange={e=>setRatingFilter(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </Select>
      </FilterSection>

      <ReviewGrid>
        {currentItems.map(r=>(
          <ReviewCard key={r.id}>
            <GuestName>{r.guest}</GuestName>
            <Rating>{renderStars(r.rating)}</Rating>
            <ReviewText>{r.text}</ReviewText>
            <DateText>{r.date}</DateText>
          </ReviewCard>
        ))}
      </ReviewGrid>

      <Pagination>
        {Array.from({ length: totalPages },(_,i)=>(
          <PageBtn key={i+1} active={currentPage===i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default ReviewsPage;