import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import CheckoutTable from "./CheckoutTable";

export default function Checkout() {
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
          label="tuba"
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-basic"
          label="hosseini"
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-basic"
          label="phone number"
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-basic"
          label="address"
          variant="outlined"
          disabled
        />
        <Typography>total price: $ 1,320</Typography>
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
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <CheckoutTable />
      </Box>
    </Container>
  );
}
