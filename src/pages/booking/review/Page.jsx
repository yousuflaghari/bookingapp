import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

/* ===========================
   Animations
=========================== */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px);}
  to { opacity: 1; transform: translateY(0);}
`;

/* ===========================
   Styled Components
=========================== */
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  color: #222;
`;

const ReviewCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const Reviewer = styled.h4`
  margin-bottom: 5px;
`;

const Comment = styled.p`
  font-size: 14px;
  color: #555;
`;

const Date = styled.span`
  font-size: 12px;
  color: #888;
`;

const Stars = styled.div`
  color: #ffc107;
  margin-bottom: 10px;
`;

const FormWrapper = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  resize: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: #0d6efd;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

/* ===========================
   Component
=========================== */
const initialReviews = [
  {
    id: 1,
    name: "Ali Khan",
    rating: 5,
    comment: "Amazing stay! Highly recommended.",
    date: "2026-02-10",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    rating: 4,
    comment: "Very good service but room was a bit small.",
    date: "2026-02-12",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      alert("Please fill all fields");
      return;
    }
    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([newReview, ...reviews]);
    setFormData({ name: "", rating: 5, comment: "" });
  };

  return (
    <PageWrapper>
      <Container>
        <Title>Guest Reviews</Title>

        {reviews.map((r) => (
          <ReviewCard key={r.id}>
            <Reviewer>{r.name}</Reviewer>
            <Stars>{"★".repeat(r.rating) + "☆".repeat(5 - r.rating)}</Stars>
            <Comment>{r.comment}</Comment>
            <Date>{r.date}</Date>
          </ReviewCard>
        ))}

        <FormWrapper>
          <h3>Submit Your Review</h3>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Select name="rating" value={formData.rating} onChange={handleChange}>
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </Select>
            <TextArea
              rows={4}
              placeholder="Your Comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
            <Button type="submit">Submit Review</Button>
          </form>
        </FormWrapper>
      </Container>
    </PageWrapper>
  );
};

export default Reviews;