import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Button } from "../../components/Button";
import {Card} from "../../components/Card";

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

/* ================== Job Listings ================== */
const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 30px;
  margin-top: 40px;
`;

const JobCard = styled(Card)`
  padding: 25px;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const JobLocation = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.gray};
`;

const ApplyButton = styled(Button)`
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

/* ================== Fake Jobs Data ================== */
const jobsData = [
  { title: "Frontend Developer", location: "Paris, France" },
  { title: "Backend Developer", location: "Dubai, UAE" },
  { title: "UX/UI Designer", location: "Rome, Italy" },
  { title: "Marketing Specialist", location: "Maldives" },
  { title: "Customer Support", location: "Global Remote" },
  { title: "Product Manager", location: "Paris, France" },
  { title: "Data Analyst", location: "Dubai, UAE" },
  { title: "SEO Specialist", location: "Rome, Italy" },
];

/* ================== Page Component ================== */
export default function Careers() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        title="Join Our Team"
        text="LuxuryStay is always looking for talented individuals to join our global team."
        bg="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
      />

      {/* Careers Section */}
      <Section>
        <SectionTitle>Open Positions</SectionTitle>
        <SectionText>Explore our current job openings and become part of our luxury travel family.</SectionText>
        <JobsGrid>
          {jobsData.map((job, idx) => (
            <JobCard key={idx}>
              <JobTitle>{job.title}</JobTitle>
              <JobLocation>{job.location}</JobLocation>
              <ApplyButton>Apply Now</ApplyButton>
            </JobCard>
          ))}
        </JobsGrid>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Want to Work with Us?</h2>
        <p>Send us your resume and start your journey with LuxuryStay today!</p>
        <CTAButton>Submit Resume</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <FooterWrapper>
        <FooterText>© 2026 LuxuryStay. All Rights Reserved.</FooterText>
      </FooterWrapper>
    </div>
  );
}
