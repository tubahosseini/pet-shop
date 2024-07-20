import { Box, Typography } from "@mui/material";
import React from "react";
import { Pets, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { footerStyles } from "./footer.styles";

export default function Footer() {
  return (
    <Box sx={footerStyles.containerBox}>
      <Box sx={footerStyles.logoBox}>
        <Pets />
        <Typography>PAWFECT</Typography>
        <Typography sx={{ fontSize: 11 }}>
          All rights reserved @Pawfect2024
        </Typography>
      </Box>
      <Box sx={footerStyles.linksBox}>
        <Typography>Shop</Typography>
        <Typography>Our Story</Typography>
        <Typography>Contact Us</Typography>
      </Box>
      <Box sx={footerStyles.addressBox}>
        <Typography marginBottom={1}>How to reach us?</Typography>
        <Typography> 111 Dantzler St. Saint Matthews</Typography>
        <Typography> South Carolina(SC) 29135</Typography>
        <Typography>(803) 456-4032</Typography>
      </Box>
      <Box sx={footerStyles.socialIconsBox}>
        <Facebook />
        <Instagram />
        <Twitter />
      </Box>
    </Box>
  );
}
