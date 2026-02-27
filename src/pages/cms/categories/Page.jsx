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

/* ===========================
   Component
=========================== */
const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Travel" },
    { id: 2, name: "Food" },
    { id: 3, name: "Lifestyle" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCategory) {
      alert("Please enter category name");
      return;
    }
    const categoryToAdd = { id: Date.now(), name: newCategory };
    setCategories((prev) => [categoryToAdd, ...prev]);
    setNewCategory("");
  };

  const handleDelete = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <Wrapper>
      <Title>Categories Management</Title>

      <AddForm onSubmit={handleAdd}>
        <Input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Btn type="submit">Add Category</Btn>
      </AddForm>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.id}>
              <Td>{c.id}</Td>
              <Td>{c.name}</Td>
              <Td>
                <Btn color="#198754">Edit</Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(c.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Categories;