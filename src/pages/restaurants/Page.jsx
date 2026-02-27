import React, { useState } from "react";
import styled from "styled-components";

// ===== Import Pages =====
import BookingPage from "./id/booking/Page";
import ContactPage from "./id/contact/Page";
import FAQPage from "./id/faq/Page";
import GallaryPage from "./id/gallery/Page";
import LocationPage from "./id/location/Page";
import MenuPage from "./id/menu/Page";
import OfferPage from "./id/offers/Page";
import ReportPage from "./id/report/Page";
import ReviewsPage from "./id/reviews/Page";
import SimilarPage from "./id/similar/Page";

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
  font-size: 28px;
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
const Restaurantsid = () => {
  const tabs = [
    { name: "Booking", component: <BookingPage /> },
    { name: "Contact", component: <ContactPage /> },
    { name: "FAQ", component: <FAQPage /> },
    { name: "Gallary", component: <GallaryPage /> },
    { name: "Location", component: <LocationPage /> },
    { name: "Menu", component: <MenuPage /> },
    { name: "Offer", component: <OfferPage /> },
    { name: "Report", component: <ReportPage /> },
    { name: "Reviews", component: <ReviewsPage /> },
    { name: "Similar", component: <SimilarPage /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <Wrapper>
      <Title>Restaurant Details</Title>

      <Tabs>
        {tabs.map((t, i) => (
          <TabBtn
            key={i}
            active={activeTab === t.name}
            onClick={() => setActiveTab(t.name)}
          >
            {t.name}
          </TabBtn>
        ))}
      </Tabs>

      <div>
        {tabs.map(
          (t) => activeTab === t.name && <div key={t.name}>{t.component}</div>
        )}
      </div>
    </Wrapper>
  );
};

export default Restaurantsid;