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

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 20px;
`;

const RoomCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RoomName = styled.h3`
  margin: 0;
  color: #0d6efd;
  font-size: 18px;
`;

const RoomInfo = styled.span`
  font-size: 14px;
  color: #555;
`;

const RoomPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #198754;
`;

const AmenitiesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 5px 0;
`;

const Amenity = styled.li`
  font-size: 13px;
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
const RoomsPage = () => {
  const allRooms = Array.from({ length: 50 }, (_, i) => ({
    id: i+1,
    name: ["Deluxe Room","Standard Room","Suite","Family Room"][i%4]+" "+(i+1),
    type: ["Deluxe","Standard","Suite","Family"][i%4],
    price: (Math.floor(Math.random()*400)+50),
    capacity: [1,2,3,4][i%4],
    amenities: ["Wi-Fi","TV","Air Conditioning","Mini Bar","Breakfast Included"].slice(0,(i%5)+1),
    image: `https://picsum.photos/300/180?random=${i+500}`
  }));

  const [rooms, setRooms] = useState(allRooms);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(()=>{
    let filtered = allRooms;
    if(search) filtered = filtered.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));
    if(typeFilter) filtered = filtered.filter(r => r.type === typeFilter);
    setRooms(filtered);
    setCurrentPage(1);
  },[search,typeFilter]);

  const indexOfLast = currentPage*itemsPerPage;
  const indexOfFirst = indexOfLast-itemsPerPage;
  const currentItems = rooms.slice(indexOfFirst,indexOfLast);
  const totalPages = Math.ceil(rooms.length/itemsPerPage);

  return (
    <Wrapper>
      <Title>Hotel Rooms</Title>

      <FilterSection>
        <Input type="text" placeholder="Search rooms..." value={search} onChange={e=>setSearch(e.target.value)} />
        <Select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Standard">Standard</option>
          <option value="Suite">Suite</option>
          <option value="Family">Family</option>
        </Select>
      </FilterSection>

      <RoomGrid>
        {currentItems.map(r=>(
          <RoomCard key={r.id}>
            <RoomImage src={r.image} alt={r.name}/>
            <RoomContent>
              <RoomName>{r.name}</RoomName>
              <RoomInfo>Type: {r.type}</RoomInfo>
              <RoomInfo>Capacity: {r.capacity} {r.capacity>1?"guests":"guest"}</RoomInfo>
              <RoomPrice>${r.price}/night</RoomPrice>
              <AmenitiesList>
                {r.amenities.map((a,idx)=><Amenity key={idx}>{a}</Amenity>)}
              </AmenitiesList>
              <Btn>Book Now</Btn>
            </RoomContent>
          </RoomCard>
        ))}
      </RoomGrid>

      <Pagination>
        {Array.from({ length: totalPages },(_,i)=>(
          <PageBtn key={i+1} active={currentPage===i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</PageBtn>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default RoomsPage;