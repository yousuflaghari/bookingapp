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

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

/* ===========================
   Component
=========================== */
const BlogEditors = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 10 Hotels in Paris",
      author: "Admin",
      category: "Travel",
      status: "Published",
    },
    {
      id: 2,
      title: "How to Get the Best Deals",
      author: "Editor",
      category: "Tips",
      status: "Draft",
    },
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    category: "",
    status: "Draft",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.author || !newBlog.category) {
      alert("Please fill all fields");
      return;
    }
    const blogToAdd = { ...newBlog, id: Date.now() };
    setBlogs((prev) => [blogToAdd, ...prev]);
    setNewBlog({ title: "", author: "", category: "", status: "Draft" });
  };

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Wrapper>
      <Title>Blog Management</Title>

      <AddForm onSubmit={handleAdd}>
        <Input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="author"
          placeholder="Author"
          value={newBlog.author}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={newBlog.category}
          onChange={handleChange}
        />
        <Select name="status" value={newBlog.status} onChange={handleChange}>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </Select>
        <Btn type="submit">Add Blog</Btn>
      </AddForm>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Category</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b.id}>
              <Td>{b.id}</Td>
              <Td>{b.title}</Td>
              <Td>{b.author}</Td>
              <Td>{b.category}</Td>
              <Td>{b.status}</Td>
              <Td>
                <Btn color="#198754">Edit</Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(b.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default BlogEditors;