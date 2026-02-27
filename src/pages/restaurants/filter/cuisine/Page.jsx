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

const Button = styled.button`
  padding:12px 20px; border-radius:8px; border:none;
  background:#007bff; color:#fff; font-weight:bold; cursor:pointer;
  display:flex; align-items:center; gap:8px;
  &:hover{ background:#0069d9; }
`;

// ===== Sample Cuisine Data =====
const initialCuisines = [
  { id:1, name:"Italian" },
  { id:2, name:"Continental" },
  { id:3, name:"Fast Food" },
  { id:4, name:"Indian" },
  { id:5, name:"Cafe" }
];

// ===== Main Component =====
const CuisinePage = () => {
  const [cuisines,setCuisines] = useState(initialCuisines);
  const [modalOpen,setModalOpen] = useState(false);
  const [editCuisine,setEditCuisine] = useState(null);
  const [form,setForm] = useState({name:""});

  const openAddModal = () => { setForm({name:""}); setEditCuisine(null); setModalOpen(true); };
  const openEditModal = c => { setForm({...c}); setEditCuisine(c.id); setModalOpen(true); };
  const saveCuisine = () => {
    if(editCuisine){ setCuisines(prev=>prev.map(c=>c.id===editCuisine?{...form,id:editCuisine}:c)); }
    else{ setCuisines([{...form,id:Date.now()}, ...cuisines]); }
    setModalOpen(false);
  };
  const deleteCuisine = id => setCuisines(prev=>prev.filter(c=>c.id!==id));

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Cuisines</Title>
          <AddButton onClick={openAddModal}><FiPlus/> Add Cuisine</AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {cuisines.map(c=>(
                <tr key={c.id}>
                  <Td>{c.name}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(c)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteCuisine(c.id)} title="Delete"/>
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
              <Input placeholder="Cuisine Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
              <Button onClick={saveCuisine}>{editCuisine ? "Update Cuisine" : "Add Cuisine"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}

      </Container>
    </>
  )
}

export default CuisinePage;