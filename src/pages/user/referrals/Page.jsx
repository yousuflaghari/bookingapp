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

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 16px;
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 15px;
`;

const StatCard = styled.div`
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #777;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const WithdrawBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

// ====================== Component ======================

const Referrals = () => {

  const referralLink = "https://yourapp.com/ref/USER123";

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const referrals = [
    { id: 1, name: "Ali Khan", date: "2025-01-10", status: "Joined", earning: 20 },
    { id: 2, name: "Sara Ahmed", date: "2025-01-15", status: "Booked", earning: 35 },
    { id: 3, name: "John Doe", date: "2025-01-20", status: "Pending", earning: 0 },
    { id: 4, name: "Ayesha", date: "2025-01-22", status: "Booked", earning: 40 },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const handleInvite = () => {
    alert(`Invitation sent to ${email}`);
    setEmail("");
  };

  const handleWithdraw = () => {
    alert(`Withdraw request for $${amount} submitted`);
    setAmount("");
  };

  return (
    <Container>

      <Title>Refer & Earn</Title>

      {/* ================= Stats ================= */}

      <StatsGrid>

        <StatCard>
          <StatNumber>$95</StatNumber>
          <StatLabel>Total Earnings</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>$40</StatNumber>
          <StatLabel>Available Balance</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>12</StatNumber>
          <StatLabel>Total Referrals</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>5</StatNumber>
          <StatLabel>Successful Bookings</StatLabel>
        </StatCard>

      </StatsGrid>


      {/* ================= Referral Link ================= */}

      <Card>

        <SectionTitle>Your Referral Link</SectionTitle>

        <Row>
          <Input value={referralLink} readOnly />
          <Button onClick={handleCopy}>Copy</Button>
        </Row>

      </Card>


      {/* ================= Invite ================= */}

      <Card>

        <SectionTitle>Invite Friends</SectionTitle>

        <Row>
          <Input
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleInvite}>Send Invite</Button>
        </Row>

      </Card>


      {/* ================= Withdraw ================= */}

      <Card>

        <SectionTitle>Withdraw Earnings</SectionTitle>

        <WithdrawBox>

          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button onClick={handleWithdraw}>
            Withdraw
          </Button>

        </WithdrawBox>

      </Card>


      {/* ================= History ================= */}

      <Card>

        <SectionTitle>Referral History</SectionTitle>

        <Table>

          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Earning ($)</Th>
            </tr>
          </thead>

          <tbody>

            {referrals.map((ref) => (
              <tr key={ref.id}>
                <Td>{ref.name}</Td>
                <Td>{ref.date}</Td>
                <Td>{ref.status}</Td>
                <Td>{ref.earning}</Td>
              </tr>
            ))}

          </tbody>

        </Table>

      </Card>


      {/* ================= Rules ================= */}

      <Card>

        <SectionTitle>How It Works</SectionTitle>

        <ul>
          <li>Share your referral link with friends.</li>
          <li>Friend signs up using your link.</li>
          <li>You earn rewards when they complete booking.</li>
          <li>Withdraw earnings anytime.</li>
        </ul>

      </Card>

    </Container>
  );
};

export default Referrals;