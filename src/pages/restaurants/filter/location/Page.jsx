import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

// ===== Global Style =====
const GlobalStyle = createGlobalStyle`
  body { font-family:'Arial', sans-serif; background:#f4f6f8; margin:0; padding:0; }
`;

// ===== Styled Components =====
const Container = styled.div`
  max-width:900px;
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

const Button = styled.button`
  padding:12px 20px; border-radius:8px; border:none;
  background:#007bff; color:#fff; font-weight:bold; cursor:pointer;
  display:flex; align-items:center; gap:8px;
  &:hover{ background:#0069d9; }
`;

// ===== Sample Locations Data =====
const initialLocations = [
  { id:1, name:"Beach Road", active:true },
  { id:2, name:"Hilltop", active:true },
  { id:3, name:"Downtown", active:false },
  { id:4, name:"City Center", active:true },
  { id:5, name:"Suburb", active:true }
];

// ===== Main Component =====
const LocationPage = () => {
  const [locations,setLocations] = useState(initialLocations);
  const [modalOpen,setModalOpen] = useState(false);
  const [editItem,setEditItem] = useState(null);
  const [form,setForm] = useState({name:"",active:true});

  const openAddModal = () => { setForm({name:"",active:true}); setEditItem(null); setModalOpen(true); };
  const openEditModal = loc => { setForm({...loc}); setEditItem(loc.id); setModalOpen(true); };
  const saveLocation = () => {
    if(editItem){ setLocations(prev=>prev.map(l=>l.id===editItem?{...form,id:editItem}:l)); }
    else{ setLocations([{...form,id:Date.now()}, ...locations]); }
    setModalOpen(false);
  };
  const deleteLocation = id => setLocations(prev=>prev.filter(l=>l.id!==id));

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Restaurant Locations</Title>
          <AddButton onClick={openAddModal}><FiPlus/> Add Location</AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Active</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {locations.map(l=>(
                <tr key={l.id}>
                  <Td>{l.name}</Td>
                  <Td>{l.active ? "Yes" : "No"}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(l)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteLocation(l.id)} title="Delete"/>
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
              <Input placeholder="Location Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
              <label>
                <input type="checkbox" checked={form.active} onChange={e=>setForm({...form,active:e.target.checked})}/> Active
              </label>
              <Button onClick={saveLocation}>{editItem ? "Update Location" : "Add Location"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}

      </Container>
    </>
  )
}

export default LocationPage;