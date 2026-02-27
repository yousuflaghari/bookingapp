import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2, FiSearch } from "react-icons/fi";

/* ================= GLOBAL STYLE ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  max-width:1000px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

const Title = styled.h2`
  color:#333;
`;

const AddButton = styled.button`
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 18px;
  border:none;
  border-radius:8px;
  background:#0d6efd;
  color:white;
  cursor:pointer;
  font-weight:bold;

  &:hover {
    background:#0b5ed7;
  }
`;

const SearchBox = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  border:1px solid #ccc;
  border-radius:8px;
  padding:8px 12px;
  margin-bottom:20px;
`;

const SearchInput = styled.input`
  border:none;
  outline:none;
  flex:1;
`;

const GuideItem = styled.div`
  border:1px solid #eee;
  border-radius:10px;
  padding:15px;
  margin-bottom:12px;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
`;

const GuideInfo = styled.div`
  max-width:85%;
`;

const GuideTitle = styled.h4`
  margin:0 0 8px 0;
`;

const GuideDesc = styled.p`
  margin:0;
  font-size:14px;
  color:#555;
`;

const GuideCategory = styled.span`
  font-size:12px;
  font-weight:bold;
  color:white;
  padding:4px 8px;
  border-radius:6px;
  background:#6c757d;
`;

const Badge = styled.span`
  font-size:12px;
  font-weight:bold;
  padding:4px 8px;
  border-radius:6px;
  color:white;
  background:${props => props.published ? "#28a745" : "#ffc107"};
`;

const Actions = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;

  svg:hover {
    color:#0d6efd;
  }
`;

const ModalOverlay = styled.div`
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Modal = styled.div`
  background:white;
  padding:25px;
  border-radius:12px;
  width:450px;
`;

const Input = styled.input`
  width:100%;
  padding:10px;
  margin-bottom:12px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const Textarea = styled.textarea`
  width:100%;
  padding:10px;
  margin-bottom:12px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const CheckboxLabel = styled.label`
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:15px;
`;

const SaveButton = styled.button`
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#343a40;
  color:white;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#23272b;
  }
`;

/* ================= SAMPLE DATA ================= */

const initialGuides = [
  {
    id: 1,
    title: "How to Book a Restaurant",
    description: "Step by step guide to book a restaurant in our app.",
    category: "Booking",
    published: true,
  },
  {
    id: 2,
    title: "Cancel a Reservation",
    description: "Guide on how to cancel your booking easily.",
    category: "Cancellation",
    published: false,
  },
];

/* ================= COMPONENT ================= */

const SupportGuide = () => {
  const [guides, setGuides] = useState(initialGuides);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    published: true,
  });

  const filteredGuides = guides.filter(g =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingId(null);
    setForm({
      title: "",
      description: "",
      category: "",
      published: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (guide) => {
    setEditingId(guide.id);
    setForm(guide);
    setModalOpen(true);
  };

  const saveGuide = () => {
    if (editingId) {
      setGuides(prev =>
        prev.map(g =>
          g.id === editingId ? { ...form, id: editingId } : g
        )
      );
    } else {
      setGuides(prev => [
        { ...form, id: Date.now() },
        ...prev,
      ]);
    }
    setModalOpen(false);
  };

  const deleteGuide = (id) => {
    setGuides(prev => prev.filter(g => g.id !== id));
  };

  return (
    <>
      <GlobalStyle />

      <Container>

        <Header>
          <Title>User Guides</Title>
          <AddButton onClick={openAddModal}>
            <FiPlus />
            Add Guide
          </AddButton>
        </Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>

        {filteredGuides.map(guide => (
          <GuideItem key={guide.id}>

            <GuideInfo>
              <GuideTitle>{guide.title}</GuideTitle>
              <GuideDesc>{guide.description}</GuideDesc>
              <div style={{ marginTop:6 }}>
                <GuideCategory>{guide.category}</GuideCategory>{" "}
                <Badge published={guide.published}>
                  {guide.published ? "Published" : "Draft"}
                </Badge>
              </div>
            </GuideInfo>

            <Actions>
              <FiEdit onClick={() => openEditModal(guide)} />
              <FiTrash2 onClick={() => deleteGuide(guide.id)} />
            </Actions>

          </GuideItem>
        ))}

        {modalOpen && (
          <ModalOverlay>
            <Modal>

              <Input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <Textarea
                rows={4}
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <Input
                placeholder="Category"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              />

              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) =>
                    setForm({ ...form, published: e.target.checked })
                  }
                />
                Published
              </CheckboxLabel>

              <SaveButton onClick={saveGuide}>
                {editingId ? "Update Guide" : "Save Guide"}
              </SaveButton>

            </Modal>
          </ModalOverlay>
        )}

      </Container>
    </>
  );
};

export default SupportGuide;