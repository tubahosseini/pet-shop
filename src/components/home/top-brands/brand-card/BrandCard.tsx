import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function BrandCard({ src, alt }: { src: any; alt: string }) {
  return (
    <Box sx={{ cursor: "pointer", flex: "0 0 auto" }}>
      <Image src={src} alt={alt} width={190} height={190} />
    </Box>
  );
}
