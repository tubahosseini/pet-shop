import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { routes } from "@/constants/routes";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    description: string;
    images: string;
    price: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`${routes.shop}/${product._id}`}>
      <Card
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
        <Image
          src={`http://${product.images}`}
          alt={product.name}
          width={192}
          height={144}
        />
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
          <Typography>$ {product.price}</Typography>
          <ShoppingCart sx={{ cursor: "pointer" }} />
        </Box>
      </Card>
    </Link>
  );
};

export default ProductCard;
