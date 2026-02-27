import React, { useState } from "react";
import styled from "styled-components";

/* ===========================
   Styled Components
=========================== */
const Wrapper = styled.div`
  padding: 30px;
  background: #f4f6f9;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  color: #222;
`;

const UploadForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const FileInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Btn = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background: #0d6efd;

  &:hover {
    opacity: 0.9;
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  gap: 16px;
`;

const MediaCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ddd;
  background: white;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  background: #dc3545;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Media = () => {
  const [mediaFiles, setMediaFiles] = useState([
    { id: 1, type: "image", url: "https://via.placeholder.com/150" },
    { id: 2, type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMedia = Array.from(files).map((file) => ({
      id: Date.now() + Math.random(),
      type: file.type.startsWith("image") ? "image" : "video",
      url: URL.createObjectURL(file),
    }));

    setMediaFiles((prev) => [...newMedia, ...prev]);
  };

  const handleDelete = (id) => {
    setMediaFiles((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <Wrapper>
      <Title>Media Management</Title>

      <UploadForm>
        <FileInput type="file" multiple onChange={handleUpload} />
      </UploadForm>

      <MediaGrid>
        {mediaFiles.map((m) => (
          <MediaCard key={m.id}>
            {m.type === "image" ? (
              <img src={m.url} alt="media" style={{ width: "100%", display: "block" }} />
            ) : (
              <video src={m.url} controls style={{ width: "100%", display: "block" }} />
            )}
            <DeleteBtn onClick={() => handleDelete(m.id)}>Delete</DeleteBtn>
          </MediaCard>
        ))}
      </MediaGrid>
    </Wrapper>
  );
};

export default Media;