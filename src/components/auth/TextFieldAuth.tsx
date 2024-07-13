import { TextField } from "@mui/material";
import React from "react";

interface TextFieldAuthProps {
  label: string;
  type: string;
}

const TextFieldAuth: React.FC<TextFieldAuthProps> = ({ label, type }) => {
  return (
    <TextField
      sx={{
        "& fieldset": {
          borderColor: "primary.main",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
      label={label}
      type={type}
    />
  );
};

export default TextFieldAuth;
