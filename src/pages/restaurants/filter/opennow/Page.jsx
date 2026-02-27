import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiClock, FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

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
  background:#28a745;
  color:#fff;
  cursor:pointer;
  font-weight:bold;

  &:hover {
    background:#218838;
  }
`;

const Table = styled.table`
  width:100%;
  border-collapse:collapse;
`;

const Th = styled.th`
  background:#007bff;
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
  background:${props => props.open ? "#28a745" : "#dc3545"};
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

const Select = styled.select`
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
  background:#007bff;
  color:#fff;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#0069d9;
  }
`;

// ===== Sample Data =====
const initialData = [
  {
    id: 1,
    name: "Spice Garden",
    day: "Monday",
    openTime: "10:00",
    closeTime: "22:00",
    openNow: true,
  },
  {
    id: 2,
    name: "Ocean Grill",
    day: "Tuesday",
    openTime: "09:00",
    closeTime: "23:00",
    openNow: false,
  },
];

// ===== Component =====
const OpenNowPage = () => {
  const [restaurants, setRestaurants] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    day: "Monday",
    openTime: "",
    closeTime: "",
    openNow: true,
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm({
      name: "",
      day: "Monday",
      openTime: "",
      closeTime: "",
      openNow: true,
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
            Open Now Management
          </Title>

          <AddButton onClick={openAddModal}>
            <FiPlus />
            Add Schedule
          </AddButton>
        </Header>

        <Table>
          <thead>
            <tr>
              <Th>Restaurant</Th>
              <Th>Day</Th>
              <Th>Open</Th>
              <Th>Close</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>

          <tbody>
            {restaurants.map(r => (
              <tr key={r.id}>
                <Td>{r.name}</Td>
                <Td>{r.day}</Td>
                <Td>{r.openTime}</Td>
                <Td>{r.closeTime}</Td>

                <Td>
                  <Badge open={r.openNow}>
                    {r.openNow ? "Open" : "Closed"}
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

              <Select
                value={form.day}
                onChange={(e) =>
                  setForm({ ...form, day: e.target.value })
                }
              >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </Select>

              <Input
                type="time"
                value={form.openTime}
                onChange={(e) =>
                  setForm({ ...form, openTime: e.target.value })
                }
              />

              <Input
                type="time"
                value={form.closeTime}
                onChange={(e) =>
                  setForm({ ...form, closeTime: e.target.value })
                }
              />

              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={form.openNow}
                  onChange={(e) =>
                    setForm({ ...form, openNow: e.target.checked })
                  }
                />
                Open Now
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

export default OpenNowPage;