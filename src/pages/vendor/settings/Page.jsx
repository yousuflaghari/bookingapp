import React, { useState } from "react";
import styled from "styled-components";

// ================= Styled Components =================

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

const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  margin-bottom: 20px;
  max-width: 600px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 12px 18px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #007bff;
  }
  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 28px;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

// ================= Component =================

const VendorSettings = () => {

  const [settings, setSettings] = useState({
    name: "Hilton Vendor",
    email: "vendor@example.com",
    phone: "+1234567890",
    password: "",
    notifications: true
  });

  const handleChange = (field, value) => {
    setSettings({...settings, [field]: value});
  };

  const handleSave = () => {
    console.log("Settings Saved:", settings);
    alert("Settings updated successfully!");
    // API call goes here
  };

  return (
    <Container>
      <Title>Vendor Settings</Title>

      <Card>
        <h2>General Settings</h2>
        <Field>
          <Label>Name</Label>
          <Input value={settings.name} onChange={e=>handleChange("name", e.target.value)} />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input value={settings.email} onChange={e=>handleChange("email", e.target.value)} />
        </Field>
        <Field>
          <Label>Phone</Label>
          <Input value={settings.phone} onChange={e=>handleChange("phone", e.target.value)} />
        </Field>
      </Card>

      <Card>
        <h2>Password</h2>
        <Field>
          <Label>New Password</Label>
          <Input type="password" value={settings.password} onChange={e=>handleChange("password", e.target.value)} />
        </Field>
      </Card>

      <Card>
        <h2>Notifications</h2>
        <ToggleSwitch>
          <ToggleInput type="checkbox" checked={settings.notifications} onChange={e=>handleChange("notifications", e.target.checked)} />
          <Slider />
        </ToggleSwitch>
      </Card>

      <Button onClick={handleSave}>Save Settings</Button>
    </Container>
  );
};

export default VendorSettings;