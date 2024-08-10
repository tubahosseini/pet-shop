import { Box, Button, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import creditCard from "@/assets/images/payment/creditCard.svg";
import Image from "next/image";
import { useAddNewOrder } from "./hooks";
import { useProductStore } from "@/stores/BasketStore";
import { routes } from "@/constants/routes";
import { useEditProductById } from "../dashboard/hooks";

export default function Payment() {
  const { mutate } = useAddNewOrder();
  const cart = useProductStore((state) => state.cart);
  const clearCart = useProductStore((state) => state.clearCart);
  const [user, setUser] = useState<any>(null);
  const [deliveryDate, setDeliveryDate] = useState<string | null>(null);
  const { mutate: editQuantityAfterOrder } = useEditProductById();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      setUser(JSON.parse(userString));
    }

    const storedDate = localStorage.getItem("deliveryDate");
    if (storedDate) {
      setDeliveryDate(storedDate);
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
      deliveryDate: deliveryDate,
    };

    mutate(order, {
      onSuccess: () => {
        const updatedProducts = cart.map((cartItem) => {
          return {
            _id: cartItem._id,
            quantity: cartItem.quantity - cartItem.quantityInBasket,
          };
        });

        editQuantityAfterOrder(updatedProducts, {
          onSuccess: () => {
            clearCart();
            localStorage.removeItem("deliveryDate");
          },
          onError: (error) => {
            console.error("Failed to update products", error);
          },
        });
      },
      onError: (error) => {
        console.error("Order failed", error);
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
