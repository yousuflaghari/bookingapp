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
  flex-direction: column;
  gap: 12px;
  background: white;
  padding: 20px;
  border-radius: 12px;
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
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const SEO = () => {
  const [seoList, setSeoList] = useState([
    { id: 1, page: "About Us", title: "About Us - Company", description: "Learn about our company.", keywords: "about, company, info", status: "Published" },
    { id: 2, page: "Contact", title: "Contact Us - Company", description: "Get in touch with us.", keywords: "contact, email, phone", status: "Draft" },
  ]);

  const [newSeo, setNewSeo] = useState({ page: "", title: "", description: "", keywords: "", status: "Draft" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSeo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newSeo.page || !newSeo.title) {
      alert("Please provide page name and meta title");
      return;
    }
    const seoToAdd = { ...newSeo, id: Date.now() };
    setSeoList((prev) => [seoToAdd, ...prev]);
    setNewSeo({ page: "", title: "", description: "", keywords: "", status: "Draft" });
  };

  const handleDelete = (id) => {
    setSeoList((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <Wrapper>
      <Title>SEO Management</Title>

      <AddForm onSubmit={handleAdd}>
        <Input type="text" name="page" placeholder="Page Name" value={newSeo.page} onChange={handleChange} />
        <Input type="text" name="title" placeholder="Meta Title" value={newSeo.title} onChange={handleChange} />
        <TextArea name="description" placeholder="Meta Description" rows={3} value={newSeo.description} onChange={handleChange} />
        <Input type="text" name="keywords" placeholder="Keywords (comma separated)" value={newSeo.keywords} onChange={handleChange} />
        <Select name="status" value={newSeo.status} onChange={handleChange}>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </Select>
        <Btn type="submit">Add SEO</Btn>
      </AddForm>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Page</Th>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Keywords</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {seoList.map((s) => (
            <tr key={s.id}>
              <Td>{s.id}</Td>
              <Td>{s.page}</Td>
              <Td>{s.title}</Td>
              <Td>{s.description}</Td>
              <Td>{s.keywords}</Td>
              <Td>{s.status}</Td>
              <Td>
                <Btn color="#198754">Edit</Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(s.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default SEO;