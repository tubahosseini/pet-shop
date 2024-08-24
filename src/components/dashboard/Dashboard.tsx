import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  Add,
  Category,
  Checklist,
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
import OrdersTab from "./tabs/orders-tab/OrdersTab";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { routes } from "@/constants/routes";
import { useGetAllProducts } from "@/hooks";

export default function Dashboard() {
  const { data } = useGetAllProducts();
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState("DashboardTab");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "DashboardTab":
        return <DashboardTab />;
      case "ProductsTab":
        return <ProductsTab data={data} />;
      case "AddTab":
        return <AddTab />;
      case "InventoryTab":
        return <InventoryTab data={data} />;
      case "OrdersTab":
        return <OrdersTab />;
      default:
        return <AddTab />;
    }
  };

  const getListItemStyles = (component: any) => {
    return {
      ...listItemStyles,
      ...(selectedComponent === component && {
        bgcolor: "primary.light",
        color: "primary.main",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        "::before": {
          content: '""',
          position: "absolute",
          right: 0,
          top: "-50px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          pointerEvents: "none",
          boxShadow: "35px 35px 0 10px white",
        },
        "::after": {
          content: '""',
          position: "absolute",
          right: 0,
          bottom: "-50px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          pointerEvents: "none",
          boxShadow: "35px -35px 0 10px white",
        },
      }),
    };
  };

  return (
    <Box sx={{ display: "flex" }}>
      <List sx={listStyles}>
        <IconButton onClick={() => router.push(routes.home)}>
          <Pets sx={logoIconStyles} />
        </IconButton>
        <ListItem
          sx={getListItemStyles("DashboardTab")}
          onClick={() => setSelectedComponent("DashboardTab")}
        >
          <ListItemAvatar>
            <Home />
          </ListItemAvatar>
          <ListItemText primary="Dashboard" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={getListItemStyles("ProductsTab")}
          onClick={() => setSelectedComponent("ProductsTab")}
        >
          <ListItemAvatar>
            <Category />
          </ListItemAvatar>
          <ListItemText primary="Products" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={getListItemStyles("AddTab")}
          onClick={() => setSelectedComponent("AddTab")}
        >
          <ListItemAvatar>
            <Add />
          </ListItemAvatar>
          <ListItemText primary="Add" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={getListItemStyles("InventoryTab")}
          onClick={() => setSelectedComponent("InventoryTab")}
        >
          <ListItemAvatar>
            <Inventory />
          </ListItemAvatar>
          <ListItemText primary="Inventory" sx={listItemTextStyles} />
        </ListItem>
        <ListItem
          sx={getListItemStyles("OrdersTab")}
          onClick={() => setSelectedComponent("OrdersTab")}
        >
          <ListItemAvatar>
            <Checklist />
          </ListItemAvatar>
          <ListItemText primary="Orders" sx={listItemTextStyles} />
        </ListItem>
        <ListItem sx={listItemStyles}>
          <ListItemAvatar>
            <Logout onClick={() => setCookie("role", "")} />
          </ListItemAvatar>
          <ListItemText primary="Sign Out" sx={listItemTextStyles} />
        </ListItem>
      </List>
      {renderComponent()}
    </Box>
  );
}
