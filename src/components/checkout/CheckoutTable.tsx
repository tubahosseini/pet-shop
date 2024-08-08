import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#a389ff17",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CheckoutTable({ cart }: { cart: any }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> </StyledTableCell>
            <StyledTableCell align="center">Product</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Sum</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product: any) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                <Image
                  src={`http://${product.images}`}
                  alt="test"
                  width={90}
                  height={90}
                />
              </StyledTableCell>
              <StyledTableCell>{product.name}</StyledTableCell>
              <StyledTableCell align="center">
                {product.quantityInBasket}
              </StyledTableCell>
              <StyledTableCell align="center">
                €{product.price}
              </StyledTableCell>
              <StyledTableCell align="center">
                €{product.price * product.quantityInBasket}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
