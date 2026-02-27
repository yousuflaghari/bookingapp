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
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  &:before {
    content: "➤";
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.primary};
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

/* ================== Page Component ================== */
export default function Sitemap() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sitemap Content Section */}
      <Section>
        <SectionTitle>Website Sitemap</SectionTitle>

        <SectionText>
          Explore the structure of LuxuryStay. Navigate to any section of our website with ease.
        </SectionText>

        <SubTitle>1. Public & Marketing Pages</SubTitle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Press</ListItem>
          <ListItem>Investors</ListItem>
          <ListItem>Affiliate</ListItem>
          <ListItem>How It Works</ListItem>
          <ListItem>Mobile App</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Destinations</ListItem>
          <ListItem>Top Cities</ListItem>
          <ListItem>Top Hotels</ListItem>
          <ListItem>Top Restaurants</ListItem>
          <ListItem>Luxury Stays</ListItem>
          <ListItem>Budget Stays</ListItem>
          <ListItem>Family Stays</ListItem>
          <ListItem>Business Travel</ListItem>
          <ListItem>Romantic Getaways</ListItem>
          <ListItem>Deals</ListItem>
          <ListItem>Seasonal Offers</ListItem>
          <ListItem>Gift Cards</ListItem>
          <ListItem>Refer & Earn</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Privacy</ListItem>
          <ListItem>Cookies</ListItem>
          <ListItem>Refund Policy</ListItem>
          <ListItem>Sitemap</ListItem>
          <ListItem>404</ListItem>
          <ListItem>500</ListItem>
          <ListItem>Maintenance</ListItem>
          <ListItem>Coming Soon</ListItem>
        </List>

        <SubTitle>2. Authentication Pages</SubTitle>
        <List>
          <ListItem>Login</ListItem>
          <ListItem>Register</ListItem>
          <ListItem>Vendor Register</ListItem>
          <ListItem>Admin Login</ListItem>
          <ListItem>Forgot Password</ListItem>
          <ListItem>Reset Password</ListItem>
          <ListItem>Verify Email</ListItem>
          <ListItem>2FA</ListItem>
          <ListItem>Resend Verification</ListItem>
          <ListItem>Change Password</ListItem>
          <ListItem>Update Email</ListItem>
          <ListItem>Delete Account</ListItem>
          <ListItem>Account Locked</ListItem>
          <ListItem>Reactivate Account</ListItem>
          <ListItem>Social Login</ListItem>
          <ListItem>OTP Login</ListItem>
          <ListItem>Success</ListItem>
          <ListItem>Error</ListItem>
          <ListItem>Logout</ListItem>
          <ListItem>Security Alert</ListItem>
        </List>

        <SubTitle>3. User Dashboard Pages</SubTitle>
        <List>
          <ListItem>User Dashboard</ListItem>
          <ListItem>User Profile</ListItem>
          <ListItem>User Edit Profile</ListItem>
          <ListItem>User Bookings</ListItem>
          <ListItem>User Past Bookings</ListItem>
          <ListItem>User Upcoming Bookings</ListItem>
          <ListItem>User Cancelled Bookings</ListItem>
          <ListItem>User Wishlist</ListItem>
          <ListItem>User Payments</ListItem>
          <ListItem>User Invoices</ListItem>
          <ListItem>User Reviews</ListItem>
          <ListItem>User Messages</ListItem>
          <ListItem>User Notifications</ListItem>
          <ListItem>User Security</ListItem>
          <ListItem>User 2FA</ListItem>
          <ListItem>User Delete Account</ListItem>
          <ListItem>User Settings</ListItem>
          <ListItem>User Preferences</ListItem>
          <ListItem>User Rewards</ListItem>
          <ListItem>User Referrals</ListItem>
          <ListItem>User Support Tickets</ListItem>
          <ListItem>User Report Issue</ListItem>
          <ListItem>User Travel History</ListItem>
          <ListItem>User Saved Cards</ListItem>
          <ListItem>User Activity Log</ListItem>
        </List>
      </Section>

      {/* CTA Section */}
      <CTAWrapper>
        <h2>Explore LuxuryStay</h2>
        <p>Quickly navigate to any page or section using our sitemap.</p>
        <CTAButton>Go to Dashboard</CTAButton>
      </CTAWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
