import React, { useState } from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

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

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-height: 100px;
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

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const CameraIcon = styled(FaCamera)`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #007bff;
  color: #fff;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  font-size: 18px;
`;

// ================= Component =================

const VendorProfile = () => {

  const [profile, setProfile] = useState({
    name: "Hilton Vendor",
    email: "vendor@example.com",
    phone: "+1234567890",
    bio: "We provide top-quality hotel services.",
    image: "https://via.placeholder.com/120"
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleImageUpload = (e) => {
    if(e.target.files && e.target.files[0]){
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setProfile({ ...profile, image: imgUrl });
    }
  };

  const handleSubmit = () => {
    console.log("Profile Updated:", profile);
    alert("Profile updated successfully!");
    // API call to update profile goes here
  };

  return (
    <Container>
      <Title>Vendor Profile</Title>
      <Card>
        <ProfileImageWrapper>
          <ProfileImage src={profile.image} alt="Profile" />
          <CameraIcon onClick={() => document.getElementById("profileImageInput").click()} />
          <input 
            type="file" 
            id="profileImageInput" 
            accept="image/*" 
            style={{ display: "none" }} 
            onChange={handleImageUpload} 
          />
        </ProfileImageWrapper>

        <Field>
          <Label>Name</Label>
          <Input value={profile.name} onChange={e=>handleChange("name", e.target.value)} />
        </Field>

        <Field>
          <Label>Email</Label>
          <Input value={profile.email} onChange={e=>handleChange("email", e.target.value)} />
        </Field>

        <Field>
          <Label>Phone</Label>
          <Input value={profile.phone} onChange={e=>handleChange("phone", e.target.value)} />
        </Field>

        <Field>
          <Label>Bio</Label>
          <TextArea value={profile.bio} onChange={e=>handleChange("bio", e.target.value)} />
        </Field>

        <Button onClick={handleSubmit}>Save Changes</Button>
      </Card>
    </Container>
  );
};

export default VendorProfile;