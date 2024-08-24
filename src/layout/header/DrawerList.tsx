import { routes } from "@/constants/routes";
import {
  AutoStories,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Logout,
  Phone,
  Store,
  Dashboard,
  Person,
  VpnKey,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { setCookie } from "cookies-next";
import { useState } from "react";

export default function DrawerList({ userRole }: { userRole: string | null }) {
  const [open, setOpen] = useState(false);
  const [openCats, setOpenCats] = useState(false);
  const [openDogs, setOpenDogs] = useState(false);

  function signOut() {
    setCookie("role", "");
    window.location.reload();
  }

  const renderUserRoleListItem = () => {
    if (userRole === "ADMIN") {
      return (
        <ListItem component="a" href={routes.dashboard}>
          <Dashboard sx={{ color: "primary.main", mr: 1 }} />
          <ListItemText primary="Dashboard" />
        </ListItem>
      );
    }
    if (userRole === "USER") {
      return (
        <ListItem component="a" href={routes.userProfile}>
          <Person sx={{ color: "primary.main", mr: 1 }} />
          <ListItemText primary="Profile" />
        </ListItem>
      );
    }
    return (
      <ListItem component="a" href={routes.signIn}>
        <VpnKey sx={{ color: "primary.main", mr: 1 }} />
        <ListItemText primary="Sign In" />
      </ListItem>
    );
  };

  return (
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
        {renderUserRoleListItem()}
        <Divider />
        {userRole && (
          <ListItem>
            <IconButton onClick={signOut}>
              <Logout sx={{ color: "primary.main", mr: 1 }} />
            </IconButton>
            <ListItemText primary="Sign Out" />
          </ListItem>
        )}
      </List>
    </Box>
  );
}
