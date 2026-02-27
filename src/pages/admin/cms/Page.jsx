import React, { useState } from "react";
import styled from "styled-components";

// =============================
// Styled Components
// =============================

const Container = styled.div`
  padding: 24px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #4f46e5;
  color: white;
  cursor: pointer;
  &:hover {
    background: #4338ca;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #f3f4f6;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 250px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? "#4f46e5" : "#e5e7eb")};
  color: ${({ active }) => (active ? "white" : "black")};
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

// =============================
// Mock Data
// =============================

const initialPages = [
  { id: 1, title: "Home", slug: "home", status: "Published" },
  { id: 2, title: "About", slug: "about", status: "Draft" },
  { id: 3, title: "Contact", slug: "contact", status: "Published" },
];

// =============================
// Component
// =============================

const CMSAdminPage = () => {
  const [pages, setPages] = useState(initialPages);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("pages");

  const filteredPages = pages.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>CMS Management</Title>
        <Button>Create Page</Button>
      </Header>

      <Tabs>
        <TabButton
          active={activeTab === "pages"}
          onClick={() => setActiveTab("pages")}
        >
          Pages
        </TabButton>
        <TabButton
          active={activeTab === "menus"}
          onClick={() => setActiveTab("menus")}
        >
          Menus
        </TabButton>
        <TabButton
          active={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </TabButton>
      </Tabs>

      {activeTab === "pages" && (
        <Card>
          <Input
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Slug</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filteredPages.map((page) => (
                <tr key={page.id}>
                  <Td>{page.id}</Td>
                  <Td>{page.title}</Td>
                  <Td>{page.slug}</Td>
                  <Td>{page.status}</Td>
                  <Td>
                    <Button>Edit</Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}

      {activeTab === "menus" && (
        <Card>
          <h3>Menu Builder</h3>
          <p>Menu management feature coming soon...</p>
        </Card>
      )}

      {activeTab === "settings" && (
        <Card>
          <h3>Website Settings</h3>
          <p>Global CMS settings form coming soon...</p>
        </Card>
      )}
    </Container>
  );
};

export default CMSAdminPage;
