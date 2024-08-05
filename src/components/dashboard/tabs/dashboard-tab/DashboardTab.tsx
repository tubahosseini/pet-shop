import { Box, Grid } from "@mui/material";
import React from "react";
import WeeklySalesChart from "./charts/WeeklySalesChart";
import CategoryPieChart from "./charts/CategoryPieChart";
import SaleStatus from "./charts/SaleStatus";
import RecentCustomers from "./charts/RecentCustomers";

export default function DashboardTab() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100vh", md: "90vh" },
        my: "auto",
        mx: 6,
      }}
    >
      <Grid container>
        <Grid item xs={12} md={5}>
          <SaleStatus />
        </Grid>
        <Grid item xs={12} md={7}>
          <RecentCustomers />
        </Grid>
        <Grid item xs={12} md={5}>
          <CategoryPieChart />
        </Grid>
        <Grid item xs={12} md={7}>
          <WeeklySalesChart />
        </Grid>
      </Grid>
    </Box>
  );
}
