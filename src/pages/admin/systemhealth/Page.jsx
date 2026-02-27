// src/components/AdminSystemHealth.jsx
import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiRefreshCw } from "react-icons/fi";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f6f8;
    margin:0;
    padding:0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
`;

const Title = styled.h1`
  font-size:28px;
  color:#333;
`;

const RefreshButton = styled.button`
  padding:10px 16px;
  border-radius:8px;
  border:none;
  background-color:#007bff;
  color:#fff;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:bold;
  &:hover{ background-color:#0069d9; }
`;

const Cards = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:30px;
`;

const Card = styled.div`
  flex:1 1 200px;
  background-color:#e6f7ff;
  padding:20px;
  border-radius:12px;
  text-align:center;
  box-shadow:0 3px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  margin:0;
  font-size:16px;
  color:#555;
`;

const CardValue = styled.h2`
  margin:10px 0 0 0;
  font-size:28px;
  color:#007bff;
`;

const ProgressWrapper = styled.div`
  margin-top:10px;
  background:#ddd;
  border-radius:8px;
  height:12px;
`;

const Progress = styled.div`
  height:12px;
  border-radius:8px;
  background-color:${props=>props.color || "#007bff"};
  width:${props=>props.percent}%;
  transition:width 0.3s;
`;

const Alerts = styled.div`
  margin-top:30px;
  background-color:#fff3cd;
  padding:15px;
  border-radius:8px;
  border:1px solid #ffeeba;
`;

const AlertItem = styled.div`
  margin-bottom:8px;
  color:#856404;
`;

const AdminSystemHealth = () => {
  const [health,setHealth] = useState({
    serverStatus:"Online",
    uptime:"72h 15m",
    apiResponse:120,
    dbStatus:"Connected",
    cpu:45,
    ram:60,
    storage:70,
    activeUsers:120,
    alerts:["Disk usage > 70%","Memory usage > 80%"]
  });

  const refreshHealth = () => {
    // Simulate API refresh with random numbers
    setHealth(prev=>({
      ...prev,
      apiResponse:Math.floor(Math.random()*200),
      cpu:Math.floor(Math.random()*100),
      ram:Math.floor(Math.random()*100),
      storage:Math.floor(Math.random()*100),
      activeUsers:Math.floor(Math.random()*200)
    }));
  };

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>System Health</Title>
          <RefreshButton onClick={refreshHealth}><FiRefreshCw/> Refresh</RefreshButton>
        </Header>

        <Cards>
          <Card><CardTitle>Server Status</CardTitle><CardValue>{health.serverStatus}</CardValue></Card>
          <Card><CardTitle>Uptime</CardTitle><CardValue>{health.uptime}</CardValue></Card>
          <Card><CardTitle>API Response (ms)</CardTitle><CardValue>{health.apiResponse}</CardValue></Card>
          <Card><CardTitle>DB Status</CardTitle><CardValue>{health.dbStatus}</CardValue></Card>
        </Cards>

        <Cards>
          <Card>
            <CardTitle>CPU Usage</CardTitle>
            <CardValue>{health.cpu}%</CardValue>
            <ProgressWrapper>
              <Progress percent={health.cpu} color={health.cpu>80?"#dc3545":"#007bff"}/>
            </ProgressWrapper>
          </Card>
          <Card>
            <CardTitle>RAM Usage</CardTitle>
            <CardValue>{health.ram}%</CardValue>
            <ProgressWrapper>
              <Progress percent={health.ram} color={health.ram>80?"#dc3545":"#007bff"}/>
            </ProgressWrapper>
          </Card>
          <Card>
            <CardTitle>Storage Usage</CardTitle>
            <CardValue>{health.storage}%</CardValue>
            <ProgressWrapper>
              <Progress percent={health.storage} color={health.storage>80?"#dc3545":"#007bff"}/>
            </ProgressWrapper>
          </Card>
          <Card>
            <CardTitle>Active Users</CardTitle>
            <CardValue>{health.activeUsers}</CardValue>
          </Card>
        </Cards>

        <Alerts>
          <h3>Alerts / Warnings</h3>
          {health.alerts.map((a,i)=><AlertItem key={i}>{a}</AlertItem>)}
        </Alerts>
      </Container>
    </>
  )
};

export default AdminSystemHealth;