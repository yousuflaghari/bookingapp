import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const hoverCard = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.02);}
  100% { transform: scale(1);}
`;

/* ================== Layout ================== */
const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

const ReviewsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    animation: ${hoverCard} 0.6s ease infinite;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const Reviewer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
`;

const Rating = styled.div`
  font-size: 16px;
  color: gold;
  font-weight: 600;
`;

const Comment = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const PageButton = styled.button`
  padding: 8px 15px;
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.light};
  color: ${({ active, theme }) => active ? theme.colors.white : theme.colors.dark};
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

/* ================== Page Component ================== */
export default function HotelReviews() {
  const reviewsData = [
    { name: "Alice", rating: 5, comment: "Amazing experience! Very clean and comfortable." },
    { name: "Bob", rating: 4, comment: "Great location and friendly staff." },
    { name: "Charlie", rating: 5, comment: "Luxury at its best. Highly recommended!" },
    { name: "David", rating: 3, comment: "Room was okay, but service was slow." },
    { name: "Eva", rating: 4, comment: "Beautiful hotel with excellent amenities." },
    { name: "Frank", rating: 5, comment: "Perfect stay for business and leisure." },
    { name: "Grace", rating: 4, comment: "Comfortable rooms with city view." },
    { name: "Helen", rating: 5, comment: "Staff was very welcoming and helpful." }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const indexOfLast = currentPage * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirst, indexOfLast);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Container>
          <Title>Guest Reviews</Title>

          <ReviewsGrid>
            {currentReviews.map((r, i) => (
              <ReviewCard key={i}>
                <Reviewer>
                  <Name>{r.name}</Name>
                  <Rating>{"⭐".repeat(r.rating)}</Rating>
                </Reviewer>
                <Comment>{r.comment}</Comment>
              </ReviewCard>
            ))}
          </ReviewsGrid>

          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => (
              <PageButton
                key={i}
                active={currentPage === i+1}
                onClick={() => setCurrentPage(i+1)}
              >
                {i+1}
              </PageButton>
            ))}
          </Pagination>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
