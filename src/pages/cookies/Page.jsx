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
export default function Cookies() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Cookies Content Section */}
      <Section>
        <SectionTitle>Cookies Policy</SectionTitle>

        <SectionText>
          LuxuryStay uses cookies to enhance your browsing experience and provide personalized services.
        </SectionText>

        <SubTitle>1. What Are Cookies?</SubTitle>
        <SectionText>
          Cookies are small files stored on your device that help websites remember information about your visit.
        </SectionText>
        <List>
          <ListItem>Session Cookies: Keep you logged in while browsing.</ListItem>
          <ListItem>Preference Cookies: Remember your settings and preferences.</ListItem>
          <ListItem>Analytics Cookies: Help us understand user behavior and improve services.</ListItem>
          <ListItem>Marketing Cookies: Display relevant advertisements based on your interests.</ListItem>
        </List>

        <SubTitle>2. How We Use Cookies</SubTitle>
        <SectionText>
          Cookies allow us to deliver a better user experience and tailor services to your needs.
        </SectionText>
        <List>
          <ListItem>Maintain login and account sessions.</ListItem>
          <ListItem>Track site usage for performance and improvements.</ListItem>
          <ListItem>Provide personalized content and recommendations.</ListItem>
          <ListItem>Support advertising and promotional campaigns.</ListItem>
        </List>

        <SubTitle>3. Managing Cookies</SubTitle>
        <SectionText>
          You can control cookie preferences through your browser settings or device preferences.
        </SectionText>
        <List>
          <ListItem>Accept or reject cookies at any time.</ListItem>
          <ListItem>Clear stored cookies from your device.</ListItem>
          <ListItem>Adjust your privacy settings to manage cookie usage.</ListItem>
          <ListItem>Note that some features may not work if cookies are disabled.</ListItem>
        </List>

        <SubTitle>4. Third-Party Cookies</SubTitle>
        <SectionText>
          We may allow third-party services to use cookies to provide additional functionality.
        </SectionText>
        <List>
          <ListItem>Analytics services like Google Analytics.</ListItem>
          <ListItem>Advertising partners for targeted ads.</ListItem>
          <ListItem>Social media integrations.</ListItem>
        </List>

        <SubTitle>5. Changes to Cookie Policy</SubTitle>
        <SectionText>
          LuxuryStay may update this Cookies Policy periodically. Continued use of our services constitutes acceptance of changes.
        </SectionText>

        <SubTitle>6. Contact Us</SubTitle>
        <SectionText>
          For questions about our cookies or privacy practices, contact our support team via the Support section.
        </SectionText>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Manage Your Cookie Preferences</h2>
        <p>Adjust your settings and make your browsing experience safe and personalized.</p>
        <CTAButton>Manage Cookies</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
