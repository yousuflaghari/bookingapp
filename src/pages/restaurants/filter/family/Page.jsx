import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

// ===== Global Style =====
const GlobalStyle = createGlobalStyle`
  body { font-family:'Arial', sans-serif; background:#f4f6f8; margin:0; padding:0; }
`;

// ===== Styled Components =====
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

const Title = styled.h1` font-size:28px; color:#333; `;
const AddButton = styled.button`
  display:flex; align-items:center; gap:8px;
  padding:10px 16px; background:#28a745; color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:bold;
  &:hover{ background:#218838; }
`;

const TableWrapper = styled.div` overflow-x:auto; `;
const Table = styled.table` width:100%; border-collapse:collapse; `;
const Th = styled.th` padding:12px 15px; text-align:left; background:#007bff; color:#fff; `;
const Td = styled.td` padding:12px 15px; border-bottom:1px solid #ddd; `;

const ActionWrapper = styled.div`
  display:flex; gap:12px; font-size:18px; cursor:pointer; color:#555;
  svg:hover{ color:#007bff; }
`;

const ModalOverlay = styled.div`
  position:fixed; top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,0.4);
  display:flex; justify-content:center; align-items:center;
`;

const ModalContent = styled.div`
  background:#fff; padding:30px; border-radius:12px; width:400px;
`;

const Input = styled.input`
  width:100%; padding:12px; margin-bottom:15px; border-radius:8px; border:1px solid #ccc;
`;

const CheckboxLabel = styled.label`
  display:flex; align-items:center; gap:5px; font-size:14px; margin-bottom:15px; cursor:pointer;
`;

const Button = styled.button`
  padding:12px 20px; border-radius:8px; border:none;
  background:#007bff; color:#fff; font-weight:bold; cursor:pointer;
  display:flex; align-items:center; gap:8px;
  &:hover{ background:#0069d9; }
`;

// ===== Sample Family Restaurants Data =====
const initialFamily = [
  { id:1, name:"Sea Breeze Cafe", maxMembers:4, price:150, active:true },
  { id:2, name:"Mountain Dine", maxMembers:5, price:250, active:false },
  { id:3, name:"City Bistro", maxMembers:5, price:200, active:true },
];

// ===== Main Component =====
const FamilyPage = () => {
  const [families,setFamilies] = useState(initialFamily);
  const [modalOpen,setModalOpen] = useState(false);
  const [editItem,setEditItem] = useState(null);
  const [form,setForm] = useState({name:"",maxMembers:1,price:0,active:true});

  const openAddModal = () => { setForm({name:"",maxMembers:1,price:0,active:true}); setEditItem(null); setModalOpen(true); };
  const openEditModal = f => { setForm({...f}); setEditItem(f.id); setModalOpen(true); };
  const saveFamily = () => {
    if(editItem){ setFamilies(prev=>prev.map(f=>f.id===editItem?{...form,id:editItem}:f)); }
    else{ setFamilies([{...form,id:Date.now()}, ...families]); }
    setModalOpen(false);
  };
  const deleteFamily = id => setFamilies(prev=>prev.filter(f=>f.id!==id));

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Family Restaurants</Title>
          <AddButton onClick={openAddModal}><FiPlus/> Add Family</AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Max Members</Th>
                <Th>Price ($)</Th>
                <Th>Active</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {families.map(f=>(
                <tr key={f.id}>
                  <Td>{f.name}</Td>
                  <Td>{f.maxMembers}</Td>
                  <Td>{f.price}</Td>
                  <Td>{f.active ? "Yes" : "No"}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(f)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteFamily(f.id)} title="Delete"/>
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
              <Input placeholder="Restaurant Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
              <Input type="number" placeholder="Max Members" value={form.maxMembers} onChange={e=>setForm({...form,maxMembers:parseInt(e.target.value)})}/>
              <Input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:parseInt(e.target.value)})}/>
              <CheckboxLabel>
                <input type="checkbox" checked={form.active} onChange={e=>setForm({...form,active:e.target.checked})}/> Active
              </CheckboxLabel>
              <Button onClick={saveFamily}>{editItem ? "Update Family" : "Add Family"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}

      </Container>
    </>
  )
}

export default FamilyPage;