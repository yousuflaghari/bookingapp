import React, { useState } from "react";
import styled from "styled-components";

// ====================== Styled Components ======================

const Container = styled.div`
  padding: 30px;
  min-height: 100vh;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const Section = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Field = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Toggle = styled.input`
  margin-right: 10px;
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${props => props.secondary ? "#ccc" : "#007bff"};
  color: ${props => props.secondary ? "#000" : "#fff"};

  &:hover {
    opacity: 0.9;
  }
`;

// ====================== Component ======================

const Preferences = () => {

  const [form, setForm] = useState({
    language: "English",
    currency: "USD",
    timezone: "GMT",
    theme: "light",
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
    showProfilePublic: true,
    twoFactorAuth: false,
    autoSaveBookings: true,
    darkMode: false,
    locationAccess: true,
    soundEffects: true,
    compactMode: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSave = () => {
    console.log("Saved Preferences:", form);
    alert("Preferences Saved!");
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Container>

      <Title>User Preferences</Title>

      {/* ================= Account Preferences ================= */}

      <Section>
        <SectionTitle>Account Settings</SectionTitle>

        <Row>
          <Field>
            <Label>Language</Label>
            <Select
              name="language"
              value={form.language}
              onChange={handleChange}
            >
              <option>English</option>
              <option>Urdu</option>
              <option>Arabic</option>
            </Select>
          </Field>

          <Field>
            <Label>Currency</Label>
            <Select
              name="currency"
              value={form.currency}
              onChange={handleChange}
            >
              <option>USD</option>
              <option>PKR</option>
              <option>EUR</option>
            </Select>
          </Field>

          <Field>
            <Label>Timezone</Label>
            <Select
              name="timezone"
              value={form.timezone}
              onChange={handleChange}
            >
              <option>GMT</option>
              <option>Asia/Karachi</option>
              <option>Asia/Dubai</option>
            </Select>
          </Field>
        </Row>
      </Section>

      {/* ================= Theme ================= */}

      <Section>
        <SectionTitle>Appearance</SectionTitle>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="darkMode"
            checked={form.darkMode}
            onChange={handleChange}
          />
          Dark Mode
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="compactMode"
            checked={form.compactMode}
            onChange={handleChange}
          />
          Compact Layout
        </ToggleRow>

        <Field>
          <Label>Theme Color</Label>
          <Select
            name="theme"
            value={form.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </Select>
        </Field>

      </Section>

      {/* ================= Notifications ================= */}

      <Section>
        <SectionTitle>Notifications</SectionTitle>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="emailNotifications"
            checked={form.emailNotifications}
            onChange={handleChange}
          />
          Email Notifications
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="smsNotifications"
            checked={form.smsNotifications}
            onChange={handleChange}
          />
          SMS Notifications
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="pushNotifications"
            checked={form.pushNotifications}
            onChange={handleChange}
          />
          Push Notifications
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="marketingEmails"
            checked={form.marketingEmails}
            onChange={handleChange}
          />
          Marketing Emails
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="soundEffects"
            checked={form.soundEffects}
            onChange={handleChange}
          />
          Sound Effects
        </ToggleRow>

      </Section>

      {/* ================= Privacy ================= */}

      <Section>
        <SectionTitle>Privacy & Security</SectionTitle>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="showProfilePublic"
            checked={form.showProfilePublic}
            onChange={handleChange}
          />
          Public Profile
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="twoFactorAuth"
            checked={form.twoFactorAuth}
            onChange={handleChange}
          />
          Two Factor Authentication
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="locationAccess"
            checked={form.locationAccess}
            onChange={handleChange}
          />
          Allow Location Access
        </ToggleRow>

        <ToggleRow>
          <Toggle
            type="checkbox"
            name="autoSaveBookings"
            checked={form.autoSaveBookings}
            onChange={handleChange}
          />
          Auto Save Bookings
        </ToggleRow>

      </Section>

      {/* ================= Buttons ================= */}

      <ButtonRow>
        <Button onClick={handleSave}>Save Preferences</Button>
        <Button secondary onClick={handleReset}>Reset</Button>
      </ButtonRow>

    </Container>
  );
};

export default Preferences;