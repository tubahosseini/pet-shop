import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/constants/routes";

export default function CategoryCard({
  title,
  image,
  bgcolor,
}: {
  title: string;
  image: any;
  bgcolor: string;
}) {
  return (
    <Link
      href={`http://localhost:3000/shop?category=${title.toLowerCase()}&subcategory=`}
    >
      <Box
        sx={{
          bgcolor: bgcolor,
          color: "primary.light",
          p: 4,
          position: "relative",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          cursor: "pointer",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
          "&:hover": { boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.7)" },
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: 60,
            fontWeight: "bold",
            letterSpacing: "0.3rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            "&:hover": { left: "75%" },
            transition: "left 0.5s ease",
          }}
        >
          <Image
            src={image}
            alt={`picture of a ${title}`}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Link>
  );
}
