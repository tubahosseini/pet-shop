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
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    if (data?.data?.orders) {
      const ordersCount: { [key: string]: number } = {};

      // Create an array of the last 7 dates (including today)
      const dates = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
        dates.push(dateString);
        ordersCount[dateString] = 0; // Initialize with 0
      }

      // Count orders for each date
      data.data.orders.forEach((order: any) => {
        const orderDate = new Date(order.createdAt);
        const dateString = orderDate.toISOString().split("T")[0];
        if (ordersCount[dateString] !== undefined) {
          ordersCount[dateString]++;
        }
      });

      // Extract counts in the correct order
      const counts = dates.map((date) => ordersCount[date]);

      setWeeklyOrders(counts);
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
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
        text: "Number of Orders in the Last 7 Days",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default WeeklySalesChart;
