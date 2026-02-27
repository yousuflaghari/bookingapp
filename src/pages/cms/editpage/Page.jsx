import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  color: #222;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 20px;
  border-radius: 12px;
`;

const Label = styled.label`
  font-weight: bold;
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
  resize: vertical;
  min-height: 150px;
`;

const Btn = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background: #0d6efd;
  width: 150px;

  &:hover {
    opacity: 0.9;
  }
`;

/* ===========================
   Component
=========================== */
const EditPage = ({ pageId }) => {
  // Example existing pages
  const existingPages = [
    { id: 1, title: "About Us", slug: "/about", content: "This is the About Us page content." },
    { id: 2, title: "Contact", slug: "/contact", content: "This is the Contact page content." },
    { id: 3, title: "Privacy Policy", slug: "/privacy-policy", content: "Privacy Policy details..." },
  ];

  const [page, setPage] = useState({ title: "", slug: "", content: "" });

  useEffect(() => {
    const pageToEdit = existingPages.find((p) => p.id === pageId) || existingPages[0];
    setPage(pageToEdit);
  }, [pageId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPage((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: update page logic here
    alert(`Page "${page.title}" updated successfully!`);
  };

  return (
    <Wrapper>
      <Title>Edit Page</Title>

      <Form onSubmit={handleSubmit}>
        <Label>Page Title</Label>
        <Input
          type="text"
          name="title"
          value={page.title}
          onChange={handleChange}
        />

        <Label>Page Slug</Label>
        <Input
          type="text"
          name="slug"
          value={page.slug}
          onChange={handleChange}
        />

        <Label>Content</Label>
        <TextArea
          name="content"
          value={page.content}
          onChange={handleChange}
        />

        <Btn type="submit">Update Page</Btn>
      </Form>
    </Wrapper>
  );
};

export default EditPage;