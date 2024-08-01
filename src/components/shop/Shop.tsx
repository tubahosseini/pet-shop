import React, { useState, useEffect } from "react";
import ProductCard from "../shared/ProductCard";
import {
  Container,
  Grid,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useGetAllProducts } from "@/hooks";
import { useRouter } from "next/router";
import { routes } from "@/constants/routes";

const productsPerPage = 12;

export default function Shop() {
  const { data } = useGetAllProducts();
  const products = data?.data.products || [];
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { category = "", subcategory = "" } = router.query;

  useEffect(() => {
    setCurrentPage(1);
  }, [category, subcategory]);

  // Filter products based on category and subcategory
  const filteredProducts = products.filter((product: any) => {
    return (
      (!category || product.category.slugname === category) &&
      (!subcategory || product.subcategory.slugname === subcategory)
    );
  });

  // to show the latest products on top
  const reversedProducts = [...filteredProducts].reverse();

  // Calculate the number of products in each page
  const totalPages = Math.ceil(reversedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = reversedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleCategoryChange = (event: any) => {
    const newCategory = event.target.value;
    router.push({
      pathname: router.pathname,
      query: { category: newCategory, subcategory: "" },
    });
  };

  const handleSubcategoryChange = (event: any) => {
    const newSubcategory = event.target.value;
    router.push({
      pathname: router.pathname,
      query: { category, subcategory: newSubcategory },
    });
  };

  return (
    <Container sx={{ my: 3, pb: 2, pt: 12 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            ml: { xs: 3, md: 0 },
            px: 3,
            boxShadow: "8px 0 15px -10px rgba(0,0,0,0.3)",
          }}
        >
          <Typography>Filter Products : </Typography>
          <Divider sx={{ my: 2 }} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleCategoryChange}>
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="cats">cats</MenuItem>
              <MenuItem value="dogs">dogs</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Subcategory</InputLabel>
            <Select value={subcategory} onChange={handleSubcategoryChange}>
              <MenuItem value="">All Subcategories</MenuItem>
              <MenuItem value="catsfoods">Cats Foods</MenuItem>
              <MenuItem value="catstoys">Cats Toys</MenuItem>
              <MenuItem value="dogsfoods">Dogs Foods</MenuItem>
              <MenuItem value="dogsclothes">Dogs Clothes</MenuItem>
              <MenuItem value="dogsbeds">Dogs Beds</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={10}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 3 }}>
            <Link
              color="inherit"
              href={routes.home}
              sx={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Typography color="textPrimary">Shop</Typography>
          </Breadcrumbs>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={2}>
            {currentProducts.map((product: any) => (
              <Grid item xs={6} sm={4} md={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ mt: 3 }} />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
