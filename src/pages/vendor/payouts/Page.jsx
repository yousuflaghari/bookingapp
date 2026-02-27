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

const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  min-width: 200px;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
`;

const CardValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #222;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// ================= Component =================

const VendorPayout = () => {

  const [payouts, setPayouts] = useState([
    { id: 1, date: "2026-02-01", amount: "$500", status: "Paid" },
    { id: 2, date: "2026-02-15", amount: "$300", status: "Pending" },
    { id: 3, date: "2026-03-01", amount: "$450", status: "Paid" }
  ]);

  const [requestAmount, setRequestAmount] = useState("");

  const totalEarnings = payouts.reduce((acc,p)=>acc + parseFloat(p.amount.replace("$","")),0);
  const pending = payouts.filter(p=>p.status==="Pending").reduce((acc,p)=>acc + parseFloat(p.amount.replace("$","")),0);
  const paid = payouts.filter(p=>p.status==="Paid").reduce((acc,p)=>acc + parseFloat(p.amount.replace("$","")),0);

  const handleRequest = () => {
    if(!requestAmount || isNaN(requestAmount) || parseFloat(requestAmount) <= 0){
      alert("Enter valid amount");
      return;
    }
    setPayouts([...payouts, { id: Date.now(), date: new Date().toISOString().slice(0,10), amount: `$${requestAmount}`, status: "Pending" }]);
    setRequestAmount("");
    alert("Payout request submitted!");
  };

  return (
    <Container>
      <Title>Payouts & Earnings</Title>

      {/* Summary Cards */}
      <Cards>
        <Card>
          <CardTitle>Total Earnings</CardTitle>
          <CardValue>${totalEarnings}</CardValue>
        </Card>
        <Card>
          <CardTitle>Pending</CardTitle>
          <CardValue>${pending}</CardValue>
        </Card>
        <Card>
          <CardTitle>Paid</CardTitle>
          <CardValue>${paid}</CardValue>
        </Card>
      </Cards>

      {/* Request Payout */}
      <Card>
        <h2>Request Payout</h2>
        <Field>
          <label>Amount ($)</label>
          <Input value={requestAmount} onChange={e=>setRequestAmount(e.target.value)} />
        </Field>
        <Button onClick={handleRequest}>Submit Request</Button>
      </Card>

      {/* Payout History */}
      <Card>
        <h2>Payout History</h2>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {payouts.map(p=>(
              <tr key={p.id}>
                <Td>{p.date}</Td>
                <Td>{p.amount}</Td>
                <Td>{p.status}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

    </Container>
  );
};

export default VendorPayout;