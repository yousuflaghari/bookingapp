// src/components/AdminFamilyPackages.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiTrash2, FiEdit, FiPlus } from "react-icons/fi";

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
  display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;
`;

const Title = styled.h1` font-size:28px; color:#333; `;
const AddButton = styled.button`
  display:flex; align-items:center; gap:8px;
  padding:10px 16px; background:#28a745; color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:bold;
  &:hover{ background:#218838; }
`;

const FilterWrapper = styled.div`
  margin-bottom:20px; display:flex; gap:10px;
`;

const FilterInput = styled.input`
  padding:10px; border-radius:8px; border:1px solid #ccc; flex:1;
`;

const TableWrapper = styled.div` overflow-x:auto; `;
const Table = styled.table` width:100%; border-collapse:collapse; `;
const Thead = styled.thead` background:#007bff; color:#fff; `;
const Th = styled.th` padding:12px 15px; text-align:left; `;
const Td = styled.td` padding:12px 15px; border-bottom:1px solid #ddd; `;
const ActionWrapper = styled.div`
  display:flex; gap:12px; font-size:18px; cursor:pointer; color:#555;
  svg:hover{ color:#007bff; }
`;

const ModalOverlay = styled.div`
  position:fixed; top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,0.4); display:flex; justify-content:center; align-items:center;
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
  background:#007bff; color:#fff; font-weight:bold; cursor:pointer;
  display:flex; align-items:center; gap:8px;
  &:hover{ background:#0069d9; }
`;

const Cards = styled.div`
  display:flex; gap:20px; flex-wrap:wrap; margin-bottom:20px;
`;

const Card = styled.div`
  flex:1 1 200px; background:#e6f7ff; padding:20px;
  border-radius:12px; text-align:center; box-shadow:0 3px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3` margin:0; font-size:16px; color:#555; `;
const CardValue = styled.h2` margin:10px 0 0 0; font-size:28px; color:#007bff; `;

// Sample Family Packages
const initialPackages = [
  { id:1, name:"Weekend Family Fun", description:"2 Adults + 2 Kids", maxMembers:4, price:150, status:"active" },
  { id:2, name:"Holiday Family Package", description:"3 Adults + 2 Kids", maxMembers:5, price:250, status:"inactive" },
  { id:3, name:"Summer Special", description:"2 Adults + 3 Kids", maxMembers:5, price:200, status:"active" },
];

const AdminFamilyPackages = () => {
  const [packages,setPackages] = useState(initialPackages);
  const [search,setSearch] = useState("");
  const [modalOpen,setModalOpen] = useState(false);
  const [editPackage,setEditPackage] = useState(null);
  const [form,setForm] = useState({name:"",description:"",maxMembers:1,price:0,status:"active"});

  const filteredPackages = packages.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));

  const openAddModal = () => { setForm({name:"",description:"",maxMembers:1,price:0,status:"active"}); setEditPackage(null); setModalOpen(true); };
  const openEditModal = p => { setForm({...p}); setEditPackage(p.id); setModalOpen(true); };

  const savePackage = () => {
    if(editPackage){ setPackages(prev=>prev.map(p=>p.id===editPackage?{...form,id:editPackage}:p)); }
    else{ setPackages([{...form,id:Date.now()},...packages]); }
    setModalOpen(false);
  };

  const deletePackage = id => setPackages(prev=>prev.filter(p=>p.id!==id));

  const total = packages.length;
  const active = packages.filter(p=>p.status==="active").length;
  const inactive = packages.filter(p=>p.status==="inactive").length;

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Family Packages</Title>
          <AddButton><FiPlus/> Add Package</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput placeholder="Search by package name..." value={search} onChange={e=>setSearch(e.target.value)} />
        </FilterWrapper>

        <Cards>
          <Card><CardTitle>Total Packages</CardTitle><CardValue>{total}</CardValue></Card>
          <Card><CardTitle>Active</CardTitle><CardValue>{active}</CardValue></Card>
          <Card><CardTitle>Inactive</CardTitle><CardValue>{inactive}</CardValue></Card>
        </Cards>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Name</Th><Th>Description</Th><Th>Max Members</Th><Th>Price</Th><Th>Status</Th><Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredPackages.map(p=>(
                <tr key={p.id}>
                  <Td>{p.name}</Td>
                  <Td>{p.description}</Td>
                  <Td>{p.maxMembers}</Td>
                  <Td>${p.price}</Td>
                  <Td>{p.status}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(p)} title="Edit"/>
                      <FiTrash2 onClick={()=>deletePackage(p.id)} title="Delete"/>
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
              <Input name="name" placeholder="Package Name" value={form.name} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Input name="description" placeholder="Description" value={form.description} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Input type="number" name="maxMembers" placeholder="Max Members" value={form.maxMembers} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Input type="number" name="price" placeholder="Price" value={form.price} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Select name="status" value={form.status} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
              <Button onClick={savePackage}>Save</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  )
};

export default AdminFamilyPackages;