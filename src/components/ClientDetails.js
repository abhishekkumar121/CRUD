import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/clientdetails.css";

const ClientDetails = () => {
  const [client, setClient] = useState({
    name: "Abhishek Kumar",
    phone: "1234567890",
    address: "Boring Road",
    city: "Patna",
    state: "Bihar",
    zip: "800013",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      alert("Client details saved successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="client-details">
      <h2>Client Details</h2>
      {isEditing ? (
        <>
          <TextField
            label="Name"
            name="name"
            value={client.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={client.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={client.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            name="city"
            value={client.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="State"
            name="state"
            value={client.state}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Zip"
            name="zip"
            value={client.zip}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {client.name}
          </p>
          <p>
            <strong>Phone:</strong> {client.phone}
          </p>
          <p>
            <strong>Address:</strong> {client.address}
          </p>
          <p>
            <strong>City:</strong> {client.city}
          </p>
          <p>
            <strong>State:</strong> {client.state}
          </p>
          <p>
            <strong>Zip:</strong> {client.zip}
          </p>
        </div>
      )}
      <Button variant="contained" onClick={handleEdit} className="edit-button">
        {isEditing ? "Save" : "Edit Client"}
      </Button>
    </div>
  );
};

export default ClientDetails;
