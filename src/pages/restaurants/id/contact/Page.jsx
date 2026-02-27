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

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 600px;
`;

const Row = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.div`
  font-weight: bold;
  color: #555;
  margin-bottom: 4px;
`;

const Value = styled.div`
  color: #222;
`;

const Button = styled.button`
  margin-top: 15px;
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

/* ===========================
   Component
=========================== */

const ContactPage = () => {
  const [contact] = useState({
    phone: "+92 300 1234567",
    email: "info@restaurant.com",
    address: "Main Boulevard, Lahore, Pakistan",
    hours: "Mon - Sun: 12 PM - 11 PM",
    facebook: "facebook.com/restaurant",
    instagram: "instagram.com/restaurant",
  });

  return (
    <Container>
      <Title>Restaurant Contact</Title>

      <Card>
        <Row>
          <Label>Phone</Label>
          <Value>{contact.phone}</Value>
        </Row>

        <Row>
          <Label>Email</Label>
          <Value>{contact.email}</Value>
        </Row>

        <Row>
          <Label>Address</Label>
          <Value>{contact.address}</Value>
        </Row>

        <Row>
          <Label>Opening Hours</Label>
          <Value>{contact.hours}</Value>
        </Row>

        <Row>
          <Label>Facebook</Label>
          <Value>{contact.facebook}</Value>
        </Row>

        <Row>
          <Label>Instagram</Label>
          <Value>{contact.instagram}</Value>
        </Row>

        <Button>Edit Contact</Button>
      </Card>
    </Container>
  );
};

export default ContactPage;