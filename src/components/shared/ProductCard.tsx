import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box
      sx={{
        maxWidth: "12em",
        height: "16em",
        bgcolor: "primary.light",
        "&:hover": { bgcolor: "primary.main", color: "primary.light" },
        p: 2,
        boxShadow: "0 1px 5px #e1e1e1",
        color: "primary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Image
          src={product.image}
          alt={product.name}
          width={192}
          height={144}
        />
      </Box>
      <Typography
        sx={{
          my: 1,
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {product.name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>$ 229</Typography>
        <ShoppingCart sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default ProductCard;
