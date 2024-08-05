import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetAllOrders } from "@/components/dashboard/hooks";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklySalesChart: React.FC = () => {
  const { data, error, isLoading } = useGetAllOrders();
  const [weeklyOrders, setWeeklyOrders] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0,
  ]);
  const [dailyEarnings, setDailyEarnings] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0,
  ]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    if (data?.data?.orders) {
      const ordersCount: { [key: string]: number } = {};
      const earningsCount: { [key: string]: number } = {};

      const dates = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split("T")[0];
        dates.push(dateString);
        ordersCount[dateString] = 0;
        earningsCount[dateString] = 0;
      }

      data.data.orders.forEach((order: any) => {
        const orderDate = new Date(order.createdAt);
        const dateString = orderDate.toISOString().split("T")[0];
        if (ordersCount[dateString] !== undefined) {
          ordersCount[dateString]++;
          earningsCount[dateString] += order.totalPrice; // Use totalPrice instead of totalAmount
        }
      });

      const counts = dates.map((date) => ordersCount[date]);
      const earnings = dates.map((date) => earningsCount[date]);

      setWeeklyOrders(counts);
      setDailyEarnings(earnings);
      setLabels(dates);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Orders",
        data: weeklyOrders,
        backgroundColor: "#36a2eb47",
        borderColor: "#36a2eb",
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        label: "Earnings",
        data: dailyEarnings,
        backgroundColor: "#ff638447",
        borderColor: "#ff6384",
        borderWidth: 1,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Number of Orders and Earnings in the Last 7 Days",
      },
      datalabels: {
        display: true,
        align: "end" as const,
        anchor: "end" as const,
        formatter: (value: number, context: any) => {
          if (context.dataset.label === "Earnings") {
            return `$${value.toFixed(2)}`;
          } else {
            return value;
          }
        },
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        position: "left" as const,
        title: {
          display: true,
          text: "Number of Orders",
        },
      },
      y1: {
        type: "linear" as const,
        position: "right" as const,
        title: {
          display: true,
          text: "Earnings ($)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <Box sx={{ bgcolor: "#F4F1FF", borderRadius: 5, p: 2, mb:2 }}>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default WeeklySalesChart;
