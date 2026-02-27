import React, { useState } from "react";
import styled from "styled-components";

// ====================== Styled Components ======================

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
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #444;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Field = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-height: 120px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${props => props.secondary ? "#ccc" : "#007bff"};
  color: ${props => props.secondary ? "#000" : "#fff"};

  &:hover {
    opacity: 0.9;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 5px;
  font-size: 22px;
  cursor: pointer;
  color: #ffc107;
`;

const ReviewItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
  background: ${props =>
    props.status === "Published"
      ? "#28a745"
      : props.status === "Pending"
      ? "#f0ad4e"
      : "#dc3545"};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 15px;
`;

const StatCard = styled.div`
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #777;
`;

// ====================== Component ======================

const Reviews = () => {

  const [rating, setRating] = useState(0);

  const [form, setForm] = useState({
    hotel: "",
    bookingId: "",
    comment: ""
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      hotel: "Grand Hotel",
      bookingId: "BK1023",
      rating: 5,
      comment: "Amazing experience!",
      status: "Published"
    },
    {
      id: 2,
      hotel: "City Inn",
      bookingId: "BK1050",
      rating: 4,
      comment: "Very good service.",
      status: "Pending"
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {

    const newReview = {
      id: reviews.length + 1,
      ...form,
      rating,
      status: "Pending"
    };

    setReviews([newReview, ...reviews]);

    setForm({
      hotel: "",
      bookingId: "",
      comment: ""
    });

    setRating(0);

    alert("Review submitted!");
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <Container>

      <Title>My Reviews</Title>

      {/* ================= Stats ================= */}

      <StatsGrid>

        <StatCard>
          <StatNumber>{reviews.length}</StatNumber>
          <StatLabel>Total Reviews</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>
            {reviews.filter(r => r.status === "Published").length}
          </StatNumber>
          <StatLabel>Published</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>
            {reviews.filter(r => r.status === "Pending").length}
          </StatNumber>
          <StatLabel>Pending</StatLabel>
        </StatCard>

      </StatsGrid>


      {/* ================= Add Review ================= */}

      <Card>

        <SectionTitle>Add Review</SectionTitle>

        <Row>

          <Field>
            <Label>Hotel Name</Label>
            <Input
              name="hotel"
              value={form.hotel}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label>Booking ID</Label>
            <Input
              name="bookingId"
              value={form.bookingId}
              onChange={handleChange}
            />
          </Field>

        </Row>

        <Field style={{ marginTop: 15 }}>
          <Label>Rating</Label>

          <Stars>
            {[1,2,3,4,5].map(star => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  opacity: rating >= star ? 1 : 0.3
                }}
              >
                ★
              </span>
            ))}
          </Stars>
        </Field>

        <Field style={{ marginTop: 15 }}>
          <Label>Comment</Label>
          <TextArea
            name="comment"
            value={form.comment}
            onChange={handleChange}
          />
        </Field>

        <ButtonRow>
          <Button onClick={handleSubmit}>
            Submit Review
          </Button>
        </ButtonRow>

      </Card>


      {/* ================= Review List ================= */}

      <Card>

        <SectionTitle>Your Reviews</SectionTitle>

        {reviews.map(review => (
          <ReviewItem key={review.id}>

            <h4>{review.hotel}</h4>

            <div>
              {"★".repeat(review.rating)}
            </div>

            <p>{review.comment}</p>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Badge status={review.status}>
                {review.status}
              </Badge>

              <Button
                secondary
                onClick={() => handleDelete(review.id)}
              >
                Delete
              </Button>
            </div>

          </ReviewItem>
        ))}

      </Card>

    </Container>
  );
};

export default Reviews;