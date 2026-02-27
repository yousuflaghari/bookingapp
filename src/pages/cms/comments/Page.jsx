import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  color: #222;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #0d6efd;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Btn = styled.button`
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.color || "#0d6efd"};

  &:hover {
    opacity: 0.9;
  }
`;

const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "Ali", blog: "Top 10 Hotels in Paris", comment: "Great article!", status: "Pending" },
    { id: 2, user: "Sara", blog: "How to Get the Best Deals", comment: "Very helpful tips.", status: "Approved" },
    { id: 3, user: "Omar", blog: "Travel Essentials", comment: "Nice guide.", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: c.status === "Approved" ? "Pending" : "Approved" } : c))
    );
  };

  const handleDelete = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <Wrapper>
      <Title>Comments Management</Title>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>User</Th>
            <Th>Blog</Th>
            <Th>Comment</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <Td>{c.id}</Td>
              <Td>{c.user}</Td>
              <Td>{c.blog}</Td>
              <Td>{c.comment}</Td>
              <Td>{c.status}</Td>
              <Td>
                <Btn color={c.status === "Approved" ? "#ffc107" : "#198754"} onClick={() => handleApprove(c.id)}>
                  {c.status === "Approved" ? "Unapprove" : "Approve"}
                </Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(c.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Comments;