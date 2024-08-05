import { useGetAllOrders } from "@/components/dashboard/hooks";
import { EuroSymbol, ShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Order {
  _id: string;
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    phoneNumber: string;
    address: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  products: Array<{
    product: {
      rating: {
        rate: number;
        count: number;
      };
      _id: string;
      category: string;
      subcategory: string;
      name: string;
      price: number;
      quantity: number;
      brand: string;
      description: string;
      thumbnail: string;
      images: string[];
      createdAt: string;
      updatedAt: string;
      slugname: string;
      __v: number;
    };
    count: number;
    _id: string;
  }>;
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
  updatedAt: string;
}

const SaleStatus: React.FC = () => {
  const { data, error, isLoading } = useGetAllOrders();
  const [weeklySales, setWeeklySales] = useState<number>(0);
  const [weeklyEarnings, setWeeklyEarnings] = useState<number>(0);

  useEffect(() => {
    if (data?.data?.orders) {
      let salesCount = 0;
      let totalEarnings = 0;

      // Create an array of the last 7 dates (including today)
      const dates: string[] = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
        dates.push(dateString);
      }

      // Count sales and total earnings for each date
      data.data.orders.forEach((order: Order) => {
        const orderDate = new Date(order.createdAt);
        const dateString = orderDate.toISOString().split("T")[0];
        if (dates.includes(dateString)) {
          salesCount++;
          totalEarnings += order.totalPrice;
        }
      });

      setWeeklySales(salesCount);
      setWeeklyEarnings(totalEarnings);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        pr: 8,
        pb: 4,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          bgcolor: "#F4F1FF",
          width: "90%",
          color: "black",
          py: 3,
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 35 }}>{weeklySales}</Typography>
          <Typography sx={{ fontSize: 18 }}>Weekly Sales</Typography>
        </Box>
        <ShoppingCart sx={{ fontSize: 35, color: "primary.main" }} />
      </Box>
      <Box
        sx={{
          bgcolor: "#F4F1FF",
          width: "90%",
          color: "black",
          py: 3,
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 35 }}>
            {weeklyEarnings.toLocaleString()}
          </Typography>
          <Typography sx={{ fontSize: 18 }}>Weekly Earning</Typography>
        </Box>
        <EuroSymbol sx={{ fontSize: 35, color: "primary.main" }} />
      </Box>
    </Box>
  );
};

export default SaleStatus;
