import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function AddSubCategoryForm() {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Sub Category Name"
        variant="standard"
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <FormControl variant="standard" fullWidth required>
        <InputLabel>Categoty</InputLabel>
        <Select label="Related Category" fullWidth>
          <MenuItem>Cats</MenuItem>
          <MenuItem>Dogs</MenuItem>
        </Select>
      </FormControl>
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
