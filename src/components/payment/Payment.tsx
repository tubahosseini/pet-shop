import { Box, Button, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import creditCard from "@/assets/images/payment/creditCard.svg";
import Image from "next/image";
import { useAddNewOrder } from "./hooks";
import { useProductStore } from "@/stores/BasketStore";
import { routes } from "@/constants/routes";

export default function Payment() {
  const { mutate } = useAddNewOrder();
  const cart = useProductStore((state) => state.cart);
  const clearCart = useProductStore((state) => state.clearCart);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  const handleOkClick = () => {
    if (!user) {
      console.error("user not found");
      return;
    }

    const order = {
      user: user._id,
      products: cart.map((item) => ({
        product: item._id,
        count: item.quantityInBasket,
      })),
      deliveryStatus: false,
    };

    mutate(order, {
      onSuccess: () => {
        clearCart();
      },
      onError: (error) => {
        console.error("order failed", error);
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Image src={creditCard} alt="an image of a credit card" />
      <Box sx={{ display: "flex", gap: 3 }}>
        <Link href={routes.successfulPayment}>
          <Button
            sx={{
              color: "white",
              bgcolor: "green",
              "&:hover": { color: "white", bgcolor: "green" },
            }}
            onClick={handleOkClick}
          >
            ok
          </Button>
        </Link>

        <Link href={routes.failedPayment}>
          <Button
            sx={{
              color: "white",
              bgcolor: "red",
              "&:hover": { color: "white", bgcolor: "red" },
            }}
          >
            cancel
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
