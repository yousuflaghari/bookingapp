import React, { useState } from "react";
import styled from "styled-components";
import  RoomsPage  from "./rooms/Page";
import AmenitiesPage from "./amenities/Page";
import ReviewsPage from "./reviews/Page";
import PoliciesPage from "./policies/Page";
import OffersPage from "./offers/Page";
import SimilarHotelsPage from "./similar/Page";
import LocationPage from "./location/Page";
import HostPage from "./host/Page";
import NearbyPage from "./nearby/Page";
import ReportsPage from "./report/Page";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
  background: #f4f6f9;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: #222;
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TabBtn = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #0d6efd;
  background: ${(props) => (props.active ? "#0d6efd" : "white")};
  color: ${(props) => (props.active ? "white" : "#0d6efd")};
  cursor: pointer;
  &:hover {
    background: #0d6efd;
    color: white;
  }
`;

/* ===========================
   Component
=========================== */
const Hotels_id = () => {
  const tabs = [
    { name: "Rooms", component: <RoomsPage /> },
    { name: "Amenities", component: <AmenitiesPage /> },
    { name: "Reviews", component: <ReviewsPage /> },
    { name: "Policies", component: <PoliciesPage /> },
    { name: "Offers", component: <OffersPage /> },
    { name: "Similar Hotels", component: <SimilarHotelsPage /> },
    { name: "Location", component: <LocationPage /> },
    { name: "Host", component: <HostPage /> },
    { name: "Nearby", component: <NearbyPage /> },
    { name: "Reports", component: <ReportsPage /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <Wrapper>
      <Title>Hotel Details</Title>
      <Tabs>
        {tabs.map((t, i) => (
          <TabBtn key={i} active={activeTab===t.name} onClick={()=>setActiveTab(t.name)}>
            {t.name}
          </TabBtn>
        ))}
      </Tabs>

      <div>
        {tabs.map(t => activeTab===t.name ? <div key={t.name}>{t.component}</div> : null)}
      </div>
    </Wrapper>
  );
};

export default Hotels_id;