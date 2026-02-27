import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

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
const initialPrices = [
  { id: 1, label: "Budget", min: 0, max: 20, active: true },
  { id: 2, label: "Standard", min: 21, max: 50, active: true },
  { id: 3, label: "Premium", min: 51, max: 100, active: false },
];

// ===== Component =====
const PricePage = () => {
  const [prices, setPrices] = useState(initialPrices);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [form, setForm] = useState({
    label: "",
    min: 0,
    max: 0,
    active: true,
  });

  const openAddModal = () => {
    setForm({ label: "", min: 0, max: 0, active: true });
    setEditItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setForm(item);
    setEditItem(item.id);
    setModalOpen(true);
  };

  const savePrice = () => {
    if (editItem) {
      setPrices((prev) =>
        prev.map((p) =>
          p.id === editItem ? { ...form, id: editItem } : p
        )
      );
    } else {
      setPrices([{ ...form, id: Date.now() }, ...prices]);
    }
    setModalOpen(false);
  };

  const deletePrice = (id) => {
    setPrices((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Header>
          <Title>Price Ranges</Title>
          <AddButton onClick={openAddModal}>
            <FiPlus /> Add Price
          </AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Label</Th>
                <Th>Min Price</Th>
                <Th>Max Price</Th>
                <Th>Active</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {prices.map((p) => (
                <tr key={p.id}>
                  <Td>{p.label}</Td>
                  <Td>${p.min}</Td>
                  <Td>${p.max}</Td>
                  <Td>{p.active ? "Yes" : "No"}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit
                        title="Edit"
                        onClick={() => openEditModal(p)}
                      />
                      <FiTrash2
                        title="Delete"
                        onClick={() => deletePrice(p.id)}
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
                placeholder="Label (Budget, Premium...)"
                value={form.label}
                onChange={(e) =>
                  setForm({ ...form, label: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="Min Price"
                value={form.min}
                onChange={(e) =>
                  setForm({ ...form, min: Number(e.target.value) })
                }
              />

              <Input
                type="number"
                placeholder="Max Price"
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

              <Button onClick={savePrice}>
                {editItem ? "Update Price" : "Add Price"}
              </Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default PricePage;