import React, { useState } from "react";
import styled from "styled-components";

// ================= Styled Components =================

const Container = styled.div`
  padding: 30px;
  background: #f4f6f8;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
`;

const Label = styled.label`
  font-size: 15px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 250px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Toggle = styled.input`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  background: #0077ff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #005ecc;
  }
`;

const DangerButton = styled(Button)`
  background: #ff4d4f;

  &:hover {
    background: #d9363e;
  }
`;

// ================= Component =================

const Settings = () => {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+123456789",
    language: "English",
    timezone: "UTC",
    darkMode: false,
    emailNotif: true,
    smsNotif: false,
    pushNotif: true,
    profilePublic: true,
    showActivity: true,
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSave = () => {
    alert("Settings Saved!");
  };

  return (
    <Container>
      <Title>User Settings</Title>

      {/* Account Info */}
      <Section>
        <SectionTitle>Account Information</SectionTitle>

        <Row>
          <Label>Full Name</Label>
          <Input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Row>

        <Row>
          <Label>Email</Label>
          <Input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Row>

        <Row>
          <Label>Phone</Label>
          <Input
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Row>

        <Button onClick={handleSave}>Save Changes</Button>
      </Section>

      {/* Preferences */}
      <Section>
        <SectionTitle>Preferences</SectionTitle>

        <Row>
          <Label>Language</Label>
          <Select
            value={form.language}
            onChange={(e) => handleChange("language", e.target.value)}
          >
            <option>English</option>
            <option>Urdu</option>
            <option>Arabic</option>
          </Select>
        </Row>

        <Row>
          <Label>Timezone</Label>
          <Select
            value={form.timezone}
            onChange={(e) => handleChange("timezone", e.target.value)}
          >
            <option>UTC</option>
            <option>GMT</option>
            <option>PKT</option>
          </Select>
        </Row>

        <Row>
          <Label>Dark Mode</Label>
          <Toggle
            type="checkbox"
            checked={form.darkMode}
            onChange={(e) => handleChange("darkMode", e.target.checked)}
          />
        </Row>
      </Section>

      {/* Notifications */}
      <Section>
        <SectionTitle>Notifications</SectionTitle>

        <Row>
          <Label>Email Notifications</Label>
          <Toggle
            type="checkbox"
            checked={form.emailNotif}
            onChange={(e) => handleChange("emailNotif", e.target.checked)}
          />
        </Row>

        <Row>
          <Label>SMS Notifications</Label>
          <Toggle
            type="checkbox"
            checked={form.smsNotif}
            onChange={(e) => handleChange("smsNotif", e.target.checked)}
          />
        </Row>

        <Row>
          <Label>Push Notifications</Label>
          <Toggle
            type="checkbox"
            checked={form.pushNotif}
            onChange={(e) => handleChange("pushNotif", e.target.checked)}
          />
        </Row>
      </Section>

      {/* Privacy */}
      <Section>
        <SectionTitle>Privacy Settings</SectionTitle>

        <Row>
          <Label>Public Profile</Label>
          <Toggle
            type="checkbox"
            checked={form.profilePublic}
            onChange={(e) => handleChange("profilePublic", e.target.checked)}
          />
        </Row>

        <Row>
          <Label>Show Activity Status</Label>
          <Toggle
            type="checkbox"
            checked={form.showActivity}
            onChange={(e) => handleChange("showActivity", e.target.checked)}
          />
        </Row>
      </Section>

      {/* Security */}
      <Section>
        <SectionTitle>Security</SectionTitle>

        <Row>
          <Label>Change Password</Label>
          <Button>Update Password</Button>
        </Row>

        <Row>
          <Label>Two Factor Authentication</Label>
          <Button>Enable 2FA</Button>
        </Row>
      </Section>

      {/* Billing */}
      <Section>
        <SectionTitle>Billing & Subscription</SectionTitle>

        <Row>
          <Label>Current Plan</Label>
          <div>Premium Plan</div>
        </Row>

        <Row>
          <Label>Next Billing Date</Label>
          <div>12 Aug 2026</div>
        </Row>

        <Button>Manage Subscription</Button>
      </Section>

      {/* Danger Zone */}
      <Section>
        <SectionTitle>Danger Zone</SectionTitle>

        <Row>
          <Label>Delete Account</Label>
          <DangerButton>Delete</DangerButton>
        </Row>

        <Row>
          <Label>Deactivate Account</Label>
          <DangerButton>Deactivate</DangerButton>
        </Row>
      </Section>

      {/* Extra Preferences */}
      <Section>
        <SectionTitle>Advanced Preferences</SectionTitle>

        <Row>
          <Label>Auto Login</Label>
          <Toggle type="checkbox" defaultChecked />
        </Row>

        <Row>
          <Label>Remember Devices</Label>
          <Toggle type="checkbox" />
        </Row>

        <Row>
          <Label>Location Access</Label>
          <Toggle type="checkbox" defaultChecked />
        </Row>

        <Row>
          <Label>Marketing Emails</Label>
          <Toggle type="checkbox" />
        </Row>

        <Row>
          <Label>Beta Features</Label>
          <Toggle type="checkbox" />
        </Row>
      </Section>

      {/* Save Button */}
      <Button onClick={handleSave}>Save All Settings</Button>
    </Container>
  );
};

export default Settings;