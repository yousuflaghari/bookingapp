import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import  Hero from "../../components/Hero";
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

/* ================== Blog Grid ================== */
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BlogCard = styled(Card)`
  padding: 25px;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: 15px;
`;

const BlogTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
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

/* ================== Fake Blog Data ================== */
const blogs = [
  { title: "Top 10 Luxury Hotels in Europe", excerpt: "Explore the most luxurious hotels in Europe with our detailed guide.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "5 Tips for a Perfect Romantic Getaway", excerpt: "Plan the ultimate romantic vacation with these expert tips.", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
  { title: "Luxury Travel Trends 2026", excerpt: "Discover the upcoming trends in luxury travel and hospitality.", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "How to Maximize Rewards with LuxuryStay", excerpt: "Learn how to use our rewards program to enhance your travel experience.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
];

/* ================== Page Component ================== */
export const Blog = () => {
  return (
    <div>
     
      <Header />

     
      <Hero
        title="Our Blog"
        text="Stay updated with travel tips, luxury guides, and more."
        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />

     
      <Section>
        <SectionTitle>Latest Articles</SectionTitle>
        <SectionText>Read our curated articles on luxury travel, destinations, and tips for an unforgettable stay.</SectionText>
        <BlogGrid>
          {blogs.map((blog, idx) => (
            <BlogCard key={idx}>
              <BlogImage src={blog.image} alt={blog.title} />
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
              <ReadMoreButton>Read More</ReadMoreButton>
            </BlogCard>
          ))}
        </BlogGrid>
      </Section>

      
      <CTAWrapper>
        <h2>Subscribe to Our Blog</h2>
        <p>Get the latest luxury travel tips and updates delivered to your inbox.</p>
        <CTAButton>Subscribe Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
