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

const VendorProperties = () => {

  const [properties, setProperties] = useState([
    { id: 1, name: "Hilton Paris Opera", type: "Hotel", status: "Active" },
    { id: 2, name: "Sunny Beach Villa", type: "Villa", status: "Inactive" },
    { id: 3, name: "Downtown Apartment", type: "Apartment", status: "Active" }
  ]);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this property?")){
      setProperties(properties.filter(p=>p.id!==id));
    }
  };

  const handleEdit = (property) => {
    alert(`Edit property: ${property.name}`);
    // Redirect to edit-property page or open modal
  };

  const handleAddNew = () => {
    alert("Redirect to add-property page");
    // Redirect to add-property page
  };

  return (
    <Container>
      <Title>My Properties</Title>
      <Button onClick={handleAddNew}>Add New Property</Button>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property=>(
            <tr key={property.id}>
              <Td>{property.name}</Td>
              <Td>{property.type}</Td>
              <Td>{property.status}</Td>
              <Td>
                <ActionButton bg="#28a745" onClick={()=>handleEdit(property)}><FaEdit /></ActionButton>
                <ActionButton bg="#dc3545" onClick={()=>handleDelete(property.id)}><FaTrash /></ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VendorProperties;