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
const Tags = () => {
  const [tags, setTags] = useState([
    { id: 1, name: "Travel" },
    { id: 2, name: "Tips" },
    { id: 3, name: "Hotels" },
  ]);

  const [newTag, setNewTag] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTag) {
      alert("Please enter tag name");
      return;
    }
    const tagToAdd = { id: Date.now(), name: newTag };
    setTags((prev) => [tagToAdd, ...prev]);
    setNewTag("");
  };

  const handleDelete = (id) => {
    setTags((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Wrapper>
      <Title>Tags Management</Title>

      <AddForm onSubmit={handleAdd}>
        <Input
          type="text"
          placeholder="New Tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <Btn type="submit">Add Tag</Btn>
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
          {tags.map((t) => (
            <tr key={t.id}>
              <Td>{t.id}</Td>
              <Td>{t.name}</Td>
              <Td>
                <Btn color="#198754">Edit</Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(t.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Tags;