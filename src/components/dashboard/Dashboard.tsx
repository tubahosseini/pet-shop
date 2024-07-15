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
import React, { useState } from "react";
import {
  listItemStyles,
  listItemTextStyles,
  listStyles,
  logoIconStyles,
} from "./styles/dashboard.styles";
import DashboardTab from "./tabs/dashboard-tab/DashboardTab";
import ProductsTab from "./tabs/products-tab/ProductsTab";
import AddTab from "./tabs/add-tab/AddTab";
import InventoryTab from "./tabs/inventory-tab/InventoryTab";

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "DashboardTab":
        return <DashboardTab />;
      case "ProductsTab":
        return <ProductsTab />;
      case "AddTab":
        return <AddTab />;
      case "InventoryTab":
        return <InventoryTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <List sx={listStyles}>
        <Pets sx={logoIconStyles} />
        <ListItem
          sx={listItemStyles}
          onClick={() => setSelectedComponent("DashboardTab")}
        >
          <ListItemAvatar>
            <Home />
          </ListItemAvatar>
          <ListItemText primary="Dashboard" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={listItemStyles}
          onClick={() => setSelectedComponent("ProductsTab")}
        >
          <ListItemAvatar>
            <Category />
          </ListItemAvatar>
          <ListItemText primary="Products" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={listItemStyles}
          onClick={() => setSelectedComponent("AddTab")}
        >
          <ListItemAvatar>
            <Add />
          </ListItemAvatar>
          <ListItemText primary="Add" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={listItemStyles}
          onClick={() => setSelectedComponent("InventoryTab")}
        >
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
      <Box sx={{ width: "100%" }}> {renderComponent()}</Box>
    </Box>
  );
}
