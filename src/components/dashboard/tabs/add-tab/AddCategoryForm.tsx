import { Button, TextField } from "@mui/material";
import React from "react";

export default function AddCategoryForm() {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Category Name"
        variant="standard"
        fullWidth
        required
      />
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
