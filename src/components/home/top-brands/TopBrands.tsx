import React from "react";
import BrandCard from "./brand-card/BrandCard";
import ardenGrane from "@/assets/images/home/brand-card/arden-grane.png";
import burns from "@/assets/images/home/brand-card/burns.png";
import scrumbles from "@/assets/images/home/brand-card/scrumbles.jpg";
import dollyParton from "@/assets/images/home/brand-card/dolly-parton.jpg";
import lilysKitchen from "@/assets/images/home/brand-card/lilys-kitchen.png";
import petsAtHome from "@/assets/images/home/brand-card/pets-at-home.png";
import { Box } from "@mui/material";

const brands = [
  { src: ardenGrane, alt: "Arden Grane logo" },
  { src: petsAtHome, alt: "Pets at Home logo" },
  { src: burns, alt: "Burns logo" },
  { src: scrumbles, alt: "Scrumbles logo" },
  { src: lilysKitchen, alt: "Lily's Kitchen logo" },
  { src: dollyParton, alt: "Dolly Parton logo" },
];

export default function TopBrands() {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
        p: 2,
        display: "flex",
        gap: 2,
        overflowX: "auto",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: "4px",
        },
      }}
    >
      {brands.map((brand, index) => (
        <BrandCard key={index} src={brand.src} alt={brand.alt} />
      ))}
    </Box>
  );
}
