import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import whiteBullDog from "@/assets/images/home/whiteBullDog.svg";

export default function Subscribe() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.light",
        display: "flex",
        justifyContent: "center",
        width: 600,
        borderRadius: 10,
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image
        src={whiteBullDog}
        alt="a picture of white bulldog"
        width={200}
        height={200}
      />
      <Typography sx={{ marginY: "auto", fontSize: 30, marginX: 3 }}>
        Get Offers Straight To Your Inbox!
      </Typography>{" "}
    </Box>
  );
}
