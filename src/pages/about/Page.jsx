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
  max-width: 1300px;
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
  font-weight: 700;
`;

const Nav = styled.div`
  display: flex;
  gap: 25px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${colors.dark};
  font-weight: 500;
  cursor: pointer;

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
    url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4");
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  padding: 120px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 46px;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  max-width: 650px;
  margin: auto;
  opacity: 0.9;
`;

/* ================= About Section ================= */

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
  align-items: center;
`;

const AboutImage = styled.div`
  height: 350px;
  border-radius: 14px;
  background: url("https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3")
    center/cover;
`;

const AboutContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: ${colors.gray};
  line-height: 1.7;
  margin-bottom: 15px;
`;

/* ================= Stats ================= */

const StatsSection = styled.section`
  background: ${colors.light};
  padding: 80px 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const StatCard = styled.div`
  background: ${colors.white};
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
`;

const StatNumber = styled.h3`
  font-size: 32px;
  color: ${colors.primary};
`;

const StatLabel = styled.p`
  margin-top: 10px;
  color: ${colors.gray};
`;

/* ================= Team ================= */

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const TeamCard = styled.div`
  background: ${colors.white};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  text-align: center;
`;

const TeamImage = styled.div`
  height: 220px;
  background: url("https://images.unsplash.com/photo-1527980965255-d3b416303d12")
    center/cover;
`;

const TeamBody = styled.div`
  padding: 20px;
`;

const TeamName = styled.h4`
  margin-bottom: 5px;
`;

const TeamRole = styled.p`
  color: ${colors.gray};
  font-size: 14px;
`;

/* ================= CTA ================= */

const CTA = styled.section`
  background: ${colors.primary};
  color: ${colors.white};
  padding: 80px 20px;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 30px;
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

export default function About() {
  return (
    <PageWrapper>

    

    
      <Container>

        <AboutGrid>
          <AboutImage />

          <AboutContent>
            <SectionTitle>Who We Are</SectionTitle>

            <Text>
              LuxuryStay is a modern booking platform designed for travelers
              who value comfort, elegance, and premium experiences.
            </Text>

            <Text>
              Our mission is to connect users with the finest hotels and
              restaurants worldwide, ensuring seamless booking and excellent
              service quality.
            </Text>

            <Button>Explore Hotels</Button>
          </AboutContent>
        </AboutGrid>

      </Container>

      <StatsSection>
        <Container>

          <StatsGrid>

            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Luxury Hotels</StatLabel>
            </StatCard>

            <StatCard>
              <StatNumber>200+</StatNumber>
              <StatLabel>Restaurants</StatLabel>
            </StatCard>

            <StatCard>
              <StatNumber>50K+</StatNumber>
              <StatLabel>Happy Customers</StatLabel>
            </StatCard>

            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support</StatLabel>
            </StatCard>

          </StatsGrid>

        </Container>
      </StatsSection>

      <Container>

        <SectionTitle>Meet Our Team</SectionTitle>

        <TeamGrid>

          {["Ali", "Ahmed", "Sara", "Zara"].map((name, i) => (
            <TeamCard key={i}>
              <TeamImage />
              <TeamBody>
                <TeamName>{name}</TeamName>
                <TeamRole>Luxury Specialist</TeamRole>
              </TeamBody>
            </TeamCard>
          ))}

        </TeamGrid>

      </Container>

      <CTA>
        <CTATitle>Start Booking Your Dream Experience</CTATitle>
        <Button>Get Started</Button>
      </CTA>

      <Footer>
        <FooterText>© 2026 LuxuryStay — All Rights Reserved</FooterText>
      </Footer>

    </PageWrapper>
  );
}
