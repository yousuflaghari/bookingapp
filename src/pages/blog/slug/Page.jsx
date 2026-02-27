import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import { Button } from "../../../components/Button";
import {Card} from "../../../components/Card";

/* ================== Sections ================== */
const Section = styled.section`
  padding: 80px 20px;
  background: ${({ bg, theme }) => (bg ? theme.colors.light : theme.colors.white)};
`;

const SectionTitle = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  max-width: 800px;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 50px;
  font-size: 18px;
`;

/* ================== Blog Content ================== */
const BlogContent = styled.div`
  max-width: 900px;
  margin: auto;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray};
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  margin: 30px 0;
`;

const BlogParagraph = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
`;

const Quote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  margin: 25px 0;
  font-style: italic;
`;

/* ================== Author Section ================== */
const AuthorCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  padding: 30px;
`;

const AuthorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

const AuthorBio = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
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
const blog = {
  title: "Top 10 Luxury Hotels in Europe",
  subtitle: "Explore the most luxurious hotels in Europe with our detailed guide.",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  content: [
    "Europe offers a variety of luxury accommodations ranging from historic castles to modern high-rise hotels with panoramic views.",
    "Each property offers unique experiences such as gourmet dining, exclusive spa treatments, and personalized concierge services.",
    "When booking, consider your travel preferences: location, amenities, and the type of luxury experience you desire.",
    "Top cities include Paris, Rome, London, and Barcelona, each providing a blend of culture, luxury, and convenience.",
    "LuxuryStay curates the finest options ensuring a seamless and unforgettable travel experience."
  ],
  quote: "Luxury is attention to detail, originality, exclusivity and above all quality.",
  author: {
    name: "Sophia Laurent",
    bio: "Travel writer and luxury lifestyle expert sharing insights from around the globe.",
    image: "https://via.placeholder.com/100"
  }
};

/* ================== Page Component ================== */
export default function BlogSlug() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Blog Hero */}
      <Section>
        <SectionTitle>{blog.title}</SectionTitle>
        <SectionSubtitle>{blog.subtitle}</SectionSubtitle>
      </Section>

      {/* Blog Content */}
      <Section bg>
        <BlogContent>
          <BlogImage src={blog.image} alt={blog.title} />
          {blog.content.map((para, idx) => (
            <BlogParagraph key={idx}>{para}</BlogParagraph>
          ))}
          <Quote>{blog.quote}</Quote>

          {/* Author Section */}
          <AuthorCard>
            <AuthorImage src={blog.author.image} alt={blog.author.name} />
            <AuthorInfo>
              <AuthorName>{blog.author.name}</AuthorName>
              <AuthorBio>{blog.author.bio}</AuthorBio>
            </AuthorInfo>
          </AuthorCard>
        </BlogContent>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Subscribe for More Articles</h2>
        <p>Get latest luxury travel tips and guides delivered to your inbox.</p>
        <CTAButton>Subscribe Now</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
