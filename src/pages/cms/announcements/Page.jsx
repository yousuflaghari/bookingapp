import React, { useState } from "react";
import styled from "styled-components";

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

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Website Maintenance", status: "Active" },
    { id: 2, title: "New Booking Feature", status: "Inactive" },
  ]);

  const handleDelete = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h2>Announcements</h2>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((a) => (
            <tr key={a.id}>
              <Td>{a.id}</Td>
              <Td>{a.title}</Td>
              <Td>{a.status}</Td>
              <Td>
                <Btn color="#198754">Edit</Btn>
                <Btn color="#dc3545" onClick={() => handleDelete(a.id)}>Delete</Btn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Announcement;