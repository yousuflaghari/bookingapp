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
export default function Terms() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Terms Content Section */}
      <Section>
        <SectionTitle>Terms & Conditions</SectionTitle>

        <SectionText>
          Welcome to LuxuryStay! These Terms and Conditions govern your use of our services.
          By accessing or using our website, you agree to these Terms in full. Please read them carefully.
        </SectionText>

        <SubTitle>1. Use of Our Service</SubTitle>
        <SectionText>
          You agree to use our services in compliance with applicable laws and not for any illegal purposes.
        </SectionText>
        <List>
          <ListItem>No unauthorized access to our systems.</ListItem>
          <ListItem>Do not misuse our booking features.</ListItem>
          <ListItem>Do not post harmful or inappropriate content.</ListItem>
        </List>

        <SubTitle>2. Account Registration</SubTitle>
        <SectionText>
          Users must register an account to access certain features of LuxuryStay. You are responsible for maintaining the confidentiality of your login credentials.
        </SectionText>
        <List>
          <ListItem>Provide accurate and complete information.</ListItem>
          <ListItem>Maintain the security of your account.</ListItem>
          <ListItem>Notify us immediately of any unauthorized use.</ListItem>
        </List>

        <SubTitle>3. Booking Terms</SubTitle>
        <SectionText>
          All bookings are subject to availability. Prices and offers may vary.
        </SectionText>
        <List>
          <ListItem>Confirm your bookings carefully before finalizing.</ListItem>
          <ListItem>LuxuryStay is not responsible for errors made by third-party vendors.</ListItem>
          <ListItem>Cancellation and refund policies may vary.</ListItem>
        </List>

        <SubTitle>4. Privacy & Data</SubTitle>
        <SectionText>
          By using our services, you consent to the collection and use of your personal data according to our Privacy Policy.
        </SectionText>
        <List>
          <ListItem>We protect user data with industry-standard security.</ListItem>
          <ListItem>Data will only be shared as described in our Privacy Policy.</ListItem>
          <ListItem>Users may request access or deletion of their data.</ListItem>
        </List>

        <SubTitle>5. Liability</SubTitle>
        <SectionText>
          LuxuryStay is not liable for indirect, incidental, or consequential damages arising from your use of our services.
        </SectionText>

        <SubTitle>6. Changes to Terms</SubTitle>
        <SectionText>
          We may update these Terms from time to time. Continued use of our services constitutes acceptance of the updated Terms.
        </SectionText>

        <SubTitle>7. Contact Us</SubTitle>
        <SectionText>
          If you have questions about these Terms, please contact our support team through the Support section.
        </SectionText>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Agree & Continue</h2>
        <p>Please review all terms carefully before continuing to use LuxuryStay.</p>
        <CTAButton>Accept Terms</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
