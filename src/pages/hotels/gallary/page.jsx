import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/* ================== Animations ================== */
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
`;

const hoverZoom = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

/* ================== Layout ================== */
const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 20px;
`;

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease forwards;
  &:hover img {
    animation: ${hoverZoom} 0.6s ease infinite;
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background: rgba(0,0,0,0.8);
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

/* ================== Page Component ================== */
export default function HotelGallery() {
  const images = [
    "/images/hotel1.jpg","/images/hotel2.jpg","/images/hotel3.jpg",
    "/images/hotel4.jpg","/images/hotel5.jpg","/images/hotel6.jpg",
    "/images/hotel7.jpg","/images/hotel8.jpg","/images/hotel9.jpg"
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Container>
          <Title>Hotel Gallery</Title>

          <GalleryGrid>
            {images.map((img, i) => (
              <ImageCard key={i} onClick={() => openModal(img)}>
                <HotelImage src={img} alt={`Hotel image ${i+1}`} />
              </ImageCard>
            ))}
          </GalleryGrid>

          <ModalOverlay show={modalOpen} onClick={closeModal}>
            {selectedImage && (
              <ModalContent>
                <ModalImage src={selectedImage} alt="Selected hotel" />
              </ModalContent>
            )}
          </ModalOverlay>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
