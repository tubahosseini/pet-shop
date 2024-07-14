import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  Add,
  Category,
  Home,
  Inventory,
  Logout,
  Pets,
} from "@mui/icons-material";
import React from "react";
import {
  listItemStyles,
  listItemTextStyles,
  listStyles,
  logoIconStyles,
} from "./styles/dashboard.styles";

export default function Dashboard() {
  return (
    <Box>
      <Box>
        <List sx={listStyles}>
          <Pets sx={logoIconStyles} />
          <ListItem sx={listItemStyles}>
            <ListItemAvatar>
              <Home />
            </ListItemAvatar>
            <ListItemText primary="Dashboard" sx={listItemTextStyles} />
          </ListItem>
          <ListItem sx={listItemStyles}>
            <ListItemAvatar>
              <Category />
            </ListItemAvatar>
            <ListItemText primary="Products" sx={listItemTextStyles} />
          </ListItem>
          <ListItem sx={listItemStyles}>
            <ListItemAvatar>
              <Add />
            </ListItemAvatar>
            <ListItemText primary="Add" sx={listItemTextStyles} />
          </ListItem>
          <ListItem sx={listItemStyles}>
            <ListItemAvatar>
              <Inventory />
            </ListItemAvatar>
            <ListItemText primary="Inventory" sx={listItemTextStyles} />
          </ListItem>
          <ListItem sx={listItemStyles}>
            <ListItemAvatar>
              <Logout />
            </ListItemAvatar>
            <ListItemText primary="Sign Out" sx={listItemTextStyles} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
