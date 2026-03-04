// src/pages/register/RegisterPage.jsx

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// ----- Styled Components -----
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormWrapper = styled.div`
  width: 450px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2575fc;
    box-shadow: 0 0 0 2px rgba(37,117,252,0.2);
  }
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: red;
`;

const PasswordStrength = styled.div`
  font-size: 12px;
  color: ${({ strength }) => {
    if (strength === "weak") return "red";
    if (strength === "medium") return "orange";
    if (strength === "strong") return "green";
    return "#555";
  }};
`;

const Button = styled.button`
  padding: 14px;
  border-radius: 8px;
  background: #2575fc;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: #6a11cb;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #555;
  margin-top: 10px;

  a {
    color: #2575fc;
    text-decoration: none;
    font-weight: 600;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 15px 0;
`;

const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: 0.3s all;

    &.google {
      background: #db4437;
    }

    &.facebook {
      background: #4267b2;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

// ----- Main Component -----
const RegisterPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("weak");
    } else if (password.length < 10) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("strong");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name required";
    if (!form.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalid";
    if (!form.password) newErrors.password = "Password required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});
    setSuccess("");

    try {
      // Dummy API call placeholder
      await axios.post("/api/register", form);
      setSuccess("Registration successful!");
      setForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setPasswordStrength("");
    } catch (error) {
      setErrors({ api: error.response?.data?.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Login with ${platform} clicked`);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Create Account</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            {form.password && <PasswordStrength strength={passwordStrength}>
              {passwordStrength && `Password strength: ${passwordStrength}`}
            </PasswordStrength>}
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
          </InputGroup>

          {errors.api && <ErrorText>{errors.api}</ErrorText>}
          {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>

        <Divider />

        <SocialLoginWrapper>
          <button className="google" onClick={() => handleSocialLogin("Google")}>
            Google
          </button>
          <button className="facebook" onClick={() => handleSocialLogin("Facebook")}>
            Facebook
          </button>
        </SocialLoginWrapper>

        <FooterText>
          Already have an account? <a href="/login">Login</a>
        </FooterText>
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;