import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Box, Typography } from "@mui/material";
import { useGetAllProducts } from "@/hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart: React.FC = () => {
  const { data } = useGetAllProducts();
  const [chartData, setChartData] = useState<ChartData<"pie">>({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    if (data && data.data && data.data.products) {
      const categoryCounts = data.data.products.reduce(
        (acc: any, product: any) => {
          const categoryName = product.category.name;
          if (!acc[categoryName]) {
            acc[categoryName] = 0;
          }
          acc[categoryName]++;
          return acc;
        },
        {}
      );

      const labels = Object.keys(categoryCounts);
      const counts = Object.values(categoryCounts) as number[];

      setChartData({
        labels,
        datasets: [
          {
            data: counts,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
          },
        ],
      });
    }
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Number of Products in each Category",
      },
    },
  };

  return (
    <Box
      sx={{
        width: 400,
        height: 380,
        bgcolor: "#F4F1FF",
        px: 4,
        py: 3,
        borderRadius: 5,
      }}
    >
      <Pie data={chartData} options={options} />
    </Box>
  );
};

export default CategoryPieChart;
