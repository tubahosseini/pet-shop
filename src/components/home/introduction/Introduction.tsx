import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import dogLookUp from "@/assets/images/home/dogLookUp.svg";

export default function Introduction() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-around" },
        mb: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          pt: 3,
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          ml: { md: 10 },
        }}
      >
        <Image
          src={dogLookUp}
          alt="picture of a dog"
          width={200}
          height={200}
        />
      </Box>
      <Typography
        sx={{
          fontSize: 30,
          color: "primary.main",
          py: 10,
          mx: 5,
          maxWidth: 600,
          fontWeight: "bold",
        }}
      >
        Established in 2019, we are a passionate and dedicated team of animal
        lovers committed to bringing joy into the lives of our customers and
        their furry, scaly, and feathered friends.
      </Typography>
    </Box>
  );
}
