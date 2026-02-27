import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiUser, FiMail, FiPhone, FiSave } from "react-icons/fi";

/* ================= GLOBAL ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  max-width:600px;
  margin:50px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.h2`
  color:#333;
  margin-bottom:20px;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:15px;
`;

const Label = styled.label`
  font-weight:bold;
`;

const Input = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  width:100%;
`;

const AvatarPreview = styled.img`
  width:100px;
  height:100px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:10px;
`;

const SaveButton = styled.button`
  padding:12px;
  border:none;
  border-radius:8px;
  background:#0d6efd;
  color:white;
  font-weight:bold;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  justify-content:center;

  &:hover {
    background:#0b5ed7;
  }
`;

/* ================= COMPONENT ================= */

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+92 300 1234567",
    avatar: "https://via.placeholder.com/100"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // Call API to save profile here
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Edit Profile</Header>
        <Form onSubmit={handleSubmit}>
          <AvatarPreview src={profile.avatar} alt="Avatar" />
          <Input type="file" onChange={handleAvatarChange} />

          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />

          <Label>Phone</Label>
          <Input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />

          <SaveButton type="submit">
            <FiSave /> Save Changes
          </SaveButton>
        </Form>
      </Container>
    </>
  );
};

export default EditProfile;