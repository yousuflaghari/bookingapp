import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #222;
`;

const AddBtn = styled.button`
  margin-bottom: 15px;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: #0d6efd;

  &:hover {
    opacity: 0.85;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 15px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: relative;
`;

const Discount = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #28a745;
`;

const Label = styled.div`
  font-weight: bold;
  margin-top: 8px;
  color: #555;
`;

const Value = styled.div`
  color: #222;
`;

const Status = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${(props) => (props.active ? "#28a745" : "#dc3545")};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
`;

const BtnGroup = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.bg || "#0d6efd"};

  &:hover {
    opacity: 0.85;
  }
`;

/* ===========================
   Component
=========================== */

const OfferPage = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Weekend Deal",
      discount: "20% OFF",
      validTill: "2026-03-01",
      active: true,
    },
    {
      id: 2,
      title: "Family Combo",
      discount: "Rs 500 OFF",
      validTill: "2026-02-20",
      active: false,
    },
  ]);

  const deleteOffer = (id) => {
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <Container>
      <Title>Restaurant Offers</Title>

      <AddBtn>Add Offer</AddBtn>

      <Grid>
        {offers.map((offer) => (
          <Card key={offer.id}>
            <Status active={offer.active}>
              {offer.active ? "Active" : "Expired"}
            </Status>

            <Discount>{offer.discount}</Discount>

            <Label>Title</Label>
            <Value>{offer.title}</Value>

            <Label>Valid Till</Label>
            <Value>{offer.validTill}</Value>

            <BtnGroup>
              <Button bg="#28a745">Edit</Button>
              <Button bg="#dc3545" onClick={() => deleteOffer(offer.id)}>
                Delete
              </Button>
            </BtnGroup>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default OfferPage;