import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 15px;
`;

const ImageCard = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #ddd;
`;

const Gallery = () => {
  const images = Array.from({length:12}, (_,i)=>`https://picsum.photos/300/180?random=${i+1000}`);
  return (
    <Wrapper>
      <Title>Hotel Gallery</Title>
      <GalleryGrid>
        {images.map((img,i)=><ImageCard key={i} src={img} alt={`Hotel ${i}`} />)}
      </GalleryGrid>
    </Wrapper>
  );
};

export default Gallery;