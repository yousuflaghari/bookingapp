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

// ===== Sample Deals Data =====
const initialDeals = [
  { id:1, restaurant:"Sea Breeze Cafe", title:"10% Off Breakfast", discount:10, validTill:"2026-03-01", active:true },
  { id:2, restaurant:"Mountain Dine", title:"20% Off Dinner", discount:20, validTill:"2026-03-10", active:false },
  { id:3, restaurant:"City Bistro", title:"Buy 1 Get 1 Coffee", discount:50, validTill:"2026-02-28", active:true },
];

// ===== Main Component =====
const DealsPage = () => {
  const [deals,setDeals] = useState(initialDeals);
  const [modalOpen,setModalOpen] = useState(false);
  const [editDeal,setEditDeal] = useState(null);
  const [form,setForm] = useState({restaurant:"",title:"",discount:0,validTill:"",active:true});

  const openAddModal = () => { setForm({restaurant:"",title:"",discount:0,validTill:"",active:true}); setEditDeal(null); setModalOpen(true); };
  const openEditModal = d => { setForm({...d}); setEditDeal(d.id); setModalOpen(true); };
  const saveDeal = () => {
    if(editDeal){ setDeals(prev=>prev.map(d=>d.id===editDeal?{...form,id:editDeal}:d)); }
    else{ setDeals([{...form,id:Date.now()}, ...deals]); }
    setModalOpen(false);
  };
  const deleteDeal = id => setDeals(prev=>prev.filter(d=>d.id!==id));

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Restaurant Deals</Title>
          <AddButton onClick={openAddModal}><FiPlus/> Add Deal</AddButton>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Restaurant</Th>
                <Th>Title</Th>
                <Th>Discount %</Th>
                <Th>Valid Till</Th>
                <Th>Active</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {deals.map(d=>(
                <tr key={d.id}>
                  <Td>{d.restaurant}</Td>
                  <Td>{d.title}</Td>
                  <Td>{d.discount}%</Td>
                  <Td>{d.validTill}</Td>
                  <Td>{d.active ? "Yes" : "No"}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(d)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteDeal(d.id)} title="Delete"/>
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
              <Input placeholder="Restaurant Name" value={form.restaurant} onChange={e=>setForm({...form,restaurant:e.target.value})}/>
              <Input placeholder="Deal Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
              <Input type="number" placeholder="Discount %" value={form.discount} onChange={e=>setForm({...form,discount:parseInt(e.target.value)})}/>
              <Input type="date" placeholder="Valid Till" value={form.validTill} onChange={e=>setForm({...form,validTill:e.target.value})}/>
              <label>
                <input type="checkbox" checked={form.active} onChange={e=>setForm({...form,active:e.target.checked})}/> Active
              </label>
              <Button onClick={saveDeal}>{editDeal ? "Update Deal" : "Add Deal"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}

      </Container>
    </>
  )
}

export default DealsPage;