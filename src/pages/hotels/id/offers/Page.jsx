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

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 20px;
`;

const OfferCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OfferTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #0d6efd;
`;

const OfferType = styled.span`
  font-size: 14px;
  color: #555;
`;

const OfferDiscount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #198754;
`;

const OfferDates = styled.span`
  font-size: 14px;
  color: #555;
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
const OffersPage = () => {
  const allOffers = Array.from({ length: 50 }, (_, i) => ({
    id: i+1,
    name: ["Summer Sale","Winter Special","Last-Minute Deal","Weekend Offer"][i%4]+" "+(i+1),
    type: ["Seasonal","Last-Minute","Special"][i%3],
    discount: (Math.floor(Math.random()*50)+10) + "%",
    startDate: "2026-02-01",
    endDate: "2026-02-28"
  }));

  const [offers, setOffers] = useState(allOffers);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(()=>{
    let filtered = allOffers;
    if(search) filtered = filtered.filter(o => o.name.toLowerCase().includes(search.toLowerCase()));
    if(category) filtered = filtered.filter(o => o.type === category);
    setOffers(filtered);
    setCurrentPage(1);
  },[search, category]);

  const indexOfLast = currentPage*itemsPerPage;
  const indexOfFirst = indexOfLast-itemsPerPage;
  const currentItems = offers.slice(indexOfFirst,indexOfLast);
  const totalPages = Math.ceil(offers.length/itemsPerPage);

  return (
    <Wrapper>
      <Title>Hotel Offers</Title>
      <FilterSection>
        <Input type="text" placeholder="Search offers..." value={search} onChange={e=>setSearch(e.target.value)} />
        <Select value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">All Types</option>
          <option value="Seasonal">Seasonal</option>
          <option value="Last-Minute">Last-Minute</option>
          <option value="Special">Special</option>
        </Select>
      </FilterSection>

      <OfferGrid>
        {currentItems.map(o=>(
          <OfferCard key={o.id}>
            <OfferTitle>{o.name}</OfferTitle>
            <OfferType>Type: {o.type}</OfferType>
            <OfferDiscount>Discount: {o.discount}</OfferDiscount>
            <OfferDates>Valid: {o.startDate} - {o.endDate}</OfferDates>
            <Btn>Book Now</Btn>
          </OfferCard>
        ))}
      </OfferGrid>

      <Pagination>
        {Array.from({ length: totalPages },(_,i)=>(
          <PageBtn key={i+1} active={currentPage===i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default OffersPage;