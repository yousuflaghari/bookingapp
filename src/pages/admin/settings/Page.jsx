// src/components/AdminSettings.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSave, FiRefreshCw } from "react-icons/fi";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f6f8;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

const TabsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${props=>props.active?"#007bff":"#e0e0e0"};
  color: ${props=>props.active?"#fff":"#333"};
  cursor: pointer;
  font-weight: bold;
  &:hover{
    background-color: ${props=>props.active?"#0069d9":"#d5d5d5"};
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const CheckboxWrapper = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`;

const ButtonGroup = styled.div`
  display:flex;
  gap:15px;
  margin-top:20px;
`;

const Button = styled.button`
  padding:12px 20px;
  border-radius:8px;
  border:none;
  background-color:#007bff;
  color:#fff;
  font-weight:bold;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  &:hover{ background-color:#0069d9; }
`;

const ResetButton = styled(Button)`
  background-color:#6c757d;
  &:hover{ background-color:#5a6268; }
`;

// Sample initial settings
const initialSettings = {
  general: { appName:"BookingApp", currency:"USD", timezone:"GMT+0" },
  booking: { autoApprove:true, maxGuests:5, cancellation:"24h before" },
  payment: { defaultMethod:"Credit Card", tax:10, fees:2 },
  notifications: { email:true, sms:false }
};

const AdminSettings = () => {
  const [settings,setSettings] = useState(initialSettings);
  const [activeTab,setActiveTab] = useState("general");

  const handleChange = (section,name,value)=>{
    setSettings(prev=>({
      ...prev,
      [section]: {...prev[section],[name]:value}
    }));
  };

  const handleCheckbox = (section,name)=>{
    setSettings(prev=>({
      ...prev,
      [section]: {...prev[section],[name]:!prev[section][name]}
    }));
  };

  const handleSave = ()=>{
    console.log("Saved settings:",settings);
    alert("Settings saved successfully!");
  };

  const handleReset = ()=>setSettings(initialSettings);

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Admin Settings</Title>
        </Header>

        <TabsWrapper>
          {["general","booking","payment","notifications"].map(tab=>(
            <TabButton key={tab} active={activeTab===tab} onClick={()=>setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase()+tab.slice(1)}
            </TabButton>
          ))}
        </TabsWrapper>

        <FormWrapper>
          {activeTab==="general" && <>
            <Input value={settings.general.appName} placeholder="App Name" onChange={e=>handleChange("general","appName",e.target.value)}/>
            <Input value={settings.general.currency} placeholder="Currency" onChange={e=>handleChange("general","currency",e.target.value)}/>
            <Input value={settings.general.timezone} placeholder="Timezone" onChange={e=>handleChange("general","timezone",e.target.value)}/>
          </>}

          {activeTab==="booking" && <>
            <CheckboxWrapper>
              <input type="checkbox" checked={settings.booking.autoApprove} onChange={()=>handleCheckbox("booking","autoApprove")}/>
              Auto-approve bookings
            </CheckboxWrapper>
            <Input type="number" value={settings.booking.maxGuests} placeholder="Max Guests" onChange={e=>handleChange("booking","maxGuests",e.target.value)}/>
            <Input value={settings.booking.cancellation} placeholder="Cancellation Policy" onChange={e=>handleChange("booking","cancellation",e.target.value)}/>
          </>}

          {activeTab==="payment" && <>
            <Select value={settings.payment.defaultMethod} onChange={e=>handleChange("payment","defaultMethod",e.target.value)}>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </Select>
            <Input type="number" value={settings.payment.tax} placeholder="Tax (%)" onChange={e=>handleChange("payment","tax",e.target.value)}/>
            <Input type="number" value={settings.payment.fees} placeholder="Additional Fees (%)" onChange={e=>handleChange("payment","fees",e.target.value)}/>
          </>}

          {activeTab==="notifications" && <>
            <CheckboxWrapper>
              <input type="checkbox" checked={settings.notifications.email} onChange={()=>handleCheckbox("notifications","email")}/>
              Email Notifications
            </CheckboxWrapper>
            <CheckboxWrapper>
              <input type="checkbox" checked={settings.notifications.sms} onChange={()=>handleCheckbox("notifications","sms")}/>
              SMS Notifications
            </CheckboxWrapper>
          </>}

          <ButtonGroup>
            <Button onClick={handleSave}><FiSave/> Save Settings</Button>
            <ResetButton onClick={handleReset}><FiRefreshCw/> Reset</ResetButton>
          </ButtonGroup>
        </FormWrapper>
      </Container>
    </>
  )
};

export default AdminSettings;