import React, { useState } from "react";
import {
  Box,
  Link,
  Typography,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Collapse,
  Divider,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Favorite,
  ShoppingCart,
  Menu,
  AutoStories,
  Phone,
  Store,
  VpnKey,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { routes } from "@/constants/routes";

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
  const [open, setOpen] = useState(false);
  const [openCats, setOpenCats] = useState(false);
  const [openDogs, setOpenDogs] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const theme = useTheme();
  const router = useRouter();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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

  const drawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItem>
          <Store sx={{ color: "primary.main", mr: 1 }} />
          <ListItemText primary="Shop" />
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 8, bgcolor: "#f7f7f7" }}>
              <ListItemText primary="Cats" />
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpenCats(!openCats)}
              >
                {openCats ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </ListItem>
            <Collapse in={openCats} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ ml: 10 }}>
                <ListItem>
                  <ListItemText primary="Foods" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Toys" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem sx={{ pl: 8, bgcolor: "#f7f7f7" }}>
              <ListItemText primary="Dogs" />
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpenDogs(!openDogs)}
              >
                {openDogs ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </ListItem>
            <Collapse in={openDogs} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ ml: 10 }}>
                <ListItem>
                  <ListItemText primary="Foods" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Clothes" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Beds" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <Divider />
        <ListItem component="a" href={routes.aboutUs}>
          <AutoStories sx={{ color: "primary.main", mr: 1 }} />
          <ListItemText primary="Our Story" />
        </ListItem>
        <Divider />
        <ListItem component="a" href={routes.contactUs}>
          <Phone sx={{ color: "primary.main", mr: 1 }} />
          <ListItemText primary="Contact Us" />
        </ListItem>
        <Divider />
        <ListItem component="a" href={routes.signIn}>
          <VpnKey sx={{ color: "primary.main", mr: 1 }} />
          <ListItemText primary="Sign In" />
        </ListItem>
      </List>
    </Box>
  );

  const cartDrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItem>
          <ListItemText primary="Item 1" secondary="Description of item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" secondary="Description of item 2" />
        </ListItem>
      </List>
    </Box>
  );

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
        <Link href={routes.signIn} sx={{ textDecoration: "none" }}>
          Sign In
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
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
          onClick={toggleCartDrawer(true)}
        />
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
        {drawerList}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor={isMdUp ? "right" : "left"}
        open={cartDrawerOpen}
        onClose={toggleCartDrawer(false)}
        onOpen={toggleCartDrawer(true)}
      >
        {cartDrawerList}
      </SwipeableDrawer>
    </Box>
  );
}
