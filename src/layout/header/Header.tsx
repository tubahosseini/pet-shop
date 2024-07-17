import { Box, Link, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Favorite, ShoppingCart, Menu } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 15,
        py: 1,
        px: { xs: 3, md: 8 },
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <PetsIcon
          sx={{ color: "primary.main", fontSize: { xs: 30, md: 40 } }}
        />
        <Typography sx={{ color: "primary.main", fontSize: 15 }}>
          PAWFECT
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: { xs: 4, md: 6 },
          fontSize: { md: 17 },
        }}
      >
        <Link href="#" sx={{ textDecoration: "none" }}>
          Shop
        </Link>
        <Link href="#" sx={{ textDecoration: "none" }}>
          Our Story
        </Link>
        <Link href="#" sx={{ textDecoration: "none" }}>
          Contact Us
        </Link>
        <Link href="#" sx={{ textDecoration: "none" }}>
          Log In
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        {/* <Search
          sx={{
            color: "primary.main",
            fontSize: 30,
            // display: { xs: "none", md: "block" },
          }}
        /> */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "primary.main", fontSize: 30 }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Favorite
          sx={{
            color: "primary.main",
            fontSize: 30,
            display: { xs: "none", md: "block" },
          }}
        />
        <ShoppingCart
          sx={{
            color: "primary.main",
            fontSize: 30,
            display: { xs: "none", md: "block" },
          }}
        />
        <Menu
          sx={{
            color: "primary.main",
            fontSize: 30,
            display: { xs: "block", md: "none" },
          }}
        />
      </Box>
    </Box>
  );
}
