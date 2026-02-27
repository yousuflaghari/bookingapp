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

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${({ bg }) => bg || "#007bff"};
  color: #fff;
  margin-right: 5px;

  &:hover {
    opacity: 0.9;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  width: 400px;
  max-width: 90%;
`;

// ================= Component =================

const VendorOffers = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: "Summer Sale", discount: "20%", validTill: "2026-06-30" },
    { id: 2, title: "Weekend Special", discount: "15%", validTill: "2026-05-15" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [form, setForm] = useState({ title: "", discount: "", validTill: "" });

  const handleAdd = () => {
    setForm({ title: "", discount: "", validTill: "" });
    setEditingOffer(null);
    setShowModal(true);
  };

  const handleEdit = (offer) => {
    setForm({ title: offer.title, discount: offer.discount, validTill: offer.validTill });
    setEditingOffer(offer);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this offer?")){
      setOffers(offers.filter(o=>o.id!==id));
    }
  };

  const handleSave = () => {
    if(editingOffer){
      setOffers(offers.map(o=>o.id===editingOffer.id ? { ...o, ...form } : o));
    } else {
      setOffers([...offers, { id: Date.now(), ...form }]);
    }
    setShowModal(false);
  };

  return (
    <Container>
      <Title>Manage Offers</Title>
      <Button onClick={handleAdd}>Add New Offer</Button>

      <Card>
        <Table>
          <thead>
            <tr>
              <Th>Title</Th>
              <Th>Discount</Th>
              <Th>Valid Till</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {offers.map(offer=>(
              <tr key={offer.id}>
                <Td>{offer.title}</Td>
                <Td>{offer.discount}</Td>
                <Td>{offer.validTill}</Td>
                <Td>
                  <Button onClick={()=>handleEdit(offer)} bg="#28a745"><FaEdit /></Button>
                  <Button onClick={()=>handleDelete(offer.id)} bg="#dc3545"><FaTrash /></Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {showModal && (
        <ModalOverlay onClick={()=>setShowModal(false)}>
          <Modal onClick={e=>e.stopPropagation()}>
            <h2>{editingOffer ? "Edit Offer" : "Add Offer"}</h2>
            <Field>
              <label>Title</label>
              <Input value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
            </Field>
            <Field>
              <label>Discount</label>
              <Input value={form.discount} onChange={e=>setForm({...form, discount:e.target.value})} />
            </Field>
            <Field>
              <label>Valid Till</label>
              <Input type="date" value={form.validTill} onChange={e=>setForm({...form, validTill:e.target.value})} />
            </Field>
            <Button onClick={handleSave}>{editingOffer ? "Update" : "Add"}</Button>
          </Modal>
        </ModalOverlay>
      )}

    </Container>
  );
};

export default VendorOffers;