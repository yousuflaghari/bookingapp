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

const UploadBox = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
`;

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  background: #dc3545;
  color: white;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    opacity: 0.85;
  }
`;

/* ===========================
   Component
=========================== */

const GalleryPage = () => {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    "https://images.unsplash.com/photo-1541542684-4a6f0a1b1c6a",
  ]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const deleteImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>Restaurant Gallery</Title>

      <UploadBox>
        <Input type="file" multiple accept="image/*" onChange={handleUpload} />
      </UploadBox>

      <Grid>
        {images.map((img, i) => (
          <Card key={i}>
            <Image src={img} alt="gallery" />
            <DeleteBtn onClick={() => deleteImage(i)}>Delete</DeleteBtn>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryPage;