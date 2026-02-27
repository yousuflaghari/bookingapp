import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

/* ================== Sections ================== */
const Section = styled.section`
  padding: 80px 20px;
  background: ${({ bg, theme }) => (bg ? theme.colors.light : theme.colors.white)};
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 40px;
`;

/* ================== Press Articles ================== */
const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ArticleCard = styled(Card)`
  padding: 25px;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: 15px;
`;

const ArticleTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const ArticleExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 15px;
`;

const ReadMoreButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 12px 24px;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

/* ================== CTA ================== */
const CTAWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 20px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 60px 0;
`;

const CTAButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  padding: 14px 28px;
  margin-top: 20px;
`;

/* ================== Footer ================== */
const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 20px;
`;

const FooterText = styled.p`
  opacity: 0.8;
  text-align: center;
`;

/* ================== Fake Press Data ================== */
const pressArticles = [
  {
    title: "LuxuryStay named Top Travel Platform 2026",
    excerpt: "LuxuryStay has been recognized for its premium travel booking services worldwide.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Luxury Travel Made Simple",
    excerpt: "How LuxuryStay is redefining luxury travel for modern explorers.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  },
  {
    title: "Exclusive Interview with CEO Ali Khan",
    excerpt: "Insights into the vision behind LuxuryStay and future expansion plans.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    title: "Top 10 Luxury Stays in Europe",
    excerpt: "LuxuryStay featured in a major travel magazine highlighting top hotels.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

/* ================== Page Component ================== */
export default function Press() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="In the Press"
        text="See what the world is saying about LuxuryStay."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

      {/* Press Articles */}
      <Section>
        <SectionTitle>Featured Articles</SectionTitle>
        <SectionText>LuxuryStay has been featured in leading travel and lifestyle publications.</SectionText>
        <ArticlesGrid>
          {pressArticles.map((article, idx) => (
            <ArticleCard key={idx}>
              <ArticleImage src={article.image} alt={article.title} />
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ReadMoreButton>Read More</ReadMoreButton>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Want to Get Featured?</h2>
        <p>Reach out to our press team to collaborate or request media coverage.</p>
        <CTAButton>Contact Press</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
