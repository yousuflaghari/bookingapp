// src/components/AdminReviews.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiTrash2, FiCheckCircle, FiXCircle, FiPlus } from "react-icons/fi";

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

const Textarea = styled.textarea`
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border-radius:8px;
  border:1px solid #ccc;
  resize:vertical;
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

const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Cards = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:20px;
`;

const Card = styled.div`
  flex:1 1 200px;
  background-color:#e6f7ff;
  padding:20px;
  border-radius:12px;
  text-align:center;
  box-shadow:0 3px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  margin:0;
  font-size:16px;
  color:#555;
`;

const CardValue = styled.h2`
  margin:10px 0 0 0;
  font-size:28px;
  color:#007bff;
`;

// Sample Data
const initialReviews = [
  { id:1, user:"John Doe", hotel:"Hotel ABC", rating:5, comment:"Excellent stay!", status:"approved", date:"2026-02-20" },
  { id:2, user:"Jane Smith", hotel:"Hotel XYZ", rating:4, comment:"Very good service.", status:"pending", date:"2026-02-21" },
  { id:3, user:"Ali Khan", hotel:"Hotel ABC", rating:3, comment:"Average experience.", status:"rejected", date:"2026-02-21" },
  { id:4, user:"Sara Ahmed", hotel:"Hotel LMN", rating:5, comment:"Loved it!", status:"approved", date:"2026-02-22" },
  { id:5, user:"Ahmed Ali", hotel:"Hotel XYZ", rating:4, comment:"Good hospitality.", status:"pending", date:"2026-02-22" },
];

const AdminReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [search,setSearch] = useState("");
  const [modalOpen,setModalOpen] = useState(false);
  const [editReview,setEditReview] = useState(null);
  const [form,setForm] = useState({user:"",hotel:"",rating:"",comment:"",status:"pending"});

  const filteredReviews = reviews.filter(r =>
    r.user.toLowerCase().includes(search.toLowerCase()) ||
    r.hotel.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setForm({user:"",hotel:"",rating:"",comment:"",status:"pending"});
    setEditReview(null);
    setModalOpen(true);
  };

  const openEditModal = review => {
    setForm({...review});
    setEditReview(review.id);
    setModalOpen(true);
  };

  const saveReview = () => {
    if(editReview){
      setReviews(prev=>prev.map(r=>r.id===editReview?{...form,id:editReview}:r));
    } else {
      setReviews([{...form,id:Date.now()},...reviews]);
    }
    setModalOpen(false);
  };

  const deleteReview = id => setReviews(prev=>prev.filter(r=>r.id!==id));
  const approveReview = id => setReviews(prev=>prev.map(r=>r.id===id?{...r,status:"approved"}:r));
  const rejectReview = id => setReviews(prev=>prev.map(r=>r.id===id?{...r,status:"rejected"}:r));

  // Summary Cards
  const total = reviews.length;
  const approved = reviews.filter(r=>r.status==="approved").length;
  const pending = reviews.filter(r=>r.status==="pending").length;
  const rejected = reviews.filter(r=>r.status==="rejected").length;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Admin Reviews</Title>
          <AddButton onClick={openAddModal}><FiPlus /> Add Review</AddButton>
        </Header>

        <FilterWrapper>
          <FilterInput placeholder="Search by user or hotel..." value={search} onChange={e=>setSearch(e.target.value)}/>
        </FilterWrapper>

        <Cards>
          <Card><CardTitle>Total Reviews</CardTitle><CardValue>{total}</CardValue></Card>
          <Card><CardTitle>Approved</CardTitle><CardValue>{approved}</CardValue></Card>
          <Card><CardTitle>Pending</CardTitle><CardValue>{pending}</CardValue></Card>
          <Card><CardTitle>Rejected</CardTitle><CardValue>{rejected}</CardValue></Card>
        </Cards>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>User</Th>
                <Th>Hotel</Th>
                <Th>Rating</Th>
                <Th>Comment</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredReviews.map(r=>(
                <tr key={r.id}>
                  <Td>{r.user}</Td>
                  <Td>{r.hotel}</Td>
                  <Td>{r.rating}</Td>
                  <Td>{r.comment}</Td>
                  <Td>{r.status}</Td>
                  <Td>{r.date}</Td>
                  <Td>
                    <ActionWrapper>
                      <FiCheckCircle onClick={()=>approveReview(r.id)} title="Approve"/>
                      <FiXCircle onClick={()=>rejectReview(r.id)} title="Reject"/>
                      <FiTrash2 onClick={()=>deleteReview(r.id)} title="Delete"/>
                      <FiPlus onClick={()=>openEditModal(r)} title="Edit"/>
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
              <Input name="user" placeholder="User" value={form.user} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Input name="hotel" placeholder="Hotel/Restaurant" value={form.hotel} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Input name="rating" placeholder="Rating" value={form.rating} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Textarea name="comment" placeholder="Comment" value={form.comment} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
              <Button onClick={saveReview}>{editReview?"Update":"Add"}</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};

export default AdminReviews;