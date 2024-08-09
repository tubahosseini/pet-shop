import React from "react";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import SuccessfulPayment from "./status/SuccessfulPayment";
import FailedPayment from "./status/FailedPayment";

export default function Result() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <Box>
      {status === "success" && <SuccessfulPayment />}
      {status === "fail" && <FailedPayment />}
      {status !== "success" && status !== "fail" && (
        <Typography>something is wrong! unknown status!</Typography>
      )}
    </Box>
  );
}
