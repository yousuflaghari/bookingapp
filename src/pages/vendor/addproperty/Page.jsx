import React, { useState } from "react";
import styled from "styled-components";

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

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

// ================= Component =================

const AddProperty = () => {

  const [property, setProperty] = useState({
    name: "",
    type: "",
    description: "",
    city: "",
    address: "",
    price: "",
    rooms: "",
    bathrooms: "",
    amenities: [],
    images: []
  });

  const amenitiesList = ["WiFi", "Parking", "Pool", "AC", "Gym", "Pet Friendly"];

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
    setProperty({ ...property, images: files.map(file => URL.createObjectURL(file)) });
  };

  const handleSubmit = () => {
    console.log("Property Submitted:", property);
    alert("Property submitted successfully!");
    // Here you can send property to backend API (Nest.js)
  };

  return (
    <Container>
      <Title>Add New Property</Title>

      <Card>
        <h2>Basic Information</h2>
        <Field>
          <Label>Property Name</Label>
          <Input
            value={property.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Field>

        <Field>
          <Label>Property Type</Label>
          <Select
            value={property.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Hotel">Hotel</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Guest House">Guest House</option>
          </Select>
        </Field>

        <Field>
          <Label>Description</Label>
          <TextArea
            value={property.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Field>
      </Card>

      <Card>
        <h2>Location & Pricing</h2>
        <Field>
          <Label>City</Label>
          <Input
            value={property.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </Field>

        <Field>
          <Label>Address</Label>
          <TextArea
            value={property.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </Field>

        <Field>
          <Label>Price per Night ($)</Label>
          <Input
            type="number"
            value={property.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />
        </Field>

        <Row>
          <Field style={{ flex: 1 }}>
            <Label>Rooms</Label>
            <Input
              type="number"
              value={property.rooms}
              onChange={(e) => handleChange("rooms", e.target.value)}
            />
          </Field>

          <Field style={{ flex: 1 }}>
            <Label>Bathrooms</Label>
            <Input
              type="number"
              value={property.bathrooms}
              onChange={(e) => handleChange("bathrooms", e.target.value)}
            />
          </Field>
        </Row>
      </Card>

      <Card>
        <h2>Amenities</h2>
        <CheckboxGroup>
          {amenitiesList.map((amenity, index) => (
            <CheckboxLabel key={index}>
              <input
                type="checkbox"
                checked={property.amenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
              />
              <span style={{ marginLeft: 5 }}>{amenity}</span>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </Card>

      <Card>
        <h2>Images</h2>
        <Field>
          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
        </Field>
        <div style={{ display: "flex", marginTop: 10 }}>
          {property.images.map((img, index) => (
            <ImagePreview key={index} src={img} alt="Preview" />
          ))}
        </div>
      </Card>

      <Button onClick={handleSubmit}>Submit Property</Button>
    </Container>
  );
};

export default AddProperty;