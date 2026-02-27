import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Notification from "../../../components/Notification";
import Payment from "../payments/Page"; // Payment import

// ===== Container & Layout =====
const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1` font-size: 28px; margin-bottom: 20px; `;
const TopBar = styled.div` display: flex; justify-content: space-between; margin-bottom: 20px; `;
const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 250px;
`;
const AddButton = styled.button`
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;

// ===== Table =====
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`;
const Th = styled.th` padding: 12px; text-align: left; border-bottom: 2px solid #eee; `;
const Td = styled.td` padding: 12px; border-bottom: 1px solid #eee; `;
const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) => props.bg || "#007bff"};
  color: #fff;
  &:hover { opacity: 0.9; }
`;

// ===== Modal =====
const ModalOverlay = styled.div`
  position: fixed; top:0; left:0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;
const ModalTitle = styled.h2` margin-bottom: 15px; `;
const Input = styled.input` width: 100%; padding: 8px 10px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #ccc; `;
const Textarea = styled.textarea` width: 100%; padding: 8px 10px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #ccc; resize: vertical; `;
const SubmitButton = styled.button` padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; `;
const CloseButton = styled.button` padding: 6px 12px; background: #dc3545; color: white; border: none; border-radius: 6px; cursor: pointer; margin-left: 10px; `;

// ===== Main Component =====
const AdminHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingHotel, setEditingHotel] = useState(null);

  const [notification, setNotification] = useState(null); // notification state
  const [showPayment, setShowPayment] = useState(null); // payment modal state

  // ===== Fetch Hotels =====
  useEffect(() => {
    const fakeData = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Hotel ${i + 1}`,
      location: `City ${i + 1}`,
      rating: Math.floor(Math.random() * 5) + 1,
      rooms: 50 + i,
      offers: i % 2 === 0 ? "10% Off" : "",
      policies: "Free cancellation",
      gallery: ["img1.jpg", "img2.jpg"]
    }));
    setHotels(fakeData);
    setFilteredHotels(fakeData);
  }, []);

  // ===== Search Filter =====
  useEffect(() => {
    const filtered = hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [search, hotels]);

  // ===== Modal Handlers =====
  const openAddModal = () => { setEditingHotel(null); setModalOpen(true); };
  const openEditModal = (hotel) => { setEditingHotel(hotel); setModalOpen(true); };

  const showNotification = (message, type = "success") => { setNotification({ message, type }); };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      setHotels(prev => prev.filter(h => h.id !== id));
      setFilteredHotels(prev => prev.filter(h => h.id !== id));
      showNotification("Hotel deleted successfully!", "success");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      id: editingHotel ? editingHotel.id : hotels.length + 1,
      name: form.name.value,
      location: form.location.value,
      rating: parseInt(form.rating.value),
      rooms: parseInt(form.rooms.value),
      offers: form.offers.value,
      policies: form.policies.value,
      gallery: form.gallery.value.split(",")
    };

    if (editingHotel) {
      setHotels(prev => prev.map(h => h.id === data.id ? data : h));
      showNotification("Hotel updated successfully!", "success");
    } else {
      setHotels(prev => [...prev, data]);
      showNotification("Hotel added successfully!", "success");
    }
    setFilteredHotels(prev => [...prev.filter(h => h.id !== data.id), data]);
    setModalOpen(false);
  };

  return (
    <Container>
      <Title>Admin - Hotels</Title>
      <TopBar>
        <SearchInput placeholder="Search hotels..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <AddButton onClick={openAddModal}>Add Hotel</AddButton>
      </TopBar>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th><Th>Name</Th><Th>Location</Th><Th>Rating</Th><Th>Rooms</Th><Th>Offers</Th><Th>Policies</Th><Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {filteredHotels.map(hotel => (
            <tr key={hotel.id}>
              <Td>{hotel.id}</Td>
              <Td>{hotel.name}</Td>
              <Td>{hotel.location}</Td>
              <Td>{hotel.rating}</Td>
              <Td>{hotel.rooms}</Td>
              <Td>{hotel.offers}</Td>
              <Td>{hotel.policies}</Td>
              <Td>
                <ActionButton bg="#28a745" onClick={() => openEditModal(hotel)}>Edit</ActionButton>
                <ActionButton bg="#dc3545" onClick={() => handleDelete(hotel.id)}>Delete</ActionButton>
                <ActionButton bg="#17a2b8" onClick={() => setShowPayment(hotel)}>Pay</ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Hotel Modal */}
      <ModalOverlay show={modalOpen}>
        <ModalContent>
          <ModalTitle>{editingHotel ? "Edit Hotel" : "Add Hotel"}</ModalTitle>
          <form onSubmit={handleSubmit}>
            <Input name="name" defaultValue={editingHotel?.name || ""} placeholder="Hotel Name" required />
            <Input name="location" defaultValue={editingHotel?.location || ""} placeholder="Location" required />
            <Input name="rating" type="number" min="1" max="5" defaultValue={editingHotel?.rating || 1} placeholder="Rating" required />
            <Input name="rooms" type="number" defaultValue={editingHotel?.rooms || 1} placeholder="Rooms" required />
            <Input name="offers" defaultValue={editingHotel?.offers || ""} placeholder="Offers" />
            <Textarea name="policies" defaultValue={editingHotel?.policies || ""} placeholder="Policies"></Textarea>
            <Input name="gallery" defaultValue={editingHotel?.gallery?.join(",") || ""} placeholder="Gallery URLs (comma separated)" />
            <SubmitButton type="submit">{editingHotel ? "Update" : "Add"}</SubmitButton>
            <CloseButton type="button" onClick={() => setModalOpen(false)}>Close</CloseButton>
          </form>
        </ModalContent>
      </ModalOverlay>

      {/* Payment Modal */}
      {showPayment && (
        <ModalOverlay show={true}>
          <ModalContent>
            <Payment hotelName={showPayment.name} amount={showPayment.rooms * 50} />
            <CloseButton onClick={() => setShowPayment(null)}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Notification */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </Container>
  );
};

export default AdminHotels;