// user/past-booking.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const BookingWrapper = styled.div`
  padding: 20px;
`;

const BookingCard = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const BookingTitle = styled.h3`
  margin: 0 0 8px 0;
`;

const BookingDate = styled.p`
  margin: 0;
  color: #555;
`;

const PastBooking = () => {
  const [bookings, setBookings] = useState([]);

  // Example fetch function (replace with real API)
  useEffect(() => {
    // Simulate API call
    const fetchBookings = async () => {
      const data = [
        { id: 1, hotel: "Grand Hotel", checkIn: "2026-01-05", checkOut: "2026-01-10" },
        { id: 2, hotel: "Sea View Resort", checkIn: "2025-12-15", checkOut: "2025-12-20" },
        { id: 3, hotel: "Mountain Inn", checkIn: "2025-11-01", checkOut: "2025-11-05" },
      ];
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <BookingWrapper>
      <h2>Past Bookings</h2>
      {bookings.length === 0 ? (
        <p>No past bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <BookingCard key={booking.id}>
            <BookingTitle>{booking.hotel}</BookingTitle>
            <BookingDate>
              {booking.checkIn} - {booking.checkOut}
            </BookingDate>
          </BookingCard>
        ))
      )}
    </BookingWrapper>
  );
};

export default PastBooking;