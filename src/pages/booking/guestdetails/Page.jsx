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
  max-width: 700px;
  border-radius: 16px;
  padding: 35px 30px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  color: #222;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
`;

const GuestCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Select = styled.select`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  color: white;
  background: ${(props) =>
    props.variant === "secondary" ? "#6c757d" : "#0d6efd"};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

/* ===========================
   Component
=========================== */
const GuestDetails = () => {
  const navigate = useNavigate();
  const [guests, setGuests] = useState([
    { name: "", email: "", phone: "", age: "", gender: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newGuests = [...guests];
    newGuests[index][field] = value;
    setGuests(newGuests);
  };

  const addGuest = () => {
    setGuests([...guests, { name: "", email: "", phone: "", age: "", gender: "" }]);
  };

  const removeGuest = (index) => {
    const newGuests = guests.filter((_, i) => i !== index);
    setGuests(newGuests);
  };

  const handleContinue = () => {
    // validate required fields
    for (let i = 0; i < guests.length; i++) {
      if (!guests[i].name || !guests[i].email || !guests[i].phone) {
        alert("Please fill all required fields for each guest");
        return;
      }
    }

    // Save guest details to context / store if needed
    console.log("Guest details:", guests);

    navigate("/booking/add-ons"); // next step
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Guest Details</Title>
        <Subtitle>Please enter details for all guests</Subtitle>

        {guests.map((guest, idx) => (
          <GuestCard key={idx}>
            <Row>
              <Input
                placeholder="Full Name"
                value={guest.name}
                onChange={(e) => handleChange(idx, "name", e.target.value)}
              />
              <Input
                placeholder="Email"
                type="email"
                value={guest.email}
                onChange={(e) => handleChange(idx, "email", e.target.value)}
              />
            </Row>

            <Row>
              <Input
                placeholder="Phone"
                type="tel"
                value={guest.phone}
                onChange={(e) => handleChange(idx, "phone", e.target.value)}
              />
              <Input
                placeholder="Age"
                type="number"
                value={guest.age}
                onChange={(e) => handleChange(idx, "age", e.target.value)}
              />
              <Select
                value={guest.gender}
                onChange={(e) => handleChange(idx, "gender", e.target.value)}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </Row>

            {guests.length > 1 && (
              <BtnGroup>
                <Button variant="secondary" onClick={() => removeGuest(idx)}>
                  Remove Guest
                </Button>
              </BtnGroup>
            )}
          </GuestCard>
        ))}

        <BtnGroup>
          <Button variant="secondary" onClick={addGuest}>
            Add Another Guest
          </Button>
          <Button onClick={handleContinue}>Continue</Button>
        </BtnGroup>
      </Card>
    </PageWrapper>
  );
};

export default GuestDetails;