import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "white",
    borderRadius: 40,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
    border: "none",
  },
  width: "90%",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "primary.main",
  color: "white",
  "&:hover": {
    backgroundColor: "primary.main",
  },
  borderRadius: 40,
}));

export default function TextFieldWithButton() {
  return (
    <CustomTextField
      placeholder="Enter Your E-mail ..."
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CustomButton variant="contained">Subscribe</CustomButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
