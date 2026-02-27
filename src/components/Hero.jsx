
import styled from "styled-components";
import { Button } from "./Button";
const HeroSection = styled.section`
  background: url(${({ bg }) => bg}) center/cover no-repeat;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 120px 20px;
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
 const Hero = ({ title, text, bg }) => {
  return (
    <HeroSection bg={bg}>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{text}</HeroText>
      <Button>Explore</Button>
    </HeroSection>
  );
};
export default Hero;