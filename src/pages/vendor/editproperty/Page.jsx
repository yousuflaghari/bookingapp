import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

// ================= Styled Components =================

const Container = styled.div`
  padding: 30px;
  min-height: 100vh;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #222;
`;

const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-height: 100px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 12px 18px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const ImagePreview = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const PreviewImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const RemoveIcon = styled(FaTrash)`
  position: absolute;
  top: -5px;
  right: -5px;
  color: red;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  padding: 2px;
`;

// ================= Component =================

const EditProperty = ({ propertyId }) => {

  const [property, setProperty] = useState(null);

  const amenitiesList = ["WiFi", "Parking", "Pool", "AC", "Gym", "Pet Friendly"];

  // Fetch existing property data (sample static for now)
  useEffect(() => {
    // Here you can fetch property from backend using propertyId
    const existingProperty = {
      name: "Hilton Paris Opera",
      type: "Hotel",
      description: "Luxury hotel in the heart of Paris",
      city: "Paris",
      address: "10 Rue Scribe",
      latitude: "48.8708",
      longitude: "2.3315",
      rooms: [
        { type: "Standard", price: "250" },
        { type: "Deluxe", price: "350" }
      ],
      amenities: ["WiFi", "Pool", "AC"],
      images: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100"
      ]
    };
    setProperty(existingProperty);
  }, [propertyId]);

  if(!property) return <Container>Loading...</Container>;

  const handleChange = (field, value) => {
    setProperty({ ...property, [field]: value });
  };

  const handleAmenityChange = (amenity) => {
    if(property.amenities.includes(amenity)){
      setProperty({ ...property, amenities: property.amenities.filter(a => a !== amenity) });
    } else {
      setProperty({ ...property, amenities: [...property.amenities, amenity] });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setProperty({ ...property, images: [...property.images, ...newImages] });
  };

  const removeImage = (index) => {
    const updated = [...property.images];
    updated.splice(index,1);
    setProperty({ ...property, images: updated });
  };

  const addRoom = () => {
    setProperty({ ...property, rooms: [...property.rooms, { type:"", price:"" }] });
  };

  const handleRoomChange = (index, field, value) => {
    const updatedRooms = [...property.rooms];
    updatedRooms[index][field] = value;
    setProperty({ ...property, rooms: updatedRooms });
  };

  const handleSubmit = () => {
    console.log("Updated Property:", property);
    alert("Property updated successfully!");
    // API call to update property goes here
  };

  return (
    <Container>
      <Title>Edit Property</Title>

      <Card>
        <h2>Basic Information</h2>
        <Field>
          <Label>Property Name</Label>
          <Input value={property.name} onChange={e=>handleChange("name", e.target.value)} />
        </Field>
        <Field>
          <Label>Property Type</Label>
          <Select value={property.type} onChange={e=>handleChange("type", e.target.value)}>
            <option value="">Select Type</option>
            <option value="Hotel">Hotel</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
          </Select>
        </Field>
        <Field>
          <Label>Description</Label>
          <TextArea value={property.description} onChange={e=>handleChange("description", e.target.value)} />
        </Field>
      </Card>

      <Card>
        <h2>Location</h2>
        <Field>
          <Label>City</Label>
          <Input value={property.city} onChange={e=>handleChange("city", e.target.value)} />
        </Field>
        <Field>
          <Label>Address</Label>
          <TextArea value={property.address} onChange={e=>handleChange("address", e.target.value)} />
        </Field>
        <Field>
          <Label>Latitude</Label>
          <Input value={property.latitude} onChange={e=>handleChange("latitude", e.target.value)} />
        </Field>
        <Field>
          <Label>Longitude</Label>
          <Input value={property.longitude} onChange={e=>handleChange("longitude", e.target.value)} />
        </Field>
      </Card>

      <Card>
        <h2>Rooms & Pricing</h2>
        {property.rooms.map((room,index)=>(
          <div key={index} style={{display:"flex", gap:"10px", marginBottom:"10px"}}>
            <Input placeholder="Room Type" value={room.type} onChange={e=>handleRoomChange(index,"type",e.target.value)} />
            <Input placeholder="Price ($)" type="number" value={room.price} onChange={e=>handleRoomChange(index,"price",e.target.value)} />
          </div>
        ))}
        <Button onClick={addRoom}>Add Room</Button>
      </Card>

      <Card>
        <h2>Amenities</h2>
        <CheckboxGroup>
          {amenitiesList.map((amenity,index)=>(
            <CheckboxLabel key={index}>
              <input type="checkbox" checked={property.amenities.includes(amenity)} onChange={()=>handleAmenityChange(amenity)} />
              <span style={{marginLeft:5}}>{amenity}</span>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </Card>

      <Card>
        <h2>Images</h2>
        <Input type="file" multiple accept="image/*" onChange={handleImageUpload} />
        <ImagePreview>
          {property.images.map((img,index)=>(
            <ImageWrapper key={index}>
              <PreviewImg src={img} alt="preview" />
              <RemoveIcon onClick={()=>removeImage(index)} />
            </ImageWrapper>
          ))}
        </ImagePreview>
      </Card>

      <Button onClick={handleSubmit}>Update Property</Button>

    </Container>
  );
};

export default EditProperty;