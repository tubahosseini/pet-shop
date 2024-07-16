import { Box, Typography } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddProductForm from "./AddProductForm";
import AddCategoryForm from "./AddCategoryForm";
import AddSubCategoryForm from "./AddSubCategoryForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AddTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        my: "auto",
        mx: { xs: 6, md: 15 },
        width: "100%",
        height: "90vh",
        // bgcolor: "pink",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Add Product" {...a11yProps(0)} />
            <Tab label="Add Category" {...a11yProps(1)} />
            <Tab label="Add Sub Category" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AddProductForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AddCategoryForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AddSubCategoryForm />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
