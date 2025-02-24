import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckoutTable from "./CheckoutTable";
import { useProductStore } from "@/stores/BasketStore";
import { routes } from "@/constants/routes";
import DatePicker, { DateObject } from "react-multi-date-picker";
import dayjs from "dayjs";

export default function Checkout() {
  const cart = useProductStore((state) => state.cart);

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    address: "",
  });

  const [deliveryDate, setDeliveryDate] = useState(new Date());

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData({
        firstname: parsedUser.firstname,
        lastname: parsedUser.lastname,
        phoneNumber: parsedUser.phoneNumber,
        address: parsedUser.address,
      });
    }
  }, []);

  const handleDateChange = (date: DateObject) => {
    if (date) {
      const selectedDate = date.toDate();
      setDeliveryDate(selectedDate);
      localStorage.setItem("deliveryDate", selectedDate.toISOString());
    } else {
      const currentDate = new Date();
      setDeliveryDate(currentDate);
      localStorage.setItem("deliveryDate", currentDate.toISOString());
    }
  };

  return (
    <Container
      sx={{
        mt: { xs: 13, md: 20 },
        mb: { xs: 3, md: 8 },
        display: "flex",
        gap: 6,
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography variant="h5">Order Information</Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={userData.firstname}
          disabled
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={userData.lastname}
          disabled
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={userData.phoneNumber}
          disabled
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          value={userData.address}
          disabled
        />
        {/* date picker */}
        <Typography>Choose the deliver Date: </Typography>
        <DatePicker
          value={deliveryDate}
          onChange={handleDateChange}
          minDate={new Date()}
          maxDate={dayjs().add(3, "day").toDate()}
          format="YYYY-MM-DD"
          placeholder="Select Delivery Date"
        />
        <Typography variant="h5" sx={{ mt: 5 }}>
          Total Price: €{" "}
          {cart.reduce(
            (total, product) =>
              total + product.price * product.quantityInBasket,
            0
          )}
        </Typography>
        <Link href={routes.payment}>
          <Button
            sx={{
              bgcolor: "primary.main",
              color: "primary.light",
              "&:hover": { bgcolor: "primary.main", color: "primary.light" },
              width: 150,
            }}
          >
            confirm & pay
          </Button>
        </Link>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <CheckoutTable cart={cart} />
      </Box>
    </Container>
  );
}
