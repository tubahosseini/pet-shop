import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import test1 from "@/assets/images/home/test1.jpg";

export default function ProductInBasketCard() {
  return (
    <Card
      sx={{
        p: 1,
        display: "flex",
        cursor: "pointer",
        "&:hover": { bgcolor: "pink" },
      }}
    >
      <Image src={test1} alt="test" width={90} />
      <Box sx={{ pl: 1 }}>
        <Typography>
          Scrumbles Complete Adult & Senior Dry Cat Food Chicken & Salmon
        </Typography>
        <Box>$ 34</Box>
      </Box>
    </Card>
  );
}
