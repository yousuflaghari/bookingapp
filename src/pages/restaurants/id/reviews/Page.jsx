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

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: relative;
`;

const Status = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${(props) => (props.approved ? "#28a745" : "#ffc107")};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Stars = styled.div`
  color: #ffc107;
  margin-bottom: 6px;
`;

const Comment = styled.div`
  color: #444;
  margin-bottom: 6px;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #777;
`;

const BtnGroup = styled.div`
  margin-top: 10px;
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

/* ===========================
   Helper
=========================== */

const renderStars = (rating) => {
  return "⭐".repeat(rating);
};

/* ===========================
   Component
=========================== */

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ali Khan",
      rating: 5,
      comment: "Amazing food and great service!",
      date: "2026-02-20",
      approved: true,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      rating: 3,
      comment: "Food was okay but waiting time was long.",
      date: "2026-02-18",
      approved: false,
    },
  ]);

  const approveReview = (id) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, approved: true } : r
      )
    );
  };

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Container>
      <Title>Restaurant Reviews</Title>

      {reviews.map((review) => (
        <Card key={review.id}>
          <Status approved={review.approved}>
            {review.approved ? "Approved" : "Pending"}
          </Status>

          <Name>{review.name}</Name>

          <Stars>{renderStars(review.rating)}</Stars>

          <Comment>{review.comment}</Comment>

          <DateText>{review.date}</DateText>

          <BtnGroup>
            {!review.approved && (
              <Button
                bg="#28a745"
                onClick={() => approveReview(review.id)}
              >
                Approve
              </Button>
            )}
            <Button
              bg="#dc3545"
              onClick={() => deleteReview(review.id)}
            >
              Delete
            </Button>
          </BtnGroup>
        </Card>
      ))}
    </Container>
  );
};

export default ReviewsPage;