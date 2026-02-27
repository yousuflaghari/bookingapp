import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

/* ===========================
   Animations
=========================== */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px);}
  to { opacity: 1; transform: translateY(0);}
`;

/* ===========================
   Styled Components
=========================== */
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 25px;
  color: #222;
`;

const RoomCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.selected ? "#e6f0ff" : "white")};

  &:hover {
    background: #f8f9fa;
  }
`;

const RoomInfo = styled.div`
  flex: 2;
`;

const RoomName = styled.h4`
  margin-bottom: 5px;
`;

const RoomDesc = styled.p`
  font-size: 13px;
  color: #555;
`;

const RoomPrice = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
  min-width: 100px;
`;

const Btn = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background: #0d6efd;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

/* ===========================
   Component
=========================== */
const rooms = [
  {
    id: "room1",
    name: "Standard Room",
    description: "1 King Bed • Free Wi-Fi • 25 sqm",
    price: 100,
  },
  {
    id: "room2",
    name: "Deluxe Room",
    description: "1 King Bed • Ocean View • 35 sqm • Breakfast Included",
    price: 150,
  },
  {
    id: "room3",
    name: "Suite",
    description: "2 Bedrooms • Living Area • Premium Amenities • 50 sqm",
    price: 250,
  },
];

const SelectRoom = ({ onNext }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRoom) {
      alert("Please select a room to continue");
      return;
    }
    // send selected room to parent/store
    console.log("Selected Room:", selectedRoom);
    if (onNext) onNext(selectedRoom);
    else navigate("/booking/add-ons"); // fallback navigation
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Select Your Room</Title>

        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            selected={selectedRoom?.id === room.id}
            onClick={() => setSelectedRoom(room)}
          >
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDesc>{room.description}</RoomDesc>
            </RoomInfo>
            <RoomPrice>${room.price}</RoomPrice>
          </RoomCard>
        ))}

        <Btn onClick={handleContinue}>Continue</Btn>
      </Card>
    </PageWrapper>
  );
};

export default SelectRoom;