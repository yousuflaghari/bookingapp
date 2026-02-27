import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiStar, FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

// ===== Global Style =====
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
    margin:0;
    padding:0;
  }
`;

// ===== Styled Components =====
const Container = styled.div`
  max-width:1100px;
  margin:40px auto;
  background:#fff;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
`;

const Title = styled.h2`
  display:flex;
  align-items:center;
  gap:10px;
  color:#333;
`;

const AddButton = styled.button`
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 16px;
  border:none;
  border-radius:8px;
  background:#ffc107;
  color:#000;
  cursor:pointer;
  font-weight:bold;

  &:hover {
    background:#e0a800;
  }
`;

const Table = styled.table`
  width:100%;
  border-collapse:collapse;
`;

const Th = styled.th`
  background:#343a40;
  color:#fff;
  padding:12px;
  text-align:left;
`;

const Td = styled.td`
  padding:12px;
  border-bottom:1px solid #eee;
`;

const Badge = styled.span`
  padding:6px 10px;
  border-radius:6px;
  font-size:12px;
  font-weight:bold;
  color:#fff;
  background:${props => props.active ? "#28a745" : "#6c757d"};
`;

const ActionGroup = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;

  svg:hover {
    color:#007bff;
  }
`;

const ModalOverlay = styled.div`
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Modal = styled.div`
  background:#fff;
  padding:25px;
  border-radius:12px;
  width:450px;
`;

const Input = styled.input`
  width:100%;
  padding:10px;
  margin-bottom:12px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const CheckboxLabel = styled.label`
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:15px;
`;

const SaveButton = styled.button`
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#343a40;
  color:#fff;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#23272b;
  }
`;

// ===== Sample Data =====
const initialData = [
  {
    id: 1,
    name: "BBQ Nation",
    views: 1200,
    orders: 450,
    score: 92,
    popular: true,
  },
  {
    id: 2,
    name: "Pizza Hub",
    views: 800,
    orders: 210,
    score: 75,
    popular: false,
  },
];

// ===== Component =====
const PopularPage = () => {
  const [restaurants, setRestaurants] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    views: "",
    orders: "",
    score: "",
    popular: true,
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm({
      name: "",
      views: "",
      orders: "",
      score: "",
      popular: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingId(item.id);
    setForm(item);
    setModalOpen(true);
  };

  const saveData = () => {
    if (editingId) {
      setRestaurants(prev =>
        prev.map(r =>
          r.id === editingId ? { ...form, id: editingId } : r
        )
      );
    } else {
      setRestaurants(prev => [
        { ...form, id: Date.now() },
        ...prev,
      ]);
    }

    setModalOpen(false);
  };

  const deleteItem = (id) => {
    setRestaurants(prev => prev.filter(r => r.id !== id));
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Header>
          <Title>
            <FiStar />
            Popular Restaurants
          </Title>

          <AddButton onClick={openAddModal}>
            <FiPlus />
            Add Popular
          </AddButton>
        </Header>

        <Table>
          <thead>
            <tr>
              <Th>Restaurant</Th>
              <Th>Views</Th>
              <Th>Orders</Th>
              <Th>Popularity Score</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>

          <tbody>
            {restaurants.map(r => (
              <tr key={r.id}>
                <Td>{r.name}</Td>
                <Td>{r.views}</Td>
                <Td>{r.orders}</Td>
                <Td>{r.score}</Td>

                <Td>
                  <Badge active={r.popular}>
                    {r.popular ? "Popular" : "Normal"}
                  </Badge>
                </Td>

                <Td>
                  <ActionGroup>
                    <FiEdit onClick={() => openEditModal(r)} />
                    <FiTrash2 onClick={() => deleteItem(r.id)} />
                  </ActionGroup>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>

        {modalOpen && (
          <ModalOverlay>
            <Modal>
              <Input
                placeholder="Restaurant Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="Views"
                value={form.views}
                onChange={(e) =>
                  setForm({ ...form, views: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="Orders"
                value={form.orders}
                onChange={(e) =>
                  setForm({ ...form, orders: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="Popularity Score (0-100)"
                value={form.score}
                onChange={(e) =>
                  setForm({ ...form, score: e.target.value })
                }
              />

              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={form.popular}
                  onChange={(e) =>
                    setForm({ ...form, popular: e.target.checked })
                  }
                />
                Mark as Popular
              </CheckboxLabel>

              <SaveButton onClick={saveData}>
                {editingId ? "Update" : "Save"}
              </SaveButton>
            </Modal>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default PopularPage;