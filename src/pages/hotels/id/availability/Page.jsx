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
  overflow: hidden;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const RoomContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RoomName = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #0d6efd;
`;

const RoomType = styled.span`
  font-size: 14px;
  color: #555;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #198754;
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
const HotelAvailability = () => {
  // Dummy rooms data
  const allRooms = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    roomName: `Room ${i + 1}`,
    type: ["Single","Double","Suite","Family"][i%4],
    price: Math.floor(Math.random()*400)+50,
    available: Math.random() > 0.3,
  }));

  const [rooms, setRooms] = useState(allRooms);
  const [roomType, setRoomType] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 12;

  useEffect(()=>{
    let filtered = allRooms.filter(r=>r.available);
    if(roomType) filtered = filtered.filter(r=>r.type===roomType);
    setRooms(filtered);
    setCurrentPage(1);
  },[roomType, checkIn, checkOut]);

  const indexOfLastRoom = currentPage*roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom-roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom,indexOfLastRoom);
  const totalPages = Math.ceil(rooms.length/roomsPerPage);

  return (
    <Wrapper>
      <Title>Check Availability</Title>
      <FilterSection>
        <Input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} placeholder="Check-in"/>
        <Input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} placeholder="Check-out"/>
        <Select value={roomType} onChange={e=>setRoomType(e.target.value)}>
          <option value="">All Room Types</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Family">Family</option>
        </Select>
      </FilterSection>

      <RoomGrid>
        {currentRooms.map(r=>(
          <RoomCard key={r.id}>
            <RoomContent>
              <RoomName>{r.roomName}</RoomName>
              <RoomType>Type: {r.type}</RoomType>
              <Price>${r.price}</Price>
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

export default HotelAvailability;