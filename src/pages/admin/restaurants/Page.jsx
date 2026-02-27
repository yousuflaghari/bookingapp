// src/components/AdminRestaurants.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiTrash2, FiEdit, FiPlus } from "react-icons/fi";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f6f8;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover { background-color: #218838; }
`;

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const FilterInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 1;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
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
  svg:hover { color: #007bff; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ModalContent = styled.div`
  background:#fff;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
`;

const Input = styled.input`
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius:8px;
  border:none;
  background-color:#007bff;
  color:#fff;
  cursor:pointer;
  font-weight:bold;
  &:hover{ background-color:#0069d9; }
`;

// Sample Data
const initialRestaurants = [
  { id: 1, name: "Bella Pizza", city: "Karachi", cuisine: "Italian", rating: 4.5 },
  { id: 2, name: "Sushi House", city: "Lahore", cuisine: "Japanese", rating: 4.8 },
  { id: 3, name: "Curry King", city: "Islamabad", cuisine: "Indian", rating: 4.2 },
  { id: 4, name: "Burger Hub", city: "Multan", cuisine: "Fast Food", rating: 4.0 },
  { id: 5, name: "Seafood Delight", city: "Karachi", cuisine: "Seafood", rating: 4.7 },
];

const AdminRestaurants = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editRestaurant, setEditRestaurant] = useState(null);
  const [form, setForm] = useState({ name: "", city: "", cuisine: "", rating: "" });

  // Filter restaurants
  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.city.toLowerCase().includes(search.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  // Handle modal input
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const openAddModal = () => {
    setForm({ name: "", city: "", cuisine: "", rating: "" });
    setEditRestaurant(null);
    setModalOpen(true);
  };

  const openEditModal = (restaurant) => {
    setForm({ ...restaurant });
    setEditRestaurant(restaurant.id);
    setModalOpen(true);
  };

  const saveRestaurant = () => {
    if(editRestaurant) {
      setRestaurants(prev => prev.map(r => r.id === editRestaurant ? {...form, id: editRestaurant} : r));
    } else {
      setRestaurants([{ ...form, id: Date.now() }, ...restaurants]);
    }
    setModalOpen(false);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(prev => prev.filter(r => r.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Admin Restaurants</Title>
          <AddButton onClick={openAddModal}><FiPlus /> Add Restaurant</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput 
            placeholder="Search by name, city, cuisine..." 
            value={search} 
            onChange={e => setSearch(e.target.value)}
          />
        </FilterWrapper>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Name</Th>
                <Th>City</Th>
                <Th>Cuisine</Th>
                <Th>Rating</Th>
                <Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredRestaurants.map(r => (
                <tr key={r.id}>
                  <Td>{r.name}</Td>
                  <Td>{r.city}</Td>
                  <Td>{r.cuisine}</Td>
                  <Td>{r.rating}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={() => openEditModal(r)} title="Edit"/>
                      <FiTrash2 onClick={() => deleteRestaurant(r.id)} title="Delete"/>
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
              <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
              <Input name="city" placeholder="City" value={form.city} onChange={handleChange} />
              <Input name="cuisine" placeholder="Cuisine" value={form.cuisine} onChange={handleChange} />
              <Input name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />
              <Button onClick={saveRestaurant}>{editRestaurant ? "Update" : "Add"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default AdminRestaurants;