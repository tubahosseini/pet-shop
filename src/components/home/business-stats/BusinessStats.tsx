import { Box } from "@mui/material";
import React from "react";

export default function BusinessStats() {
  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 3,
        mt:15
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          width: "90%",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
          fontSize: 26,
          color: "primary.light",
          borderRadius: 5,
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
        }}
      >
        +5 Years Of <br /> Experience
      </Box>
      <Box
        sx={{
          bgcolor: "primary.dark",
          width: "90%",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
          fontSize: 26,
          color: "primary.light",
          borderRadius: 5,
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
        }}
      >
        134 K <br /> Happy Customers
      </Box>
      <Box
        sx={{
          bgcolor: "primary.main",
          width: "90%",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
          fontSize: 26,
          color: "primary.light",
          borderRadius: 5,
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
        }}
      >
        +500 <br /> Products
      </Box>
    </Box>
  );
}
