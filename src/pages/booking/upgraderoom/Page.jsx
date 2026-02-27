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
const upgradeOptions = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Upgrade to Deluxe Room with Ocean View & Breakfast",
    price: 150,
  },
  {
    id: "suite",
    name: "Suite",
    description: "Upgrade to Suite with 2 Bedrooms & Premium Amenities",
    price: 250,
  },
];

const UpgradeRoom = ({ currentRoom, onNext }) => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selected) {
      alert("Please select an upgrade option or cancel");
      return;
    }
    console.log("Upgraded Room Selected:", selected);
    if (onNext) onNext(selected);
    else navigate("/booking/summary"); // fallback
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Upgrade Your Room</Title>

        <RoomCard selected>
          <RoomInfo>
            <RoomName>Current Room: {currentRoom?.name || "Standard Room"}</RoomName>
            <RoomDesc>{currentRoom?.description || "1 King Bed • Free Wi-Fi • 25 sqm"}</RoomDesc>
          </RoomInfo>
          <RoomPrice>${currentRoom?.price || 100}</RoomPrice>
        </RoomCard>

        {upgradeOptions.map((room) => (
          <RoomCard
            key={room.id}
            selected={selected?.id === room.id}
            onClick={() => setSelected(room)}
          >
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDesc>{room.description}</RoomDesc>
            </RoomInfo>
            <RoomPrice>${room.price}</RoomPrice>
          </RoomCard>
        ))}

        <Btn onClick={handleContinue}>Confirm Upgrade</Btn>
      </Card>
    </PageWrapper>
  );
};

export default UpgradeRoom;