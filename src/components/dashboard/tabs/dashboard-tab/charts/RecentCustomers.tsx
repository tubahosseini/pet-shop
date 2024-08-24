import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllOrders } from "@/components/dashboard/hooks";

interface Order {
  _id: string;
  user: {
    firstname: string;
    lastname: string;
    address: string;
    phoneNumber: string;
  };
  products: [
    { product: { name: string; price: string }; count: string; _id: string }
  ];
  totalPrice: number;
  createdAt: string;
  deliveryDate: string;
}

export default function RecentCustomers() {
  const { data } = useGetAllOrders();
  if (!data) {
    return <div>Loading...</div>;
  }
  const allOrders: Order[] = data.data.orders;

  const recentCustomers = allOrders
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  return (
    <TableContainer component={Paper} sx={{ my: "auto" }}>
      <Table aria-label="simple table">
        <TableHead sx={{ bgcolor: "#F4F1FF" }}>
          <TableRow>
            <TableCell sx={{ color: "black" }}>Name</TableCell>
            <TableCell sx={{ color: "black" }}>Phone Number</TableCell>
            <TableCell sx={{ color: "black" }}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentCustomers.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{`${item.user.firstname} ${item.user.lastname}`}</TableCell>
              <TableCell>{item.user.phoneNumber}</TableCell>
              <TableCell>{item.user.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
