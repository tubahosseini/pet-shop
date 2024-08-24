import { routes } from "@/constants/routes";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function FailedPayment() {
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
      <Typography variant="h3">Am I A Joke To You?😡</Typography>
      <Link href={routes.home}>
        <Button>Back to Home Page</Button>
      </Link>
    </Box>
  );
}
