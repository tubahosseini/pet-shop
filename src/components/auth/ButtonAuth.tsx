import { Button } from "@mui/material";
import React from "react";

interface ButtonAuthProps {
  text: string;
  onClick?: () => void;
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({ text, onClick }) => {
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: "primary.dark",
        },
        "&:active": {
          backgroundColor: "primary.dark",
        },
        bgcolor: "primary.dark",
        py: 1 / 2,
        px: 4,
        my: 1 / 2,
        color: "primary.light",
        borderRadius: 3,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonAuth;
