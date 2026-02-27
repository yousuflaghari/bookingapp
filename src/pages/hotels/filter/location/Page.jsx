import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { FaMapMarkerAlt, FaDirections, FaBus, FaTrain } from "react-icons/fa";

/* ================== Animations ================== */
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const hoverCard = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.02);}
  100% { transform: scale(1);}
`;

/* ================== Layout ================== */
const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 20px;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    animation: ${hoverCard} 0.6s ease infinite;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

/* ================== Page Component ================== */
export default function HotelLocation() {
  const info = [
    { icon: <FaMapMarkerAlt />, title: "Address", text: "123 Luxury St, Berlin, Germany" },
    { icon: <FaDirections />, title: "Directions", text: "5 mins from Berlin Central Station" },
    { icon: <FaBus />, title: "Bus Stop", text: "Nearby bus stop 200m" },
    { icon: <FaTrain />, title: "Train Station", text: "Central Station 1 km" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Container>
          <Title>Hotel Location</Title>

          <MapWrapper>
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.7414381827727!2d13.37865481592186!3d52.51862397981374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e49e0a7dbf%3A0x5a56e5b9ffdc8c!2sBerlin%20Central%20Station!5e0!3m2!1sen!2sde!4v1618300000000!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </MapWrapper>

          <InfoGrid>
            {info.map((i, idx) => (
              <InfoCard key={idx}>
                <IconWrapper>{i.icon}</IconWrapper>
                <InfoTitle>{i.title}</InfoTitle>
                <InfoText>{i.text}</InfoText>
              </InfoCard>
            ))}
          </InfoGrid>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
