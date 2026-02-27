import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  padding: 35px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  color: #222;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-bottom: 20px;
  resize: none;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: 0.3s;
  min-width: 140px;
  background: ${(props) =>
    props.variant === "danger" ? "#dc3545" : "#0d6efd"};
  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const Message = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  font-size: 14px;
  color: ${(props) => (props.success ? "#0f5132" : "#842029")};
  background: ${(props) =>
    props.success ? "#d1e7dd" : "#f8d7da"};
`;

const RefundBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 12px;
  font-size: 14px;
`;

/* ===========================
   Component
=========================== */

const CancelBooking = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const bookingAmount = 200; // Example booking amount

  const handleCancel = async () => {
    if (!reason) return alert("Please select a reason.");

    setLoading(true);

    // Simulate API call delay
    await new Promise((res) => setTimeout(res, 2000));

    setLoading(false);
    setSuccess(true);

    // Auto redirect after 2s
    setTimeout(() => {
      navigate("/booking/history");
    }, 2500);
  };

  // Example refund policy
  const calculateRefund = () => {
    switch (reason) {
      case "Change of plans":
        return bookingAmount * 0.8; // 80% refund
      case "Found better price":
        return bookingAmount * 0.7;
      case "Health reasons":
        return bookingAmount * 0.9;
      default:
        return bookingAmount * 0.5;
    }
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Cancel Booking</Title>
        <Description>
          Please select a reason for cancelling your booking. Refund will be calculated accordingly.
        </Description>

        {!loading && !success && (
          <>
            <Select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="">Select Reason</option>
              <option value="Change of plans">Change of plans</option>
              <option value="Found better price">Found better price</option>
              <option value="Health reasons">Health reasons</option>
              <option value="Other">Other</option>
            </Select>

            <Textarea
              rows="3"
              placeholder="Additional notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            {reason && (
              <RefundBox>
                Estimated Refund: ${calculateRefund().toFixed(2)}
              </RefundBox>
            )}

            <BtnGroup>
              <Button onClick={() => navigate(-1)}>Back</Button>
              <Button variant="danger" onClick={handleCancel}>
                Confirm Cancel
              </Button>
            </BtnGroup>
          </>
        )}

        {loading && <Message>Processing cancellation...</Message>}

        {success && (
          <Message success>
            Booking cancelled successfully! Refund: ${calculateRefund().toFixed(2)}
          </Message>
        )}
      </Card>
    </PageWrapper>
  );
};

export default CancelBooking;