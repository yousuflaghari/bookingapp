import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2, FiTrendingUp } from "react-icons/fi";

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
  max-width: 1000px;
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
  display: flex;
  align-items: center;
  gap: 8px;
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

const StatusBadge = styled.span`
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  background: ${(props) => (props.active ? "#28a745" : "#6c757d")};
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
  width: 450px;
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
const initialTrending = [
  { id: 1, name: "Sea Breeze Cafe", score: 95, active: true },
  { id: 2, name: "Urban Tandoor", score: 88, active: true },
  { id: 3, name: "Mountain Dine", score: 70, active: false },
];

// ===== Component =====
const TrendingPage = () => {
  const [trendingList, setTrendingList] = useState(initialTrending);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [form, setForm] = useState({
    name: "",
    score: 0,
    active: true,
  });

  const openAddModal = () => {
    setForm({ name: "", score: 0, active: true });
    setEditItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setForm(item);
    setEditItem(item.id);
    setModalOpen(true);
  };

  const saveTrending = () => {
    if (editItem) {
      setTrendingList((prev) =>
        prev.map((t) =>
          t.id === editItem ? { ...form, id: editItem } : t
        )
      );
    } else {
      setTrendingList([{ ...form, id: Date.now() }, ...trendingList]);
    }
    setModalOpen(false);
  };

  const deleteTrending = (id) => {
    setTrendingList((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Header>
          <Title>
            <FiTrendingUp /> Trending Restaurants
          </Title>
          <AddButton onClick={openAddModal}>
            <FiPlus /> Add Trending
          </AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Restaurant</Th>
                <Th>Trending Score</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {trendingList.map((t) => (
                <tr key={t.id}>
                  <Td>{t.name}</Td>
                  <Td>{t.score}</Td>
                  <Td>
                    <StatusBadge active={t.active}>
                      {t.active ? "Trending" : "Inactive"}
                    </StatusBadge>
                  </Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit
                        title="Edit"
                        onClick={() => openEditModal(t)}
                      />
                      <FiTrash2
                        title="Delete"
                        onClick={() => deleteTrending(t.id)}
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
                placeholder="Restaurant Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="Trending Score (0-100)"
                value={form.score}
                onChange={(e) =>
                  setForm({ ...form, score: Number(e.target.value) })
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

              <Button onClick={saveTrending}>
                {editItem ? "Update" : "Add Trending"}
              </Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default TrendingPage;