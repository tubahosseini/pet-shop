import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function AddProductForm() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Quantity"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Brand"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          fullWidth
          required
        />
        <FormControl variant="standard" fullWidth required>
          <InputLabel>Categoty</InputLabel>
          <Select label="Category" fullWidth>
            <MenuItem>Cats</MenuItem>
            <MenuItem>Dogs</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" fullWidth required sx={{ mb: 2 }}>
          <InputLabel>Sub Categoty</InputLabel>
          <Select label="Sub Category" fullWidth>
            <MenuItem>Cats Foods</MenuItem>
            <MenuItem>Cats Toys</MenuItem>
            <MenuItem>Dogs Foods</MenuItem>
            <MenuItem>Dogs Clothes</MenuItem>
            <MenuItem>Dogs Beds</MenuItem>
          </Select>
        </FormControl>
        <input type="file" />
      </Box>
      <Button
        sx={{
          bgcolor: "primary.main",
          py: 0.7,
          px: 4,
          borderRadius: 3,
          color: "primary.light",
          mt: 5,
          "&:hover": { bgcolor: "primary.main" },
        }}
      >
        Add
      </Button>
    </>
  );
}
