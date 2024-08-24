import { routes } from "@/constants/routes";
import { Logout, Menu, ShoppingCart } from "@mui/icons-material";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  IconButton,
  Link,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";
import DrawerList from "./DrawerList";
import { useProductStore } from "@/stores/BasketStore";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const theme = useTheme();
  const router = useRouter();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const cart = useProductStore((state) => state.cart);

  useEffect(() => {
    const role = getCookie("role") as string;
    setUserRole(role);
  }, []);

  function signOut() {
    deleteCookie("role");
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    localStorage.setItem("user", "");
    window.location.reload();
  }

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const toggleCartDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setCartDrawerOpen(open);
    };

  const renderUserRoleLink = () => {
    if (userRole === "ADMIN") {
      return (
        <Link href={routes.dashboard} sx={{ textDecoration: "none" }}>
          Dashboard
        </Link>
      );
    }
    if (userRole === "USER") {
      return (
        <Link href={routes.userProfile} sx={{ textDecoration: "none" }}>
          Profile
        </Link>
      );
    }
    return (
      <Link href={routes.signIn} sx={{ textDecoration: "none" }}>
        Sign In
      </Link>
    );
  };

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
        bgcolor: "primary.light",
        position: "fixed",
        top: 0,
        zIndex: 2,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        <IconButton onClick={() => router.push(routes.home)}>
          <PetsIcon
            sx={{ color: "primary.main", fontSize: { xs: 30, md: 40 } }}
          />
        </IconButton>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: 15,
            display: { xs: "none", md: "block" },
          }}
        >
          PAWFECT
        </Typography>
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            ml: 1,
            color: "primary.main",
          }}
          onClick={toggleCartDrawer(true)}
        >
          <ShoppingCart sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: { xs: 4, md: 6 },
          fontSize: { md: 17 },
        }}
      >
        <Link href={routes.shop} sx={{ textDecoration: "none" }}>
          Shop
        </Link>
        <Link href={routes.aboutUs} sx={{ textDecoration: "none" }}>
          Our Story
        </Link>
        <Link href={routes.contactUs} sx={{ textDecoration: "none" }}>
          Contact Us
        </Link>
        {renderUserRoleLink()}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "primary.main", fontSize: 30, mt: 1 }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconButton onClick={toggleCartDrawer(true)}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart
              sx={{
                color: "primary.main",
                fontSize: 30,
                display: { xs: "none", md: "block" },
                cursor: "pointer",
              }}
            />
          </Badge>
        </IconButton>
        {userRole && (
          <Logout
            sx={{
              color: "primary.main",
              fontSize: 30,
              display: { xs: "none", md: "block" },
              cursor: "pointer",
              mt: 1,
            }}
            onClick={signOut}
          />
        )}
        <Menu
          sx={{
            color: "primary.main",
            fontSize: 30,
            display: { xs: "block", md: "none" },
          }}
          onClick={toggleDrawer(true)}
        />
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DrawerList userRole={userRole} />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor={isMdUp ? "right" : "left"}
        open={cartDrawerOpen}
        onClose={toggleCartDrawer(false)}
        onOpen={toggleCartDrawer(true)}
      >
        <CartDrawer />
      </SwipeableDrawer>
    </Box>
  );
}
