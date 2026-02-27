import React, { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

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

const FilterRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
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

const DeleteButton = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #dc3545;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

// ================= Component =================

const VendorReviews = () => {

  const [reviews, setReviews] = useState([
    { id:1, property:"Hilton Paris Opera", customer:"John Doe", rating:5, comment:"Amazing stay!", date:"2026-01-20" },
    { id:2, property:"Sunny Beach Villa", customer:"Jane Smith", rating:4, comment:"Very nice villa.", date:"2026-02-05" },
    { id:3, property:"Downtown Apartment", customer:"Ali Khan", rating:3, comment:"Average experience.", date:"2026-02-12" }
  ]);

  const [filterProperty, setFilterProperty] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredReviews = reviews.filter(r=>{
    return (filterProperty === "" || r.property === filterProperty) &&
           (filterRating === "" || r.rating === parseInt(filterRating));
  });

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this review?")){
      setReviews(reviews.filter(r=>r.id!==id));
    }
  };

  return (
    <Container>
      <Title>Property Reviews</Title>

      <FilterRow>
        <Select value={filterProperty} onChange={e=>setFilterProperty(e.target.value)}>
          <option value="">All Properties</option>
          {[...new Set(reviews.map(r=>r.property))].map(p=>(
            <option key={p} value={p}>{p}</option>
          ))}
        </Select>

        <Select value={filterRating} onChange={e=>setFilterRating(e.target.value)}>
          <option value="">All Ratings</option>
          {[5,4,3,2,1].map(r=>(
            <option key={r} value={r}>{r} Stars</option>
          ))}
        </Select>
      </FilterRow>

      <Table>
        <thead>
          <tr>
            <Th>Property</Th>
            <Th>Customer</Th>
            <Th>Rating</Th>
            <Th>Comment</Th>
            <Th>Date</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {filteredReviews.map(r=>(
            <tr key={r.id}>
              <Td>{r.property}</Td>
              <Td>{r.customer}</Td>
              <Td>{r.rating}</Td>
              <Td>{r.comment}</Td>
              <Td>{r.date}</Td>
              <Td>
                <DeleteButton onClick={()=>handleDelete(r.id)}><FaTrash /></DeleteButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VendorReviews;