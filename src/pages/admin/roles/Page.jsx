// src/components/AdminRoles.jsx
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

const CheckboxWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:15px;
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

// Sample Roles Data
const initialRoles = [
  { id:1, name:"Super Admin", permissions:["Manage Bookings","Manage Restaurants","View Reports","Manage Users"], description:"Full access to system" },
  { id:2, name:"Manager", permissions:["Manage Bookings","View Reports"], description:"Can manage bookings and view reports" },
  { id:3, name:"Staff", permissions:["Manage Bookings"], description:"Can only manage bookings" },
];

const permissionsList = ["Manage Bookings","Manage Restaurants","View Reports","Manage Users","Manage Reviews"];

const AdminRoles = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [search,setSearch] = useState("");
  const [modalOpen,setModalOpen] = useState(false);
  const [editRole,setEditRole] = useState(null);
  const [form,setForm] = useState({name:"",permissions:[],description:""});

  const filteredRoles = roles.filter(r=>r.name.toLowerCase().includes(search.toLowerCase()));

  const openAddModal = () => {
    setForm({name:"",permissions:[],description:""});
    setEditRole(null);
    setModalOpen(true);
  };

  const openEditModal = role => {
    setForm({...role});
    setEditRole(role.id);
    setModalOpen(true);
  };

  const handleCheckbox = (perm) => {
    if(form.permissions.includes(perm)){
      setForm({...form,permissions:form.permissions.filter(p=>p!==perm)});
    } else {
      setForm({...form,permissions:[...form.permissions,perm]});
    }
  };

  const saveRole = () => {
    if(editRole){
      setRoles(prev=>prev.map(r=>r.id===editRole?{...form,id:editRole}:r));
    } else {
      setRoles([{...form,id:Date.now()},...roles]);
    }
    setModalOpen(false);
  };

  const deleteRole = id => setRoles(prev=>prev.filter(r=>r.id!==id));

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Admin Roles</Title>
          <AddButton onClick={openAddModal}><FiPlus /> Add Role</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput placeholder="Search by role name..." value={search} onChange={e=>setSearch(e.target.value)} />
        </FilterWrapper>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Name</Th>
                <Th>Permissions</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredRoles.map(r=>(
                <tr key={r.id}>
                  <Td>{r.name}</Td>
                  <Td>{r.permissions.join(", ")}</Td>
                  <Td>{r.description}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(r)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteRole(r.id)} title="Delete"/>
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
              <Input name="name" placeholder="Role Name" value={form.name} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              
              <CheckboxWrapper>
                {permissionsList.map(p=>(
                  <label key={p}>
                    <input type="checkbox" checked={form.permissions.includes(p)} onChange={()=>handleCheckbox(p)} /> {p}
                  </label>
                ))}
              </CheckboxWrapper>

              <Input name="description" placeholder="Description" value={form.description} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              
              <Button onClick={saveRole}>{editRole?"Update":"Add"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default AdminRoles;