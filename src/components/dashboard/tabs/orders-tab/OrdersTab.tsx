import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useState } from "react";
import { useGetAllOrders } from "../../hooks";
import { formatDateTime } from "@/utils/formatDateTime";
import Collapse from "@mui/material/Collapse";

interface Order {
  _id: string;
  user: {
    firstname: string;
    lastname: string;
  };
  totalPrice: number;
  createdAt: string;
}

export default function OrdersTab() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState<keyof Order>("_id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [openRow, setOpenRow] = useState<string | null>(null);

  const handleRequestSort = (property: keyof Order) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const { data } = useGetAllOrders();
  if (!data) {
    return <div>Loading...</div>;
  }
  const allOrders: Order[] = data.data.orders;

  const sortedOrders = allOrders.slice().sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    } else {
      return b[orderBy] > a[orderBy] ? 1 : -1;
    }
  });

  const handleRowClick = (id: string) => {
    setOpenRow(openRow === id ? null : id);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ my: "auto", mx: { xs: 6, md: 15 } }}
    >
      <Table aria-label="collapsible table">
        <TableHead sx={{ bgcolor: "primary.main" }}>
          <TableRow>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "user"}
                direction={orderBy === "user" ? order : "asc"}
                onClick={() => handleRequestSort("user")}
              >
                User
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "totalPrice"}
                direction={orderBy === "totalPrice" ? order : "asc"}
                onClick={() => handleRequestSort("totalPrice")}
              >
                Total Price
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "createdAt"}
                direction={orderBy === "createdAt" ? order : "asc"}
                onClick={() => handleRequestSort("createdAt")}
              >
                Order's Date
              </TableSortLabel>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.slice(page * 5, page * 5 + 5).map((item) => (
            <React.Fragment key={item._id}>
              <TableRow onClick={() => handleRowClick(item._id)}>
                <TableCell>{`${item.user.firstname} ${item.user.lastname}`}</TableCell>
                <TableCell>{`€ ${item.totalPrice}`}</TableCell>
                <TableCell>
                  {formatDateTime(new Date(item.createdAt))}
                </TableCell>
                <TableCell>more info!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={4}
                >
                  <Collapse
                    in={openRow === item._id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <div>{item.user.firstname}</div>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={allOrders.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
        sx={{ bgcolor: "primary.main", color: "white" }}
      />
    </TableContainer>
  );
}
