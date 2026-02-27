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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #0d6efd;
`;

const CardType = styled.span`
  font-size: 14px;
  color: #555;
`;

const CardDistance = styled.span`
  font-size: 14px;
  color: #198754;
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
const NearbyPage = () => {
  const allNearby = Array.from({ length: 50 }, (_, i) => ({
    id: i+1,
    name: ["Eiffel Tower","Louvre Museum","Notre-Dame","Central Park","London Eye"][i%5]+" "+(i+1),
    type: ["Attraction","Restaurant","Transport"][i%3],
    distance: (Math.random()*5).toFixed(1) + " km"
  }));

  const [nearby, setNearby] = useState(allNearby);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(()=>{
    let filtered = allNearby;
    if(search) filtered = filtered.filter(n => n.name.toLowerCase().includes(search.toLowerCase()));
    if(category) filtered = filtered.filter(n => n.type === category);
    setNearby(filtered);
    setCurrentPage(1);
  },[search, category]);

  const indexOfLast = currentPage*itemsPerPage;
  const indexOfFirst = indexOfLast-itemsPerPage;
  const currentItems = nearby.slice(indexOfFirst,indexOfLast);
  const totalPages = Math.ceil(nearby.length/itemsPerPage);

  return (
    <Wrapper>
      <Title>Nearby Places</Title>
      <FilterSection>
        <Input type="text" placeholder="Search nearby..." value={search} onChange={e=>setSearch(e.target.value)} />
        <Select value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Attraction">Attraction</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Transport">Transport</option>
        </Select>
      </FilterSection>

      <CardGrid>
        {currentItems.map(n=>(
          <Card key={n.id}>
            <CardTitle>{n.name}</CardTitle>
            <CardType>Type: {n.type}</CardType>
            <CardDistance>Distance: {n.distance}</CardDistance>
          </Card>
        ))}
      </CardGrid>

      <Pagination>
        {Array.from({ length: totalPages },(_,i)=>(
          <PageBtn key={i+1} active={currentPage===i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default NearbyPage;