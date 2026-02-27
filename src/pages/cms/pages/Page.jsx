import React, { useState } from "react";
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #0d6efd;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Btn = styled.button`
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.color || "#0d6efd"};

  &:hover {
    opacity: 0.9;
  }
`;

const AddForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 1;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 2;
  resize: none;
`;

/* ===========================
   Component
=========================== */
const Pages = () => {
  const [pages, setPages] = useState([
    { id: 1, title: "About Us", slug: "/about", status: "Published" },
    { id: 2, title: "Contact", slug: "/contact", status: "Published" },
    { id: 3, title: "Privacy Policy", slug: "/privacy-policy", status: "Draft" },
  ]);

  const [newPage, setNewPage] = useState({ title: "", slug: "", status: "Draft" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPage((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newPage.title || !newPage.slug) {
      alert("Please provide title and slug");
      return;
    }
    const pageToAdd = { ...newPage, id: Date.now() };
    setPages((prev) => [pageToAdd, ...prev]);
    setNewPage({ title: "", slug: "", status: "Draft" });
  };

  const handleDelete = (id) => {
    setPages((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Wrapper>
      <Title>Pages Management</Title>

      <AddForm onSubmit={handleAdd}>
        <Input
          type="text"
          name="title"
          placeholder="Page Title"
          value={newPage.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="slug"
          placeholder="Page Slug"
          value={newPage.slug}
          onChange={handleChange}
        />
        <select name="status" value={newPage.status} onChange={handleChange}>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>
        <Btn type="submit">Add Page</Btn>
      </AddForm>

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
          {pages.map((p) => (
            <tr key={p.id}>
              <Td>{p.id}</Td>
              <Td>{p.title}</Td>
              <Td>{p.slug}</Td>
              <Td>{p.status}</Td>
              <Td>
                <Btn color="#198754">Edit</Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(p.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Pages;