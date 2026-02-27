import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiFileText, FiDownload, FiPrinter, FiXCircle } from "react-icons/fi";

/* ================= GLOBAL ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  max-width:900px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.h2`
  color:#333;
  margin-bottom:20px;
`;

const TableStyled = styled.table`
  width:100%;
  border-collapse:collapse;
`;

const Th = styled.th`
  text-align:left;
  padding:12px;
  background:#343a40;
  color:white;
`;

const Td = styled.td`
  padding:12px;
  border-bottom:1px solid #eee;
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
  width:500px;
`;

const CloseButton = styled.button`
  padding:6px 12px;
  border:none;
  border-radius:6px;
  background:#dc3545;
  color:white;
  font-weight:bold;
  cursor:pointer;
  float:right;

  &:hover {
    opacity:0.9;
  }
`;

const InvoiceHeader = styled.h3`
  margin-bottom:15px;
`;

const InvoiceRow = styled.p`
  margin:5px 0;
  display:flex;
  justify-content:space-between;
`;

/* ================= SAMPLE DATA ================= */

const invoicesData = [
  {
    id:1,
    bookingId:"BKG-101",
    date:"2026-02-20",
    amount:"$45.00",
    status:"Paid",
    details:[
      { label:"Table", value:"Table 5" },
      { label:"Guests", value:"3" },
      { label:"Time", value:"7:00 PM" },
      { label:"Notes", value:"Window seat" },
    ]
  },
  {
    id:2,
    bookingId:"BKG-102",
    date:"2026-02-22",
    amount:"$60.00",
    status:"Paid",
    details:[
      { label:"Table", value:"Table 2" },
      { label:"Guests", value:"4" },
      { label:"Time", value:"8:30 PM" },
      { label:"Notes", value:"Birthday party" },
    ]
  }
];

/* ================= COMPONENT ================= */

const InvoicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState(null);

  const openModal = (invoice) => {
    setActiveInvoice(invoice);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveInvoice(null);
    setModalOpen(false);
  };

  const handleDownload = (invoice) => {
    alert(`Downloading invoice ${invoice.bookingId}...`);
    // Implement PDF download API
  };

  const handlePrint = (invoice) => {
    alert(`Printing invoice ${invoice.bookingId}...`);
    // Implement print logic
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Invoices</Header>

        <TableStyled>
          <thead>
            <tr>
              <Th>Booking ID</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {invoicesData.map(inv => (
              <tr key={inv.id}>
                <Td>{inv.bookingId}</Td>
                <Td>{inv.date}</Td>
                <Td>{inv.amount}</Td>
                <Td>{inv.status}</Td>
                <Td>
                  <Actions>
                    <FiFileText onClick={() => openModal(inv)} />
                    <FiDownload onClick={() => handleDownload(inv)} />
                    <FiPrinter onClick={() => handlePrint(inv)} />
                  </Actions>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableStyled>

        {modalOpen && activeInvoice && (
          <ModalOverlay>
            <Modal>
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <InvoiceHeader>Invoice: {activeInvoice.bookingId}</InvoiceHeader>
              <InvoiceRow><strong>Date:</strong> {activeInvoice.date}</InvoiceRow>
              <InvoiceRow><strong>Amount:</strong> {activeInvoice.amount}</InvoiceRow>
              <InvoiceRow><strong>Status:</strong> {activeInvoice.status}</InvoiceRow>
              {activeInvoice.details.map((d,i) => (
                <InvoiceRow key={i}>
                  <span>{d.label}</span>
                  <span>{d.value}</span>
                </InvoiceRow>
              ))}
            </Modal>
          </ModalOverlay>
        )}

      </Container>
    </>
  );
};

export default InvoicePage;