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
  max-width: 800px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
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

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
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

const LocationPage = () => {
  const [location] = useState({
    address: "Main Food Street, Lahore, Pakistan",
    lat: "31.5204",
    lng: "74.3587",
    mapUrl:
      "https://maps.google.com/maps?q=31.5204,74.3587&z=15&output=embed",
  });

  return (
    <Container>
      <Title>Restaurant Location</Title>

      <Card>
        <Row>
          <Label>Address</Label>
          <Value>{location.address}</Value>
        </Row>

        <Row>
          <Label>Latitude</Label>
          <Value>{location.lat}</Value>
        </Row>

        <Row>
          <Label>Longitude</Label>
          <Value>{location.lng}</Value>
        </Row>

        <Map src={location.mapUrl} loading="lazy" />

        <Button>Edit Location</Button>
      </Card>
    </Container>
  );
};

export default LocationPage;