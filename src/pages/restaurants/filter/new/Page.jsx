import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2, FiClock } from "react-icons/fi";

/* ================= GLOBAL STYLE ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  max-width:1100px;
  margin:40px auto;
  background:white;
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
  padding:10px 18px;
  border:none;
  border-radius:8px;
  background:#17a2b8;
  color:white;
  cursor:pointer;
  font-weight:bold;

  &:hover {
    background:#138496;
  }
`;

const Table = styled.table`
  width:100%;
  border-collapse:collapse;
`;

const Th = styled.th`
  background:#343a40;
  color:white;
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
  color:white;
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
  background:white;
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
  color:white;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#23272b;
  }
`;

/* ================= SAMPLE DATA ================= */

const initialData = [
  {
    id: 1,
    name: "Italiano Hub",
    launchDate: "2025-02-10",
    days: 5,
    isNew: true,
  },
  {
    id: 2,
    name: "Burger Town",
    launchDate: "2024-12-01",
    days: 60,
    isNew: false,
  },
];

/* ================= COMPONENT ================= */

const NewRestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    launchDate: "",
    days: "",
    isNew: true,
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm({
      name: "",
      launchDate: "",
      days: "",
      isNew: true,
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
            <FiClock />
            New Restaurants
          </Title>

          <AddButton onClick={openAddModal}>
            <FiPlus />
            Add New
          </AddButton>
        </Header>

        <Table>
          <thead>
            <tr>
              <Th>Restaurant</Th>
              <Th>Launch Date</Th>
              <Th>Days Since Launch</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>

          <tbody>
            {restaurants.map(r => (
              <tr key={r.id}>
                <Td>{r.name}</Td>
                <Td>{r.launchDate}</Td>
                <Td>{r.days}</Td>

                <Td>
                  <Badge active={r.isNew}>
                    {r.isNew ? "New" : "Old"}
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
                type="date"
                value={form.launchDate}
                onChange={(e) =>
                  setForm({ ...form, launchDate: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="Days Since Launch"
                value={form.days}
                onChange={(e) =>
                  setForm({ ...form, days: e.target.value })
                }
              />

              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={form.isNew}
                  onChange={(e) =>
                    setForm({ ...form, isNew: e.target.checked })
                  }
                />
                Mark as New
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

export default NewRestaurantsPage;