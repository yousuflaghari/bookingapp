// src/components/AdminVendors.jsx
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
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
`;

const Title = styled.h1` font-size:28px; color:#333; `;
const AddButton = styled.button`
  display:flex; align-items:center; gap:8px;
  padding:10px 16px; background:#28a745; color:#fff; border:none;
  border-radius:8px; cursor:pointer; font-weight:bold;
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

// Sample Vendors
const initialVendors = [
  { id:1, name:"Hotel Sunshine", email:"sunshine@hotels.com", type:"Hotel", status:"active", rating:4.5 },
  { id:2, name:"Sea Breeze Cafe", email:"seabreeze@cafe.com", type:"Restaurant", status:"active", rating:4.7 },
  { id:3, name:"City Taxi Service", email:"citytaxi@transport.com", type:"Transport", status:"inactive", rating:4.2 },
  { id:4, name:"Mountain Guide", email:"guide@mountain.com", type:"Guide", status:"active", rating:4.9 },
];

const vendorTypes = ["Hotel","Restaurant","Transport","Guide","Other"];

const AdminVendors = () => {
  const [vendors,setVendors] = useState(initialVendors);
  const [search,setSearch] = useState("");
  const [modalOpen,setModalOpen] = useState(false);
  const [editVendor,setEditVendor] = useState(null);
  const [form,setForm] = useState({name:"",email:"",type:"Hotel",status:"active",rating:0});

  const filteredVendors = vendors.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.type.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => { setForm({name:"",email:"",type:"Hotel",status:"active",rating:0}); setEditVendor(null); setModalOpen(true); };
  const openEditModal = vendor => { setForm({...vendor}); setEditVendor(vendor.id); setModalOpen(true); };

  const saveVendor = () => {
    if(editVendor){ setVendors(prev=>prev.map(v=>v.id===editVendor?{...form,id:editVendor}:v)); }
    else{ setVendors([{...form,id:Date.now()},...vendors]); }
    setModalOpen(false);
  };

  const deleteVendor = id => setVendors(prev=>prev.filter(v=>v.id!==id));

  const total = vendors.length;
  const active = vendors.filter(v=>v.status==="active").length;
  const inactive = vendors.filter(v=>v.status==="inactive").length;
  const topRated = vendors.filter(v=>v.rating>=4.5).length;

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Title>Vendors Management</Title>
          <AddButton><FiPlus/> Add Vendor</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput placeholder="Search by name or type..." value={search} onChange={e=>setSearch(e.target.value)} />
        </FilterWrapper>

        <Cards>
          <Card><CardTitle>Total Vendors</CardTitle><CardValue>{total}</CardValue></Card>
          <Card><CardTitle>Active</CardTitle><CardValue>{active}</CardValue></Card>
          <Card><CardTitle>Inactive</CardTitle><CardValue>{inactive}</CardValue></Card>
          <Card><CardTitle>Top Rated</CardTitle><CardValue>{topRated}</CardValue></Card>
        </Cards>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Name</Th><Th>Email</Th><Th>Type</Th><Th>Status</Th><Th>Rating</Th><Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredVendors.map(v=>(
                <tr key={v.id}>
                  <Td>{v.name}</Td>
                  <Td>{v.email}</Td>
                  <Td>{v.type}</Td>
                  <Td>{v.status}</Td>
                  <Td>{v.rating}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiEdit onClick={()=>openEditModal(v)} title="Edit"/>
                      <FiTrash2 onClick={()=>deleteVendor(v.id)} title="Delete"/>
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
              <Select name="type" value={form.type} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}>
                {vendorTypes.map(t=><option key={t} value={t}>{t}</option>)}
              </Select>
              <Select name="status" value={form.status} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
              <Input type="number" name="rating" placeholder="Rating" value={form.rating} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Button onClick={saveVendor}>Save</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  )
};

export default AdminVendors;