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

const Card = styled.div`
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

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadInput = styled.input`
  margin-top: 10px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 15px;
`;

const StatCard = styled.div`
  background: #fafafa;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #777;
`;

// ====================== Component ======================

const Profile = () => {

  const [avatar, setAvatar] = useState(
    "https://via.placeholder.com/100"
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];

    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Profile Saved:", form);
    alert("Profile Updated!");
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <Container>

      <Title>User Profile</Title>

      {/* ================= Stats ================= */}

      <StatsGrid>

        <StatCard>
          <StatNumber>24</StatNumber>
          <StatLabel>Total Bookings</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>5</StatNumber>
          <StatLabel>Cancelled</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>12</StatNumber>
          <StatLabel>Reviews</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>3 Years</StatNumber>
          <StatLabel>Member Since</StatLabel>
        </StatCard>

      </StatsGrid>


      {/* ================= Avatar ================= */}

      <Card>

        <SectionTitle>Profile Picture</SectionTitle>

        <AvatarWrapper>

          <Avatar src={avatar} />

          <div>
            <UploadInput
              type="file"
              accept="image/*"
              onChange={handleAvatar}
            />
          </div>

        </AvatarWrapper>

      </Card>


      {/* ================= Personal Info ================= */}

      <Card>

        <SectionTitle>Personal Information</SectionTitle>

        <Row>

          <Field>
            <Label>First Name</Label>
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Last Name</Label>
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Phone</Label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Gender</Label>
            <Input
              name="gender"
              value={form.gender}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
          </Field>

        </Row>

      </Card>


      {/* ================= Address ================= */}

      <Card>

        <SectionTitle>Address</SectionTitle>

        <Row>

          <Field>
            <Label>Address</Label>
            <Input
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>City</Label>
            <Input
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Country</Label>
            <Input
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>ZIP Code</Label>
            <Input
              name="zip"
              value={form.zip}
              onChange={handleChange}
            />
          </Field>

        </Row>

      </Card>


      {/* ================= Password ================= */}

      <Card>

        <SectionTitle>Change Password</SectionTitle>

        <Row>

          <Field>
            <Label>Current Password</Label>
            <Input
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>New Password</Label>
            <Input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </Field>

        </Row>

      </Card>


      {/* ================= Buttons ================= */}

      <ButtonRow>
        <Button onClick={handleSave}>Save Changes</Button>
        <Button secondary onClick={handleCancel}>Cancel</Button>
      </ButtonRow>

    </Container>
  );
};

export default Profile;