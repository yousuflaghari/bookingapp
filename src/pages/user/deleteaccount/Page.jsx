import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiAlertCircle, FiTrash2 } from "react-icons/fi";

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
  text-align:center;
`;

const Header = styled.h2`
  color:#dc3545;
  margin-bottom:20px;
`;

const WarningText = styled.p`
  color:#495057;
  margin-bottom:20px;
`;

const Input = styled.input`
  padding:10px;
  width:80%;
  border-radius:8px;
  border:1px solid #ccc;
  margin-bottom:20px;
  text-align:center;
`;

const DeleteButton = styled.button`
  padding:12px 20px;
  border:none;
  border-radius:8px;
  background:#dc3545;
  color:white;
  font-weight:bold;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  margin:0 auto;

  &:hover {
    background:#b02a37;
  }

  &:disabled {
    background:#f5c6cb;
    cursor:not-allowed;
  }
`;

const IconWrapper = styled.span`
  font-size:18px;
`;

/* ================= COMPONENT ================= */

const DeleteAccount = () => {
  const [confirmText, setConfirmText] = useState("");

  const handleDelete = () => {
    if(confirmText === "DELETE") {
      alert("Account deleted successfully!");
      setConfirmText("");
      // Call API to delete account here
    } else {
      alert("Please type DELETE to confirm account deletion.");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <IconWrapper><FiAlertCircle size={40} color="#dc3545" /></IconWrapper>
        <Header>Delete Account</Header>
        <WarningText>
          Warning: This action is permanent and will delete your account along with all bookings and data.
        </WarningText>

        <Input
          type="text"
          placeholder='Type "DELETE" to confirm'
          value={confirmText}
          onChange={e => setConfirmText(e.target.value)}
        />

        <DeleteButton onClick={handleDelete} disabled={confirmText !== "DELETE"}>
          <FiTrash2 /> Delete Account
        </DeleteButton>
      </Container>
    </>
  );
};

export default DeleteAccount;