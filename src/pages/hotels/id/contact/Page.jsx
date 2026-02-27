import React from "react";
import styled from "styled-components";

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

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact Hotel</Title>
      <InfoCard>
        <p><Label>Phone:</Label> +1 234 567 890</p>
        <p><Label>Email:</Label> contact@hotel.com</p>
        <p><Label>Address:</Label> 123 Main Street, City, Country</p>
      </InfoCard>
      <Map src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </Wrapper>
  );
};

export default Contact;