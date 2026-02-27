import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #222;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid #0d6efd;
  background: ${(props) => (props.active ? "#0d6efd" : "white")};
  color: ${(props) => (props.active ? "white" : "#0d6efd")};
  cursor: pointer;

  &:hover {
    background: #0d6efd;
    color: white;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
`;

const Name = styled.h4`
  margin: 8px 0 4px;
`;

const Price = styled.div`
  font-weight: bold;
  color: #28a745;
`;

const BtnGroup = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.bg || "#0d6efd"};

  &:hover {
    opacity: 0.85;
  }
`;

const AddBtn = styled.button`
  margin-bottom: 15px;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: #0d6efd;
`;

/* ===========================
   Component
=========================== */

const MenuPage = () => {
  const categories = ["All", "Pizza", "Burgers", "Drinks", "Desserts"];
  const [activeCat, setActiveCat] = useState("All");

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Cheese Pizza",
      category: "Pizza",
      price: 1200,
      img: "https://images.unsplash.com/photo-1601924638867-3ec3b3c8f6b2",
    },
    {
      id: 2,
      name: "Zinger Burger",
      category: "Burgers",
      price: 650,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
  ]);

  const filtered =
    activeCat === "All"
      ? items
      : items.filter((i) => i.category === activeCat);

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <Container>
      <Title>Restaurant Menu</Title>

      <AddBtn>Add Menu Item</AddBtn>

      <CategoryTabs>
        {categories.map((cat) => (
          <Tab
            key={cat}
            active={activeCat === cat}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </Tab>
        ))}
      </CategoryTabs>

      <Grid>
        {filtered.map((item) => (
          <Card key={item.id}>
            <Image src={item.img} alt={item.name} />
            <Name>{item.name}</Name>
            <Price>Rs {item.price}</Price>

            <BtnGroup>
              <Button bg="#28a745">Edit</Button>
              <Button bg="#dc3545" onClick={() => deleteItem(item.id)}>
                Delete
              </Button>
            </BtnGroup>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default MenuPage;