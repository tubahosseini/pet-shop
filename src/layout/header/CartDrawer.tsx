import ProductInBasketCard from "@/components/cart/ProductInBasketCard";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

export default function CartDrawer() {
  return (
    <Box
      sx={{
        width: 300,
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
        <ProductInBasketCard />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Divider />
        <Typography sx={{ fontSize: 20, my: 1 }}>Total price: $ 100</Typography>
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
      </Box>
    </Box>
  );
}
