import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const HostCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: white;
  border-radius: 12px;
  border: 1px solid #ddd;
  overflow: hidden;
  margin-bottom: 20px;
`;

const HostImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px 0 0 12px;
`;

const HostContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HostName = styled.h3`
  font-size: 24px;
  margin: 0;
  color: #0d6efd;
`;

const HostBio = styled.p`
  font-size: 16px;
  color: #555;
`;

const HostInfo = styled.div`
  font-size: 14px;
  color: #333;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialBtn = styled.a`
  padding: 8px 12px;
  border-radius: 6px;
  background: #0d6efd;
  color: white;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;

const TabSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const Tab = styled.button`
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

const TabContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
`;

const ReviewItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const ReviewName = styled.span`
  font-weight: bold;
  color: #0d6efd;
`;

const ReviewText = styled.p`
  margin: 5px 0 0 0;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const SubmitBtn = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #0d6efd;
  color: white;
  width: fit-content;

  &:hover {
    opacity: 0.9;
  }
`;

/* ===========================
   Component
=========================== */
const HostPage = () => {
  const [activeTab, setActiveTab] = useState("info");

  const host = {
    name: "John Doe",
    photo: "https://picsum.photos/250/250?random=10",
    bio: "John has been hosting guests for over 10 years. He loves making people feel at home and providing excellent experiences.",
    phone: "+1 234 567 890",
    email: "john@hotel.com",
    social: [
      { name: "Facebook", link: "#" },
      { name: "Twitter", link: "#" },
      { name: "Instagram", link: "#" }
    ]
  };

  const reviews = [
    { name: "Alice", text: "Great host! Very friendly and helpful." },
    { name: "Bob", text: "Clean rooms and amazing hospitality." },
    { name: "Charlie", text: "Highly recommend! Everything was perfect." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent to host!");
  };

  return (
    <Wrapper>
      <Title>Host Details</Title>
      <HostCard>
        <HostImage src={host.photo} alt={host.name} />
        <HostContent>
          <HostName>{host.name}</HostName>
          <HostBio>{host.bio}</HostBio>
          <HostInfo>Phone: {host.phone}</HostInfo>
          <HostInfo>Email: {host.email}</HostInfo>
          <SocialLinks>
            {host.social.map((s, i) => (
              <SocialBtn key={i} href={s.link} target="_blank">{s.name}</SocialBtn>
            ))}
          </SocialLinks>
        </HostContent>
      </HostCard>

      <TabSection>
        <Tab active={activeTab==="info"} onClick={()=>setActiveTab("info")}>Info</Tab>
        <Tab active={activeTab==="reviews"} onClick={()=>setActiveTab("reviews")}>Reviews</Tab>
        <Tab active={activeTab==="contact"} onClick={()=>setActiveTab("contact")}>Contact</Tab>
      </TabSection>

      <TabContent>
        {activeTab==="info" && (
          <div>
            <p>{host.bio}</p>
            <ul>
              <li>Experience: 10+ years hosting</li>
              <li>Languages: English, French</li>
              <li>Verified Host</li>
            </ul>
          </div>
        )}

        {activeTab==="reviews" && (
          <div>
            {reviews.map((r, i) => (
              <ReviewItem key={i}>
                <ReviewName>{r.name}</ReviewName>
                <ReviewText>{r.text}</ReviewText>
              </ReviewItem>
            ))}
          </div>
        )}

        {activeTab==="contact" && (
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Message" rows="5" required></TextArea>
            <SubmitBtn>Send Message</SubmitBtn>
          </Form>
        )}
      </TabContent>
    </Wrapper>
  );
};

export default HostPage;