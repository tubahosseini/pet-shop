// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TablePagination from "@mui/material/TablePagination";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import { Delete, Edit } from "@mui/icons-material";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
//   createData("Gingerbread2", 356, 16.0, 49, 3.9),
//   createData("Cookie", 200, 10.0, 30, 5.0),
// ];

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// type Order = "asc" | "desc";

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key
// ): (
//   a: { [key in Key]: number | string },
//   b: { [key in Key]: number | string }
// ) => number {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
//   const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// export default function ProductsTab() {
//   const [order, setOrder] = React.useState<Order>("asc");
//   const [orderBy, setOrderBy] =
//     React.useState<keyof (typeof rows)[0]>("calories");
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof (typeof rows)[0]
//   ) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const sortedRows = stableSort(rows, getComparator(order, orderBy));
//   const paginatedRows = sortedRows.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const emptyRows = rowsPerPage - paginatedRows.length;
//   const rowHeight = 53; // Estimated row height

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{ my: "auto", mx: { xs: 6, md: 15 } }}
//     >
//       <Table aria-label="simple table">
//         <TableHead sx={{ bgcolor: "primary.main" }}>
//           <TableRow>
//             <TableCell sx={{ color: "primary.light" }}>
//               <TableSortLabel
//                 active={orderBy === "name"}
//                 direction={orderBy === "name" ? order : "asc"}
//                 onClick={(event) => handleRequestSort(event, "name")}
//               >
//                 image
//               </TableSortLabel>
//             </TableCell>
//             <TableCell sx={{ color: "primary.light" }}>
//               <TableSortLabel
//                 active={orderBy === "name"}
//                 direction={orderBy === "name" ? order : "asc"}
//                 onClick={(event) => handleRequestSort(event, "name")}
//               >
//                 name
//               </TableSortLabel>
//             </TableCell>
//             <TableCell sx={{ color: "primary.light" }}>
//               <TableSortLabel
//                 active={orderBy === "calories"}
//                 direction={orderBy === "calories" ? order : "asc"}
//                 onClick={(event) => handleRequestSort(event, "calories")}
//               >
//                 Category
//               </TableSortLabel>
//             </TableCell>
//             <TableCell sx={{ color: "primary.light" }}>
//               <TableSortLabel
//                 active={orderBy === "fat"}
//                 direction={orderBy === "fat" ? order : "asc"}
//                 onClick={(event) => handleRequestSort(event, "fat")}
//               >
//                 Sub Category
//               </TableSortLabel>
//             </TableCell>
//             <TableCell sx={{ color: "primary.light" }}>
//               <TableSortLabel
//                 active={orderBy === "carbs"}
//                 direction={orderBy === "carbs" ? order : "asc"}
//                 onClick={(event) => handleRequestSort(event, "carbs")}
//               >
//                 Brand
//               </TableSortLabel>
//             </TableCell>
//             <TableCell>
//               <TableSortLabel
//                 active={orderBy === "protein"}
//                 direction={orderBy === "protein" ? order : "asc"}
//                 onClick={(event) => handleRequestSort(event, "protein")}
//               ></TableSortLabel>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {paginatedRows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell>{row.calories}</TableCell>
//               <TableCell>{row.fat}</TableCell>
//               <TableCell>{row.carbs}</TableCell>
//               <TableCell>{row.carbs}</TableCell>
//               <TableCell>
//                 <Edit
//                   sx={{
//                     color: "primary.main",
//                     "&:hover": { color: "primary.dark" },
//                   }}
//                 />
//                 <Delete
//                   sx={{
//                     color: "primary.main",
//                     "&:hover": { color: "primary.dark" },
//                   }}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//           {emptyRows > 0 && (
//             <TableRow style={{ height: rowHeight * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//       <TablePagination
//         rowsPerPageOptions={[5]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </TableContainer>
//   );
// }

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

function createData(
  image: string,
  name: string,
  category: string,
  subCategory: string,
  brand: string
) {
  return { image, name, category, subCategory, brand };
}

const rows = [
  createData("dog_food.jpg", "Dog Food", "Food", "Dry Food", "Brand A"),
  createData("cat_food.jpg", "Cat Food", "Food", "Wet Food", "Brand B"),
  createData(
    "dog_clothes.jpg",
    "Dog Clothes",
    "Clothing",
    "Jackets",
    "Brand C"
  ),
  createData(
    "cat_clothes.jpg",
    "Cat Clothes",
    "Clothing",
    "Sweaters",
    "Brand D"
  ),
  createData("dog_toys.jpg", "Dog Toys", "Toys", "Chew Toys", "Brand E"),
  createData("cat_toys.jpg", "Cat Toys", "Toys", "Interactive Toys", "Brand F"),
  createData("pet_bed.jpg", "Pet Bed", "Bedding", "Cushions", "Brand G"),
];

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

export default function ProductsTab() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof (typeof rows)[0]>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof (typeof rows)[0]
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = stableSort(rows, getComparator(order, orderBy));
  const paginatedRows = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const emptyRows = rowsPerPage - paginatedRows.length;
  const rowHeight = 55;

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
                active={orderBy === "category"}
                direction={orderBy === "category" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "category")}
              >
                Category
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "subCategory"}
                direction={orderBy === "subCategory" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "subCategory")}
              >
                Sub Category
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ color: "primary.light" }}>
              <TableSortLabel
                active={orderBy === "brand"}
                direction={orderBy === "brand" ? order : "asc"}
                onClick={(event) => handleRequestSort(event, "brand")}
              >
                Brand
              </TableSortLabel>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.image} alt={row.name} width="50" />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.subCategory}</TableCell>
              <TableCell>{row.brand}</TableCell>
              <TableCell>
                <Edit
                  sx={{
                    color: "primary.main",
                    "&:hover": { color: "primary.dark" },
                  }}
                />
                <Delete
                  sx={{
                    color: "primary.main",
                    "&:hover": { color: "primary.dark" },
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: rowHeight * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
