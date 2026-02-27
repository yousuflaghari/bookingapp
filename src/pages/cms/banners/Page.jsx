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

const AddBannerForm = styled.form`
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

const FileInput = styled.input`
  padding: 10px;
`;

const Banners = () => {
  const [banners, setBanners] = useState([
    { id: 1, title: "Summer Sale", image: "https://via.placeholder.com/150", status: "Active" },
    { id: 2, title: "New Collection", image: "https://via.placeholder.com/150", status: "Inactive" },
  ]);

  const [newBanner, setNewBanner] = useState({ title: "", image: "", status: "Active" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setNewBanner((prev) => ({ ...prev, image: URL.createObjectURL(files[0]) }));
    } else {
      setNewBanner((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddBanner = (e) => {
    e.preventDefault();
    if (!newBanner.title || !newBanner.image) {
      alert("Please provide title and image");
      return;
    }
    const bannerToAdd = { ...newBanner, id: Date.now() };
    setBanners((prev) => [bannerToAdd, ...prev]);
    setNewBanner({ title: "", image: "", status: "Active" });
  };

  const handleDelete = (id) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Wrapper>
      <Title>Banners Management</Title>

      <AddBannerForm onSubmit={handleAddBanner}>
        <Input
          type="text"
          name="title"
          placeholder="Banner Title"
          value={newBanner.title}
          onChange={handleChange}
        />
        <FileInput type="file" name="image" onChange={handleChange} />
        <select name="status" value={newBanner.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <Btn type="submit">Add Banner</Btn>
      </AddBannerForm>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Image</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {banners.map((b) => (
            <tr key={b.id}>
              <Td>{b.id}</Td>
              <Td>{b.title}</Td>
              <Td>
                <img src={b.image} alt={b.title} style={{ width: "100px", borderRadius: "8px" }} />
              </Td>
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

export default Banners;