import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiPlus, FiEdit, FiTrash2, FiChevronDown, FiSearch } from "react-icons/fi";

/* ================= GLOBAL ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLES ================= */

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
  background:#007bff;
  color:white;
  cursor:pointer;
  font-weight:bold;

  &:hover {
    background:#0069d9;
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

const FAQItem = styled.div`
  border:1px solid #eee;
  border-radius:10px;
  margin-bottom:12px;
  overflow:hidden;
`;

const Question = styled.div`
  padding:15px;
  background:#f9fafb;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
`;

const Answer = styled.div`
  padding:15px;
  background:white;
  border-top:1px solid #eee;
`;

const Actions = styled.div`
  display:flex;
  gap:12px;
  font-size:18px;
  cursor:pointer;

  svg:hover {
    color:#007bff;
  }
`;

const Badge = styled.span`
  padding:4px 8px;
  border-radius:6px;
  font-size:11px;
  font-weight:bold;
  color:white;
  background:${props => props.active ? "#28a745" : "#6c757d"};
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

const initialFAQ = [
  {
    id: 1,
    question: "How do I book a restaurant?",
    answer: "You can book by selecting your restaurant and clicking reserve.",
    category: "Booking",
    active: true,
  },
  {
    id: 2,
    question: "How to cancel reservation?",
    answer: "Go to your bookings and click cancel.",
    category: "Cancellation",
    active: true,
  },
];

/* ================= COMPONENT ================= */

const SupportFAQ = () => {
  const [faqs, setFaqs] = useState(initialFAQ);
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "",
    active: true,
  });

  const filteredFAQs = faqs.filter(f =>
    f.question.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingId(null);
    setForm({
      question: "",
      answer: "",
      category: "",
      active: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (faq) => {
    setEditingId(faq.id);
    setForm(faq);
    setModalOpen(true);
  };

  const saveFAQ = () => {
    if (editingId) {
      setFaqs(prev =>
        prev.map(f =>
          f.id === editingId ? { ...form, id: editingId } : f
        )
      );
    } else {
      setFaqs(prev => [
        { ...form, id: Date.now() },
        ...prev,
      ]);
    }
    setModalOpen(false);
  };

  const deleteFAQ = (id) => {
    setFaqs(prev => prev.filter(f => f.id !== id));
  };

  return (
    <>
      <GlobalStyle />

      <Container>

        <Header>
          <Title>Support FAQ</Title>
          <AddButton onClick={openAddModal}>
            <FiPlus />
            Add FAQ
          </AddButton>
        </Header>

        <SearchBox>
          <FiSearch />
          <SearchInput
            placeholder="Search FAQ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>

        {filteredFAQs.map(faq => (
          <FAQItem key={faq.id}>

            <Question onClick={() => setOpenId(openId === faq.id ? null : faq.id)}>
              <div>
                <strong>{faq.question}</strong>
                <div style={{ marginTop: 5 }}>
                  <Badge active={faq.active}>
                    {faq.active ? "Active" : "Hidden"}
                  </Badge>
                </div>
              </div>

              <Actions>
                <FiEdit onClick={() => openEditModal(faq)} />
                <FiTrash2 onClick={() => deleteFAQ(faq.id)} />
                <FiChevronDown />
              </Actions>
            </Question>

            {openId === faq.id && (
              <Answer>
                <div><strong>Category:</strong> {faq.category}</div>
                <p>{faq.answer}</p>
              </Answer>
            )}

          </FAQItem>
        ))}

        {modalOpen && (
          <ModalOverlay>
            <Modal>

              <Input
                placeholder="Question"
                value={form.question}
                onChange={(e) =>
                  setForm({ ...form, question: e.target.value })
                }
              />

              <Textarea
                rows={4}
                placeholder="Answer"
                value={form.answer}
                onChange={(e) =>
                  setForm({ ...form, answer: e.target.value })
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
                  checked={form.active}
                  onChange={(e) =>
                    setForm({ ...form, active: e.target.checked })
                  }
                />
                Active
              </CheckboxLabel>

              <SaveButton onClick={saveFAQ}>
                {editingId ? "Update FAQ" : "Save FAQ"}
              </SaveButton>

            </Modal>
          </ModalOverlay>
        )}

      </Container>
    </>
  );
};

export default SupportFAQ;