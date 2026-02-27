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
export default function RefundPolicy() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Refund Policy Section */}
      <Section>
        <SectionTitle>Refund Policy</SectionTitle>

        <SectionText>
          At LuxuryStay, we strive to provide clear and fair refund policies for all bookings made through our platform. Please review the following details.
        </SectionText>

        <SubTitle>1. Eligibility for Refunds</SubTitle>
        <SectionText>
          Refunds may be issued for cancellations, service disruptions, or errors in booking. The eligibility depends on the type of service booked.
        </SectionText>
        <List>
          <ListItem>Hotel bookings canceled within the allowed cancellation period.</ListItem>
          <ListItem>Restaurant bookings canceled at least 24 hours prior.</ListItem>
          <ListItem>Bookings affected by technical errors or double charges.</ListItem>
          <ListItem>Promotional or package bookings may have special conditions.</ListItem>
        </List>

        <SubTitle>2. Refund Process</SubTitle>
        <SectionText>
          Refunds will be processed through the original payment method unless otherwise specified.
        </SectionText>
        <List>
          <ListItem>Submit a refund request through your User Dashboard.</ListItem>
          <ListItem>Our team will verify the request within 48 hours.</ListItem>
          <ListItem>Approved refunds are processed within 5-7 business days.</ListItem>
          <ListItem>Notifications will be sent via email upon completion.</ListItem>
        </List>

        <SubTitle>3. Partial Refunds</SubTitle>
        <SectionText>
          In certain cases, partial refunds may be issued based on usage or service charges.
        </SectionText>
        <List>
          <ListItem>Partial refund if services have already been partially utilized.</ListItem>
          <ListItem>Fees or service charges may be deducted.</ListItem>
          <ListItem>Refund calculation will be communicated via email.</ListItem>
        </List>

        <SubTitle>4. Non-Refundable Bookings</SubTitle>
        <SectionText>
          Some bookings may be non-refundable. Users should check booking details before confirming.
        </SectionText>
        <List>
          <ListItem>Special offers, deals, or flash sales.</ListItem>
          <ListItem>Third-party bookings with fixed non-refundable policies.</ListItem>
          <ListItem>Late cancellations beyond the allowed period.</ListItem>
        </List>

        <SubTitle>5. Contact for Refund</SubTitle>
        <SectionText>
          For questions or disputes regarding refunds, please contact our support team via your User Dashboard or Support page.
        </SectionText>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Request a Refund</h2>
        <p>If you are eligible for a refund, submit your request and our team will process it promptly.</p>
        <CTAButton>Request Refund</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
