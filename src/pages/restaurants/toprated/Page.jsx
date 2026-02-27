import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */

const Container = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const SearchBar = styled.input`
  padding: 10px 14px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Filters = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const FilterBtn = styled.button`
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #222;
`;

const Rating = styled.div`
  margin: 4px 0;
  color: #ffc107;
`;

const Info = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
`;

const Badge = styled.span`
  background: ${(props) => props.bg || "#28a745"};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  margin-right: 6px;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${(props) => props.bg || "#0d6efd"};

  &:hover {
    opacity: 0.85;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 8px;
`;

const PageBtn = styled.button`
  padding: 6px 12px;
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

/* ===========================
   Component
=========================== */

const TopRatedRestaurants = () => {
  // Search and filters
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const filters = ["All", "Pizza", "Burgers", "Desserts", "Drinks", "Fast Food"];

  // Sample restaurant data (for 300+ lines, I will repeat objects)
  const allRestaurants = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Restaurant ${i + 1}`,
    category: filters[(i % filters.length) || 0],
    rating: (Math.random() * 2 + 3).toFixed(1), // 3.0-5.0
    location: ["Lahore", "Karachi", "Islamabad", "Multan"][i % 4],
    price: `${1000 + (i % 5) * 200} Rs for two`,
    offer: i % 3 === 0 ? "20% OFF" : null,
    image: `https://source.unsplash.com/collection/190727/400x300?sig=${i}`,
  }));

  // Filtered & search
  const filteredRestaurants = allRestaurants
    .filter((r) => (filter === "All" ? true : r.category === filter))
    .filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    );

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const paginatedRestaurants = filteredRestaurants.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container>
      <Title>Top Rated Restaurants</Title>

      <SearchBar
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Filters>
        {filters.map((f) => (
          <FilterBtn
            key={f}
            active={filter === f}
            onClick={() => {
              setFilter(f);
              setPage(1);
            }}
          >
            {f}
          </FilterBtn>
        ))}
      </Filters>

      <Grid>
        {paginatedRestaurants.map((r) => (
          <Card key={r.id}>
            <Image src={r.image} alt={r.name} />
            <Content>
              <Name>{r.name}</Name>
              <Rating>⭐ {r.rating}</Rating>
              <Info>{r.location}</Info>
              <Info>{r.price}</Info>
              {r.offer && <Badge bg="#dc3545">{r.offer}</Badge>}

              <BtnGroup>
                <Button bg="#28a745">View</Button>
                <Button bg="#0d6efd">Edit</Button>
                <Button bg="#dc3545">Delete</Button>
              </BtnGroup>
            </Content>
          </Card>
        ))}
      </Grid>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn
            key={i}
            active={page === i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </PageBtn>
        ))}
      </Pagination>
    </Container>
  );
};

export default TopRatedRestaurants;