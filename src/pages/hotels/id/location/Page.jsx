import React from "react";
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

const InfoCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #0d6efd;
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 12px;
`;

const LandmarkList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
`;

const LandmarkItem = styled.li`
  margin-bottom: 8px;
`;

const LocationPage = () => {
  const hotel = {
    name: "Hotel Paradise",
    address: "123 Main Street",
    city: "Paris",
    country: "France",
    mapUrl: "https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed",
    landmarks: ["Eiffel Tower - 2 km", "Louvre Museum - 3 km", "Notre-Dame Cathedral - 2.5 km"]
  };

  return (
    <Wrapper>
      <Title>Hotel Location</Title>

      <InfoCard>
        <p><Label>Hotel Name:</Label> {hotel.name}</p>
        <p><Label>Address:</Label> {hotel.address}</p>
        <p><Label>City:</Label> {hotel.city}</p>
        <p><Label>Country:</Label> {hotel.country}</p>
      </InfoCard>

      <Map src={hotel.mapUrl} />

      <InfoCard>
        <Label>Nearby Landmarks:</Label>
        <LandmarkList>
          {hotel.landmarks.map((l, i) => <LandmarkItem key={i}>{l}</LandmarkItem>)}
        </LandmarkList>
      </InfoCard>
    </Wrapper>
  );
};

export default LocationPage;