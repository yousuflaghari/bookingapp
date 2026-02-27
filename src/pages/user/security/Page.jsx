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

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${props => props.danger ? "#dc3545" : "#007bff"};
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Switch = styled.input`
  width: 40px;
  height: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
  background: ${props => props.active ? "#28a745" : "#6c757d"};
`;

// ====================== Component ======================

const Security = () => {

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: ""
  });

  const [twoFA, setTwoFA] = useState(false);

  const [sessions, setSessions] = useState([
    {
      id: 1,
      device: "Chrome on Windows",
      location: "Lahore, PK",
      status: "Active",
      date: "2025-02-01"
    },
    {
      id: 2,
      device: "iPhone Safari",
      location: "Karachi, PK",
      status: "Inactive",
      date: "2025-01-25"
    }
  ]);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPassword({
      ...password,
      [name]: value
    });
  };

  const changePassword = () => {

    if (password.newPass !== password.confirm) {
      alert("Passwords do not match");
      return;
    }

    alert("Password changed successfully");

    setPassword({
      current: "",
      newPass: "",
      confirm: ""
    });

  };

  const logoutDevice = (id) => {

    setSessions(
      sessions.map(s =>
        s.id === id ? { ...s, status: "Inactive" } : s
      )
    );

  };

  const deleteAccount = () => {

    if (window.confirm("Are you sure you want to delete account?")) {
      alert("Account deleted");
    }

  };

  return (
    <Container>

      <Title>Security Settings</Title>

      {/* ================= Change Password ================= */}

      <Card>

        <SectionTitle>Change Password</SectionTitle>

        <Field>
          <Label>Current Password</Label>
          <Input
            type="password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
          />
        </Field>

        <Field>
          <Label>New Password</Label>
          <Input
            type="password"
            name="newPass"
            value={password.newPass}
            onChange={handlePasswordChange}
          />
        </Field>

        <Field>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirm"
            value={password.confirm}
            onChange={handlePasswordChange}
          />
        </Field>

        <Button onClick={changePassword}>
          Update Password
        </Button>

      </Card>


      {/* ================= 2FA ================= */}

      <Card>

        <SectionTitle>Two-Factor Authentication</SectionTitle>

        <Toggle>
          <div>
            <b>Enable 2FA</b>
            <p style={{ margin: 0, fontSize: 13 }}>
              Secure your account with extra verification
            </p>
          </div>

          <Switch
            type="checkbox"
            checked={twoFA}
            onChange={() => setTwoFA(!twoFA)}
          />

        </Toggle>

      </Card>


      {/* ================= Sessions ================= */}

      <Card>

        <SectionTitle>Login Activity</SectionTitle>

        <Table>

          <thead>
            <tr>
              <Th>Device</Th>
              <Th>Location</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </thead>

          <tbody>

            {sessions.map(session => (
              <tr key={session.id}>
                <Td>{session.device}</Td>
                <Td>{session.location}</Td>
                <Td>{session.date}</Td>
                <Td>
                  <Badge active={session.status === "Active"}>
                    {session.status}
                  </Badge>
                </Td>
                <Td>

                  {session.status === "Active" && (
                    <Button
                      danger
                      onClick={() => logoutDevice(session.id)}
                    >
                      Logout
                    </Button>
                  )}

                </Td>
              </tr>
            ))}

          </tbody>

        </Table>

      </Card>


      {/* ================= Danger Zone ================= */}

      <Card>

        <SectionTitle>Danger Zone</SectionTitle>

        <p>
          Deleting your account will permanently remove all data.
        </p>

        <Button danger onClick={deleteAccount}>
          Delete Account
        </Button>

      </Card>

    </Container>
  );
};

export default Security;