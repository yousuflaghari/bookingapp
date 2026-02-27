import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

// =============================
// Styled Components
// =============================
const Page = styled(motion.div)`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: ${(p) => (p.primary ? "#2563eb" : "#fff")};
  color: ${(p) => (p.primary ? "#fff" : "#333")};
  cursor: pointer;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  padding: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f3f4f6;
  font-size: 13px;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 260px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 600px;
  max-width: 95%;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 8px;
`;

// =============================
// Mock Blog Data
// =============================
const generateBlogs = () => {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    author: `Admin`,
    status: i % 2 === 0 ? "Published" : "Draft",
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
    content: `This is demo content for blog ${i + 1}`,
  }));
};

// =============================
// Main Component
// =============================
const AdminBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    setBlogs(generateBlogs());
  }, []);

  const filtered = useMemo(() => {
    return blogs.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [blogs, search]);

  const openCreate = () => {
    setForm({ title: "", content: "" });
    setSelected(null);
    setOpen(true);
  };

  const openEdit = (blog) => {
    setSelected(blog);
    setForm({ title: blog.title, content: blog.content });
    setOpen(true);
  };

  const saveBlog = () => {
    if (selected) {
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === selected.id ? { ...b, ...form } : b
        )
      );
    } else {
      const newBlog = {
        id: blogs.length + 1,
        ...form,
        author: "Admin",
        status: "Draft",
        date: new Date().toLocaleDateString(),
      };
      setBlogs((prev) => [newBlog, ...prev]);
    }
    setOpen(false);
  };

  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Page initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header>
        <Title>Blog Management</Title>
        <div style={{ display: "flex", gap: 10 }}>
          <Input
            placeholder="Search blog..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button primary onClick={openCreate}>
            <Plus size={16} /> New Blog
          </Button>
        </div>
      </Header>

      <Card>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((blog) => (
              <tr key={blog.id}>
                <Td>#{blog.id}</Td>
                <Td>{blog.title}</Td>
                <Td>{blog.author}</Td>
                <Td>{blog.status}</Td>
                <Td>{blog.date}</Td>
                <Td>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Button onClick={() => openEdit(blog)}>
                      <Edit size={14} />
                    </Button>
                    <Button onClick={() => deleteBlog(blog.id)}>
                      <Trash2 size={14} />
                    </Button>
                    <Button onClick={() => alert(blog.content)}>
                      <Eye size={14} />
                    </Button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {open && (
        <ModalOverlay onClick={() => setOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3>{selected ? "Edit Blog" : "Create Blog"}</h3>
            <div style={{ marginTop: 10 }}>
              <label>Title</label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <label>Content</label>
              <TextArea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
            </div>

            <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
              <Button primary onClick={saveBlog}>Save</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </Page>
  );
};

export default AdminBlogPage;
