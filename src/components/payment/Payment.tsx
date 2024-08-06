import { Box, Button } from "@mui/material";
import React from "react";
import creditCard from "@/assets/images/payment/creditCard.svg";
import Image from "next/image";

export default function Payment() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Image src={creditCard} alt="an image of a credit card" />
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button
          sx={{
            color: "white",
            bgcolor: "green",
            "&:hover": { color: "white", bgcolor: "green" },
          }}
        >
          ok
        </Button>
        <Button
          sx={{
            color: "white",
            bgcolor: "red",
            "&:hover": { color: "white", bgcolor: "red" },
          }}
        >
          cancel
        </Button>
      </Box>
    </Box>
  );
}
