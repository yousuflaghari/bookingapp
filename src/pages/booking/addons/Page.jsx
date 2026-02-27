import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #222;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AddOnCard = styled.div`
  background: white;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const Info = styled.div``;

const Name = styled.h4`
  margin-bottom: 5px;
`;

const Desc = styled.p`
  font-size: 13px;
  color: #777;
`;

const Price = styled.div`
  font-weight: bold;
  color: #0d6efd;
  margin-top: 5px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Btn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: #0d6efd;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;

const Qty = styled.div`
  min-width: 25px;
  text-align: center;
  font-weight: 600;
`;

const SummaryBox = styled.div`
  background: white;
  border-radius: 14px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  height: fit-content;
`;

const SummaryTitle = styled.h3`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`;

const ContinueBtn = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background: #0d6efd;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #0b5ed7;
  }
`;

/* ===========================
   Component
=========================== */

const addOnsData = [
  {
    id: 1,
    name: "Breakfast Included",
    desc: "Start your day with a delicious breakfast",
    price: 20,
  },
  {
    id: 2,
    name: "Airport Pickup",
    desc: "Comfortable airport transfer service",
    price: 40,
  },
  {
    id: 3,
    name: "Extra Bed",
    desc: "Additional bed for extra guest",
    price: 30,
  },
  {
    id: 4,
    name: "Late Checkout",
    desc: "Stay longer with flexible checkout time",
    price: 25,
  },
  {
    id: 5,
    name: "Travel Insurance",
    desc: "Secure your trip with insurance coverage",
    price: 15,
  },
];

const BookingAddOns = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState(
    addOnsData.map((item) => ({ ...item, qty: 0 }))
  );

  const changeQty = (id, type) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty =
            type === "inc"
              ? item.qty + 1
              : item.qty > 0
              ? item.qty - 1
              : 0;

          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleContinue = () => {
    navigate("/booking/payment");
  };

  return (
    <PageWrapper>
      <Container>
        <Title>Select Add-Ons</Title>
        <Subtitle>
          Enhance your stay with additional services
        </Subtitle>

        <Grid>
          {/* LEFT */}
          <div>
            {items.map((item) => (
              <AddOnCard key={item.id}>
                <Info>
                  <Name>{item.name}</Name>
                  <Desc>{item.desc}</Desc>
                  <Price>${item.price}</Price>
                </Info>

                <Controls>
                  <Btn onClick={() => changeQty(item.id, "dec")}>
                    -
                  </Btn>
                  <Qty>{item.qty}</Qty>
                  <Btn onClick={() => changeQty(item.id, "inc")}>
                    +
                  </Btn>
                </Controls>
              </AddOnCard>
            ))}
          </div>

          {/* RIGHT SUMMARY */}
          <SummaryBox>
            <SummaryTitle>Booking Summary</SummaryTitle>

            {items
              .filter((i) => i.qty > 0)
              .map((item) => (
                <Row key={item.id}>
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>${item.qty * item.price}</span>
                </Row>
              ))}

            <hr />

            <Total>
              <span>Total</span>
              <span>${total}</span>
            </Total>

            <ContinueBtn onClick={handleContinue}>
              Continue to Payment →
            </ContinueBtn>
          </SummaryBox>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default BookingAddOns;