import { Box, Typography } from "@mui/material";
import React from "react";
import { Pets, Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column", // mobile devices
          sm: "row", // tablets and up
        },
        gap: {
          xs: 4,
        },
        justifyContent: "space-around",
        width: "100%",
        bgcolor: "primary.dark",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pets />
        <Typography>PAWFECT</Typography>
        <Typography sx={{ fontSize: 11 }}>
          {" "}
          All rights reserved @Pawfect2024
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography>Shop</Typography>
        <Typography>Our Story</Typography>
        <Typography>Contact Us</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography marginBottom={1}>How to reach us?</Typography>
        <Typography> 111 Dantzler St. Saint Matthews</Typography>
        <Typography> South Carolina(SC) 29135</Typography>
        <Typography>(803) 456-4032</Typography>
      </Box>
      <Box
        sx={{
          flexDirection: {
            xs: "row", // mobile devices
            sm: "column", // tablets and up
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Facebook />
        <Instagram />
        <Twitter />
      </Box>
    </Box>
  );
}
