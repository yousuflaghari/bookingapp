import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";

/* ================== Sections ================== */
const Section = styled.section`
  padding: 80px 20px;
  background: ${({ bg, theme }) => (bg ? theme.colors.light : theme.colors.white)};
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 40px;
`;

const SectionText = styled.p`
  max-width: 900px;
  margin: auto;
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 30px;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

const ListItem = styled.li`
  margin-bottom: 10px;
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

/* ================== Page Component ================== */
export default function Privacy() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Privacy Content Section */}
      <Section>
        <SectionTitle>Privacy Policy</SectionTitle>

        <SectionText>
          LuxuryStay is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
        </SectionText>

        <SubTitle>1. Information Collection</SubTitle>
        <SectionText>
          We collect personal information when you use our services or register an account.
        </SectionText>
        <List>
          <ListItem>Account registration details (name, email, password).</ListItem>
          <ListItem>Booking and payment information.</ListItem>
          <ListItem>Communication preferences and feedback.</ListItem>
          <ListItem>Usage data through analytics and cookies.</ListItem>
        </List>

        <SubTitle>2. Information Use</SubTitle>
        <SectionText>
          The information collected is used to enhance your experience and provide our services effectively.
        </SectionText>
        <List>
          <ListItem>Process bookings and transactions.</ListItem>
          <ListItem>Send updates, offers, and notifications.</ListItem>
          <ListItem>Improve website and mobile app functionality.</ListItem>
          <ListItem>Analyze trends and user behavior.</ListItem>
        </List>

        <SubTitle>3. Information Sharing</SubTitle>
        <SectionText>
          We respect your privacy and do not sell your personal data. Sharing occurs only under specific circumstances.
        </SectionText>
        <List>
          <ListItem>With service providers assisting in booking fulfillment.</ListItem>
          <ListItem>To comply with legal requirements.</ListItem>
          <ListItem>During business transfers or acquisitions.</ListItem>
        </List>

        <SubTitle>4. Cookies & Tracking</SubTitle>
        <SectionText>
          We use cookies and similar technologies to track activity and enhance user experience.
        </SectionText>
        <List>
          <ListItem>Session management and login persistence.</ListItem>
          <ListItem>Analytics and performance tracking.</ListItem>
          <ListItem>Targeted advertising in line with your preferences.</ListItem>
        </List>

        <SubTitle>5. Data Security</SubTitle>
        <SectionText>
          LuxuryStay implements industry-standard measures to protect your data.
        </SectionText>
        <List>
          <ListItem>Encrypted transactions using SSL.</ListItem>
          <ListItem>Secure storage of sensitive information.</ListItem>
          <ListItem>Regular monitoring for security breaches.</ListItem>
        </List>

        <SubTitle>6. Your Rights</SubTitle>
        <SectionText>
          Users have rights regarding their personal data, including access, modification, and deletion.
        </SectionText>
        <List>
          <ListItem>Request a copy of your data.</ListItem>
          <ListItem>Update inaccurate information.</ListItem>
          <ListItem>Request account deletion or data removal.</ListItem>
          <ListItem>Opt-out of marketing communications.</ListItem>
        </List>

        <SubTitle>7. Changes to Policy</SubTitle>
        <SectionText>
          We may update this Privacy Policy occasionally. Continued use of LuxuryStay indicates acceptance of updates.
        </SectionText>

        <SubTitle>8. Contact</SubTitle>
        <SectionText>
          For questions or concerns regarding this Privacy Policy, please contact our support team via the Support section.
        </SectionText>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Stay Informed About Your Privacy</h2>
        <p>Review our Privacy Policy carefully and manage your preferences.</p>
        <CTAButton>Manage Preferences</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
