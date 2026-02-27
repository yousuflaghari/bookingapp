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

const ProgressBar = styled.div`
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
  height: 12px;
  margin-top: 10px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: #28a745;
`;

const RewardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 15px;
`;

const RewardCard = styled.div`
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
  background: #fafafa;
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #007bff;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
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
  background: ${props => props.type === "Earn" ? "#28a745" : "#dc3545"};
`;

// ====================== Component ======================

const Rewards = () => {

  const [points, setPoints] = useState(320);

  const rewardsList = [
    { id: 1, name: "10% Discount Coupon", cost: 100 },
    { id: 2, name: "Free Breakfast", cost: 200 },
    { id: 3, name: "Room Upgrade", cost: 300 },
    { id: 4, name: "Free Night Stay", cost: 500 },
  ];

  const transactions = [
    { id: 1, date: "2025-01-01", type: "Earn", points: 50, desc: "Booking Reward" },
    { id: 2, date: "2025-01-05", type: "Redeem", points: 100, desc: "Coupon Redeemed" },
    { id: 3, date: "2025-01-10", type: "Earn", points: 70, desc: "Referral Bonus" },
  ];

  const redeemReward = (cost) => {

    if (points >= cost) {
      setPoints(points - cost);
      alert("Reward redeemed!");
    } else {
      alert("Not enough points!");
    }

  };

  return (
    <Container>

      <Title>My Rewards</Title>

      {/* ================= Stats ================= */}

      <StatsGrid>

        <StatCard>
          <StatNumber>{points}</StatNumber>
          <StatLabel>Total Points</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>Gold</StatNumber>
          <StatLabel>Membership Tier</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>680</StatNumber>
          <StatLabel>Points to Next Level</StatLabel>
        </StatCard>

      </StatsGrid>


      {/* ================= Progress ================= */}

      <Card>

        <SectionTitle>Level Progress</SectionTitle>

        <ProgressBar>
          <Progress width={(points / 1000) * 100} />
        </ProgressBar>

      </Card>


      {/* ================= Rewards Catalog ================= */}

      <Card>

        <SectionTitle>Available Rewards</SectionTitle>

        <RewardGrid>

          {rewardsList.map(reward => (
            <RewardCard key={reward.id}>

              <h4>{reward.name}</h4>
              <p>Cost: {reward.cost} points</p>

              <Button
                onClick={() => redeemReward(reward.cost)}
              >
                Redeem
              </Button>

            </RewardCard>
          ))}

        </RewardGrid>

      </Card>


      {/* ================= Transactions ================= */}

      <Card>

        <SectionTitle>Points History</SectionTitle>

        <Table>

          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Points</Th>
            </tr>
          </thead>

          <tbody>

            {transactions.map(tx => (
              <tr key={tx.id}>
                <Td>{tx.date}</Td>
                <Td>{tx.desc}</Td>
                <Td>
                  <Badge type={tx.type}>
                    {tx.type}
                  </Badge>
                </Td>
                <Td>{tx.points}</Td>
              </tr>
            ))}

          </tbody>

        </Table>

      </Card>

    </Container>
  );
};

export default Rewards;