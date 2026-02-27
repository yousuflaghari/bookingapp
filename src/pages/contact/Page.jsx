import React from "react";
import styled from "styled-components";

const colors = {
  primary: "rgb(10,100,245)",
  white: "#ffffff",
  light: "#f4f7ff",
  dark: "#0a0a0a",
  gray: "#666",
};

/* ================= Layout ================= */

const PageWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  background: ${colors.white};
  color: ${colors.dark};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 60px 20px;
`;

/* ================= Header ================= */

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${colors.white};
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const Logo = styled.h2`
  color: ${colors.primary};
`;

const Nav = styled.div`
  display: flex;
  gap: 25px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${colors.dark};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: ${colors.primary};
  }
`;

const Button = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

/* ================= Hero ================= */

const Hero = styled.section`
  background: linear-gradient(
      rgba(10,100,245,0.85),
      rgba(10,100,245,0.85)
    ),
    url("https://images.unsplash.com/photo-1521791136064-7986c2920216");
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  padding: 120px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  max-width: 600px;
  margin: auto;
  opacity: 0.9;
`;

/* ================= Contact Section ================= */

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
`;

const ContactInfo = styled.div``;

const InfoCard = styled.div`
  background: ${colors.light};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const InfoTitle = styled.h4`
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  color: ${colors.gray};
`;

/* ================= Form ================= */

const FormWrapper = styled.div`
  background: ${colors.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  min-height: 120px;
`;

/* ================= Map ================= */

const Map = styled.div`
  margin-top: 50px;
  height: 350px;
  border-radius: 12px;
  background: url("https://images.unsplash.com/photo-1502920917128-1aa500764ce7")
    center/cover;
`;

/* ================= CTA ================= */

const CTA = styled.section`
  background: ${colors.primary};
  color: ${colors.white};
  padding: 80px 20px;
  text-align: center;
`;

const CTATitle = styled.h2`
  margin-bottom: 20px;
`;

/* ================= Footer ================= */

const Footer = styled.footer`
  background: #0d1b3d;
  color: ${colors.white};
  padding: 40px 20px;
  text-align: center;
`;

const FooterText = styled.p`
  opacity: 0.8;
`;

/* ================= Page ================= */

export default function Contact() {
  return (
    <PageWrapper>

      <Header>
        <Logo>LuxuryStay</Logo>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Hotels</NavItem>
          <NavItem>Restaurants</NavItem>
          <NavItem>About</NavItem>
        </Nav>
        <Button>Login</Button>
      </Header>

      <Hero>
        <HeroTitle>Contact Our Team</HeroTitle>
        <HeroText>
          We are here to help you with bookings, support, and any inquiries.
        </HeroText>
      </Hero>

      <Container>

        <ContactGrid>

          <ContactInfo>

            <InfoCard>
              <InfoTitle>📍 Address</InfoTitle>
              <InfoText>Karachi, Pakistan</InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>📞 Phone</InfoTitle>
              <InfoText>+92 300 0000000</InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>📧 Email</InfoTitle>
              <InfoText>support@luxurystay.com</InfoText>
            </InfoCard>

          </ContactInfo>

          <FormWrapper>

            <FormGroup>
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="Enter your email" />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea placeholder="Write your message..." />
            </FormGroup>

            <Button>Send Message</Button>

          </FormWrapper>

        </ContactGrid>

        <Map />

      </Container>

      <CTA>
        <CTATitle>Need Immediate Help?</CTATitle>
        <Button>Call Support</Button>
      </CTA>

      <Footer>
        <FooterText>© 2026 LuxuryStay — All Rights Reserved</FooterText>
      </Footer>

    </PageWrapper>
  );
}
