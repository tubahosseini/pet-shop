import ProductInBasketCard from "@/components/cart/ProductInBasketCard";
import { routes } from "@/constants/routes";
import { useProductStore } from "@/stores/BasketStore";
import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function CartDrawer() {
  const cart = useProductStore((state) => state.cart);
  // console.log(cart);

  return (
    <Box
      sx={{
        width: 350,
        mx: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: 20, my: 1 }}>Basket</Typography>
        <Divider sx={{ mb: 2 }} />
        {cart?.map((product) => (
          <ProductInBasketCard key={product._id} product={product} />
        ))}
      </Box>
      <Box sx={{ mb: 2 }}>
        <Divider />
        <Typography sx={{ fontSize: 20, my: 1 }}>
          Total price: €{" "}
          {cart.reduce(
            (total, product) =>
              total + product.price * product.quantityInBasket,
            0
          )}
        </Typography>
        <Link href={routes.checkout}>
          <Button
            sx={{
              width: "100%",
              bgcolor: "primary.main",
              color: "primary.light",
              "&:hover": { bgcolor: "primary.main", color: "primary.light" },
              mt: 1,
            }}
          >
            checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
