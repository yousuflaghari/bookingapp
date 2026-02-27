import React, { useState } from "react";
import styled from "styled-components";

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
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #007bff;
  color: #fff;
  margin-right: 5px;

  &:hover {
    opacity: 0.9;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  width: 500px;
  max-width: 90%;
`;

// ================= Component =================

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Hilton Paris Opera",
      location: "Paris, France",
      price: "$250/night",
      rating: 4.7
    },
    {
      id: 2,
      name: "Burj Al Arab",
      location: "Dubai, UAE",
      price: "$400/night",
      rating: 4.9
    },
    {
      id: 3,
      name: "Four Seasons Istanbul",
      location: "Istanbul, Turkey",
      price: "$320/night",
      rating: 4.8
    }
  ]);

  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredWishlist = wishlist.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const removeItem = (id) => {
    if(window.confirm("Remove this item from wishlist?")){
      setWishlist(wishlist.filter(item => item.id !== id));
    }
  };

  return (
    <Container>
      <Title>My Wishlist</Title>

      {/* Search */}
      <Card>
        <Row>
          <Input
            placeholder="Search wishlist..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Row>
      </Card>

      {/* Wishlist Table */}
      <Card>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Location</Th>
              <Th>Price</Th>
              <Th>Rating</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {filteredWishlist.map(item => (
              <tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.location}</Td>
                <Td>{item.price}</Td>
                <Td>{item.rating}</Td>
                <Td>
                  <Button onClick={() => setSelectedItem(item)}>View</Button>
                  <Button onClick={() => removeItem(item.id)} style={{ background: "#dc3545" }}>Remove</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Item Details Modal */}
      {selectedItem && (
        <ModalOverlay onClick={() => setSelectedItem(null)}>
          <Modal onClick={e => e.stopPropagation()}>
            <h2>{selectedItem.name}</h2>
            <p><b>Location:</b> {selectedItem.location}</p>
            <p><b>Price:</b> {selectedItem.price}</p>
            <p><b>Rating:</b> {selectedItem.rating}</p>
            <Button onClick={() => setSelectedItem(null)}>Close</Button>
          </Modal>
        </ModalOverlay>
      )}

    </Container>
  );
};

export default Wishlist;