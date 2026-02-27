import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2, FiStar } from "react-icons/fi";

// ===== Global Style =====
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    margin: 0;
    padding: 0;
  }
`;

// ===== Styled Components =====
const Container = styled.div`
  max-width: 950px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 26px;
  color: #333;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #218838;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
  background: #007bff;
  color: #fff;
`;

const Td = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  color: #f4b400;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 12px;
  font-size: 18px;
  cursor: pointer;
  color: #555;

  svg:hover {
    color: #007bff;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 420px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #0069d9;
  }
`;

// ===== Sample Data =====
const initialRatings = [
  { id: 1, label: "Excellent", min: 4.5, max: 5, active: true },
  { id: 2, label: "Very Good", min: 4, max: 4.4, active: true },
  { id: 3, label: "Good", min: 3, max: 3.9, active: false },
];

// ===== Helper =====
const renderStars = (rating) => {
  const stars = [];
  const rounded = Math.round(rating);
  for (let i = 0; i < rounded; i++) {
    stars.push(<FiStar key={i} />);
  }
  return stars;
};

// ===== Component =====
const RatingPage = () => {
  const [ratings, setRatings] = useState(initialRatings);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [form, setForm] = useState({
    label: "",
    min: 0,
    max: 5,
    active: true,
  });

  const openAddModal = () => {
    setForm({ label: "", min: 0, max: 5, active: true });
    setEditItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setForm(item);
    setEditItem(item.id);
    setModalOpen(true);
  };

  const saveRating = () => {
    if (editItem) {
      setRatings((prev) =>
        prev.map((r) =>
          r.id === editItem ? { ...form, id: editItem } : r
        )
      );
    } else {
      setRatings([{ ...form, id: Date.now() }, ...ratings]);
    }
    setModalOpen(false);
  };

  const deleteRating = (id) => {
    setRatings((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Header>
          <Title>Rating Filters</Title>
          <AddButton onClick={openAddModal}>
            <FiPlus /> Add Rating
          </AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Label</Th>
                <Th>Min Rating</Th>
                <Th>Max Rating</Th>
                <Th>Preview</Th>
                <Th>Active</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {ratings.map((r) => (
                <tr key={r.id}>
                  <Td>{r.label}</Td>
                  <Td>{r.min}</Td>
                  <Td>{r.max}</Td>
                  <Td>
                    <Stars>{renderStars(r.max)}</Stars>
                  </Td>
                  <Td>{r.active ? "Yes" : "No"}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit
                        title="Edit"
                        onClick={() => openEditModal(r)}
                      />
                      <FiTrash2
                        title="Delete"
                        onClick={() => deleteRating(r.id)}
                      />
                    </ActionWrapper>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        {modalOpen && (
          <ModalOverlay>
            <ModalContent>
              <Input
                placeholder="Label (Excellent, Good...)"
                value={form.label}
                onChange={(e) =>
                  setForm({ ...form, label: e.target.value })
                }
              />

              <Input
                type="number"
                step="0.1"
                placeholder="Min Rating"
                value={form.min}
                onChange={(e) =>
                  setForm({ ...form, min: Number(e.target.value) })
                }
              />

              <Input
                type="number"
                step="0.1"
                placeholder="Max Rating"
                value={form.max}
                onChange={(e) =>
                  setForm({ ...form, max: Number(e.target.value) })
                }
              />

              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) =>
                    setForm({ ...form, active: e.target.checked })
                  }
                />
                Active
              </CheckboxLabel>

              <Button onClick={saveRating}>
                {editItem ? "Update Rating" : "Add Rating"}
              </Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default RatingPage;