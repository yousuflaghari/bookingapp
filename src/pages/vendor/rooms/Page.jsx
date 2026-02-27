import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

// ================= Styled Components =================

const Container = styled.div`
  padding: 30px;
  min-height: 100vh;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-right: 5px;
  background: ${({ bg }) => bg || "#007bff"};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

// ================= Component =================

const VendorRooms = () => {

  const [rooms, setRooms] = useState([
    { id: 1, name: "Deluxe Room", type: "Double", price: 120, availability: "Available" },
    { id: 2, name: "Suite", type: "King", price: 250, availability: "Booked" },
    { id: 3, name: "Standard Room", type: "Single", price: 80, availability: "Available" }
  ]);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this room?")){
      setRooms(rooms.filter(r=>r.id!==id));
    }
  };

  const handleEdit = (room) => {
    alert(`Edit room: ${room.name}`);
    // Redirect to edit-room page or open modal
  };

  const handleAddNew = () => {
    alert("Redirect to add-room page");
    // Redirect to add-room page
  };

  return (
    <Container>
      <Title>Manage Rooms</Title>
      <Button onClick={handleAddNew}>Add New Room</Button>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Price ($)</Th>
            <Th>Availability</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room=>(
            <tr key={room.id}>
              <Td>{room.name}</Td>
              <Td>{room.type}</Td>
              <Td>{room.price}</Td>
              <Td>{room.availability}</Td>
              <Td>
                <ActionButton bg="#28a745" onClick={()=>handleEdit(room)}><FaEdit /></ActionButton>
                <ActionButton bg="#dc3545" onClick={()=>handleDelete(room.id)}><FaTrash /></ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VendorRooms;