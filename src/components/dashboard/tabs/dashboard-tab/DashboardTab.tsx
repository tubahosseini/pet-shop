import { Box, Grid } from "@mui/material";
import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";

export default function DashboardTab() {
  return (
    <Box
      sx={{
        width: "100%",
        // bgcolor: "pink",
        height: { xs: "100vh", md: "90vh" },
        my: "auto",
        mx: 6,
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          number of sales/ total earning
        </Grid>
        <Grid item xs={12} md={5}>
          <WeeklySalesChart />
        </Grid>
        <Grid item xs={12} md={5}>
          recent orders
        </Grid>
        <Grid item xs={12} md={7}>
          new Costumers
        </Grid>
      </Grid>
    </Box>
  );
}
