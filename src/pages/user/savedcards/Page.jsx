import React, { useState } from "react";
import styled from "styled-components";

// ====================== Styled Components ======================

const Container = styled.div`
  padding: 30px;
  min-height: 100vh;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const CardBox = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 15px;
`;

const PaymentCard = styled.div`
  background: linear-gradient(135deg,#007bff,#6610f2);
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  position: relative;
`;

const CardNumber = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  margin: 15px 0;
`;

const Small = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #28a745;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  background: ${props => props.secondary ? "#ccc" : "#007bff"};
  color: ${props => props.secondary ? "#000" : "#fff"};

  &:hover {
    opacity: 0.9;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const FormRow = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

// ====================== Component ======================

const SavedCards = () => {

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "John Doe",
      number: "**** **** **** 4242",
      expiry: "12/26",
      default: true
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    default: false
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });

  };

  const addCard = () => {

    const newCard = {
      id: Date.now(),
      name: form.name,
      number: "**** **** **** " + form.number.slice(-4),
      expiry: form.expiry,
      default: form.default
    };

    let updatedCards = [...cards];

    if (form.default) {
      updatedCards = updatedCards.map(c => ({
        ...c,
        default: false
      }));
    }

    setCards([newCard, ...updatedCards]);

    setForm({
      name: "",
      number: "",
      expiry: "",
      cvv: "",
      address: "",
      city: "",
      country: "",
      zip: "",
      default: false
    });

  };

  const deleteCard = (id) => {
    setCards(cards.filter(c => c.id !== id));
  };

  const setDefault = (id) => {

    setCards(cards.map(c => ({
      ...c,
      default: c.id === id
    })));

  };

  return (
    <Container>

      <Title>Saved Cards</Title>

      {/* ================= Card List ================= */}

      <CardBox>

        <SectionTitle>Your Cards</SectionTitle>

        <CardGrid>

          {cards.map(card => (
            <div key={card.id}>

              <PaymentCard>

                {card.default && (
                  <Badge>Default</Badge>
                )}

                <Small>Card Holder</Small>
                <div>{card.name}</div>

                <CardNumber>{card.number}</CardNumber>

                <Row>
                  <div>
                    <Small>Expiry</Small>
                    <div>{card.expiry}</div>
                  </div>
                </Row>

              </PaymentCard>

              <div style={{ marginTop: 10 }}>
                <Button
                  onClick={() => setDefault(card.id)}
                >
                  Set Default
                </Button>

                <Button
                  secondary
                  onClick={() => deleteCard(card.id)}
                  style={{ marginLeft: 10 }}
                >
                  Delete
                </Button>
              </div>

            </div>
          ))}

        </CardGrid>

      </CardBox>


      {/* ================= Add Card ================= */}

      <CardBox>

        <SectionTitle>Add New Card</SectionTitle>

        <Field>
          <Label>Name on Card</Label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Field>

        <Field>
          <Label>Card Number</Label>
          <Input
            name="number"
            value={form.number}
            onChange={handleChange}
          />
        </Field>

        <FormRow>

          <Field>
            <Label>Expiry</Label>
            <Input
              placeholder="MM/YY"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>CVV</Label>
            <Input
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
            />
          </Field>

        </FormRow>

        <SectionTitle>Billing Address</SectionTitle>

        <Field>
          <Label>Address</Label>
          <Input
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </Field>

        <FormRow>

          <Field>
            <Label>City</Label>
            <Input
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Country</Label>
            <Input
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>ZIP</Label>
            <Input
              name="zip"
              value={form.zip}
              onChange={handleChange}
            />
          </Field>

        </FormRow>

        <Field>
          <label>
            <Checkbox
              type="checkbox"
              name="default"
              checked={form.default}
              onChange={handleChange}
            />
            Set as default card
          </label>
        </Field>

        <Button onClick={addCard}>
          Add Card
        </Button>

      </CardBox>

    </Container>
  );
};

export default SavedCards;