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
import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
                Order Date
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
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={(event) => {
                      handleRowClick(item._id);
                    }}
                  >
                    {openRow === item._id ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={4}
                  sx={{ bgcolor: "#a389ff17", p: 3 }}
                >
                  <Collapse
                    in={openRow === item._id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box sx={{ py: 3 }}>
                      <Typography sx={{ color: "primary.main", mb: 2 }}>
                        Order Details:
                      </Typography>
                      <Typography sx={{ display: "flex", gap: 1 }}>
                        <Typography sx={{ color: "primary.main" }}>
                          Address:
                        </Typography>{" "}
                        {item.user.address}
                      </Typography>
                      <Typography sx={{ display: "flex", gap: 1 }}>
                        <Typography sx={{ color: "primary.main" }}>
                          Phone Number:{" "}
                        </Typography>{" "}
                        {item.user.phoneNumber}
                      </Typography>
                      <Typography sx={{ display: "flex", gap: 1 }}>
                        <Typography sx={{ color: "primary.main" }}>
                          Order Date:{" "}
                        </Typography>{" "}
                        {formatDateTime(new Date(item.createdAt))}
                      </Typography>
                      <Typography sx={{ display: "flex", gap: 1 }}>
                        <Typography sx={{ color: "primary.main" }}>
                          Delivery Date:
                        </Typography>
                        {formatDateTime(new Date(item.deliveryDate))}
                      </Typography>
                      <Table
                        size="small"
                        aria-label="purchases"
                        sx={{ my: 2, maxWidth: 700 }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ color: "primary.main" }}>
                              Products
                            </TableCell>
                            <TableCell sx={{ color: "primary.main" }}>
                              Price
                            </TableCell>
                            <TableCell sx={{ color: "primary.main" }}>
                              Quantity
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {item.products.map((itemProduct) => (
                            <TableRow key={itemProduct._id}>
                              <TableCell>{itemProduct.product.name}</TableCell>
                              <TableCell>{itemProduct.product.price}</TableCell>
                              <TableCell>{itemProduct.count}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <Button
                        sx={{
                          bgcolor: "primary.main",
                          color: "primary.light",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "primary.light",
                          },
                        }}
                      >
                        Delivered
                      </Button>
                    </Box>
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
