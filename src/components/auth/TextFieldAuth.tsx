import { TextField } from "@mui/material";
import React from "react";

interface TextFieldAuthProps {
  label: string;
  type: string;
}

const TextFieldAuth: React.FC<TextFieldAuthProps> = ({ label, type }) => {
  return <TextField label={label} type={type} />;
};

export default TextFieldAuth;
