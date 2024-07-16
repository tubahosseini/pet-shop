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
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function InventoryTab(data: any) {
  // console.log(data.data.data.products);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] =
    useState<keyof (typeof data.data.products)[0]>("name");
  const [page, setPage] = useState(0);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof (typeof data.data.data.products)[0]
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const sortedRows = stableSort(
    data.data.data.products,
    getComparator(order, orderBy)
  );

  return (
    <TableContainer
      component={Paper}
      sx={{ my: "auto", mx: { xs: 6, md: 15 } }}
    >
      <Table aria-label="simple table">
        <TableHead sx={{ bgcolor: "primary.main" }}>
          <TableRow>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "image"}
                direction={orderBy === "image" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "image")}
              >
                Image
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "subCategory"}
                direction={orderBy === "subCategory" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "subCategory")}
              >
                Price
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "brand"}
                direction={orderBy === "brand" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "brand")}
              >
                Quantity
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows?.slice(page * 5, page * 5 + 5).map((product: any) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                <Image
                  width={80}
                  height={80}
                  alt={product.name}
                  src={`http://${product.images}`}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{`€ ${product.price}`}</TableCell>
              <TableCell>{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.data.data.products.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
        sx={{ bgcolor: "primary.main", color: "white" }}
      />
    </TableContainer>
  );
}
