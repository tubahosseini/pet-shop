import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import QuantityControl from "../shared/QuantityControl";

export default function ProductInBasketCard({ product }: { product: any }) {
  return (
    <Card
      sx={{
        p: 1,
        display: "flex",
        cursor: "pointer",
        "&:hover": { bgcolor: "lightgray" },
        mb: 1,
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Image
          src={`http://${product.images}`}
          alt="test"
          width={90}
          height={90}
        />
        <Box sx={{ pl: 1 }}>
          <Typography>{product.name}</Typography>
          <Box>
            € {product.price} x {product.quantityInBasket} = €{" "}
            {product.price * product.quantityInBasket}
          </Box>
        </Box>
      </Box>
      <QuantityControl product={product} />
    </Card>
  );
}
