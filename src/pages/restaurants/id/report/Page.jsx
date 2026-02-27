import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #222;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: relative;
`;

const Status = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${(props) => (props.resolved ? "#28a745" : "#ffc107")};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-top: 6px;
  color: #555;
`;

const Value = styled.div`
  color: #222;
`;

const BtnGroup = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.bg || "#0d6efd"};

  &:hover {
    opacity: 0.85;
  }
`;

/* ===========================
   Component
=========================== */

const ReportPage = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      user: "Ali Khan",
      reason: "Poor Service",
      message: "Waiter behavior was not good.",
      date: "2026-02-20",
      resolved: false,
    },
    {
      id: 2,
      user: "Sara Ahmed",
      reason: "Food Quality",
      message: "Food was cold and tasteless.",
      date: "2026-02-18",
      resolved: true,
    },
  ]);

  const resolveReport = (id) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, resolved: true } : r
      )
    );
  };

  const deleteReport = (id) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Container>
      <Title>Restaurant Reports</Title>

      {reports.map((report) => (
        <Card key={report.id}>
          <Status resolved={report.resolved}>
            {report.resolved ? "Resolved" : "Pending"}
          </Status>

          <Label>User</Label>
          <Value>{report.user}</Value>

          <Label>Reason</Label>
          <Value>{report.reason}</Value>

          <Label>Message</Label>
          <Value>{report.message}</Value>

          <Label>Date</Label>
          <Value>{report.date}</Value>

          <BtnGroup>
            {!report.resolved && (
              <Button
                bg="#28a745"
                onClick={() => resolveReport(report.id)}
              >
                Mark Resolved
              </Button>
            )}
            <Button
              bg="#dc3545"
              onClick={() => deleteReport(report.id)}
            >
              Delete
            </Button>
          </BtnGroup>
        </Card>
      ))}
    </Container>
  );
};

export default ReportPage;