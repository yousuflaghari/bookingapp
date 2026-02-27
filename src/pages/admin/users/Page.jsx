// src/components/AdminUsers.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiTrash2, FiEdit, FiUserPlus } from "react-icons/fi";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body { font-family:'Arial', sans-serif; background:#f4f6f8; margin:0; padding:0; }
`;

const Container = styled.div`
  max-width:1000px;
  margin:50px auto;
  background:#fff;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
`;

const Title = styled.h1`
  font-size:28px;
  color:#333;
`;

const AddButton = styled.button`
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 16px;
  background-color:#28a745;
  color:#fff;
  border:none;
  border-radius:8px;
  cursor:pointer;
  font-weight:bold;
  &:hover{ background-color:#218838; }
`;

const FilterWrapper = styled.div`
  margin-bottom:20px;
  display:flex;
  gap:10px;
`;

const FilterInput = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  flex:1;
`;

const TableWrapper = styled.div` overflow-x:auto; `;
const Table = styled.table` width:100%; border-collapse:collapse; `;
const Thead = styled.thead` background-color:#007bff; color:#fff; `;
const Th = styled.th` padding:12px 15px; text-align:left; `;
const Td = styled.td` padding:12px 15px; border-bottom:1px solid #ddd; `;
const ActionWrapper = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;
  color:#555;
  svg:hover{ color:#007bff; }
`;

const ModalOverlay = styled.div`
  position:fixed; top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ModalContent = styled.div`
  background:#fff; padding:30px; border-radius:12px; width:400px;
`;

const Input = styled.input`
  width:100%; padding:12px; margin-bottom:15px; border-radius:8px; border:1px solid #ccc;
`;

const Select = styled.select`
  width:100%; padding:12px; margin-bottom:15px; border-radius:8px; border:1px solid #ccc;
`;

const Button = styled.button`
  padding:12px 20px; border-radius:8px; border:none;
  background-color:#007bff; color:#fff; font-weight:bold;
  cursor:pointer; display:flex; align-items:center; gap:8px;
  &:hover{ background-color:#0069d9; }
`;

const Cards = styled.div`
  display:flex; gap:20px; flex-wrap:wrap; margin-bottom:20px;
`;

const Card = styled.div`
  flex:1 1 200px; background-color:#e6f7ff; padding:20px;
  border-radius:12px; text-align:center; box-shadow:0 3px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3` margin:0; font-size:16px; color:#555; `;
const CardValue = styled.h2` margin:10px 0 0 0; font-size:28px; color:#007bff; `;

// Sample Users
const initialUsers = [
  { id:1, name:"John Doe", email:"john@example.com", role:"User", status:"active", lastLogin:"2026-02-21" },
  { id:2, name:"Jane Smith", email:"jane@example.com", role:"Admin", status:"active", lastLogin:"2026-02-22" },
  { id:3, name:"Ali Khan", email:"ali@example.com", role:"User", status:"inactive", lastLogin:"2026-02-20" },
  { id:4, name:"Sara Ahmed", email:"sara@example.com", role:"Manager", status:"active", lastLogin:"2026-02-22" },
  { id:5, name:"Ahmed Ali", email:"ahmed@example.com", role:"User", status:"active", lastLogin:"2026-02-21" },
];

const rolesList = ["User","Admin","Manager","Staff"];

const AdminUsers = () => {
  const [users,setUsers] = useState(initialUsers);
  const [search,setSearch] = useState("");
  const [modalOpen,setModalOpen] = useState(false);
  const [editUser,setEditUser] = useState(null);
  const [form,setForm] = useState({name:"",email:"",role:"User",status:"active"});

  const filteredUsers = users.filter(u=>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => { setForm({name:"",email:"",role:"User",status:"active"}); setEditUser(null); setModalOpen(true); };
  const openEditModal = user => { setForm({...user}); setEditUser(user.id); setModalOpen(true); };

  const saveUser = () => {
    if(editUser){ setUsers(prev=>prev.map(u=>u.id===editUser?{...form,id:editUser}:u)); }
    else{ setUsers([{...form,id:Date.now()},...users]); }
    setModalOpen(false);
  };

  const deleteUser = id => setUsers(prev=>prev.filter(u=>u.id!==id));

  // Summary Cards
  const total = users.length;
  const active = users.filter(u=>u.status==="active").length;
  const inactive = users.filter(u=>u.status==="inactive").length;
  const admins = users.filter(u=>u.role==="Admin").length;

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Users Management</Title>
          <AddButton><FiUserPlus/> Add User</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput placeholder="Search by name, email or role..." value={search} onChange={e=>setSearch(e.target.value)} />
        </FilterWrapper>

        <Cards>
          <Card><CardTitle>Total Users</CardTitle><CardValue>{total}</CardValue></Card>
          <Card><CardTitle>Active</CardTitle><CardValue>{active}</CardValue></Card>
          <Card><CardTitle>Inactive</CardTitle><CardValue>{inactive}</CardValue></Card>
          <Card><CardTitle>Admins</CardTitle><CardValue>{admins}</CardValue></Card>
        </Cards>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Name</Th><Th>Email</Th><Th>Role</Th><Th>Status</Th><Th>Last Login</Th><Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredUsers.map(u=>(
                <tr key={u.id}>
                  <Td>{u.name}</Td>
                  <Td>{u.email}</Td>
                  <Td>{u.role}</Td>
                  <Td>{u.status}</Td>
                  <Td>{u.lastLogin}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(u)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteUser(u.id)} title="Delete"/>
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
              <Input name="name" placeholder="Name" value={form.name} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Input name="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Select name="role" value={form.role} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}>
                {rolesList.map(r=><option key={r} value={r}>{r}</option>)}
              </Select>
              <Select name="status" value={form.status} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
              <Button onClick={saveUser}>Save</Button>
            </ModalContent>
          </ModalOverlay>
        )}

      </Container>
    </>
  )
};

export default AdminUsers;