import ProductCard from "@/components/shared/ProductCard";
import { routes } from "@/constants/routes";
import { useGetAllProducts } from "@/hooks";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const productsPerPage = 10;

export default function ShopBasedOnCategory({ category }: { category: any }) {
  const { data } = useGetAllProducts();
  const products = data?.data.products || [];
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product: any) => product.category.slugname === category
  );

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

  return (
    <Container sx={{ my: 1, pb: 2, pt: 12 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ bgcolor: "pink", ml: { xs: 3, md: 0 } }}
        >
          bla bla bla
        </Grid>
        <Grid item xs={12} md={10}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ my: 3 }}>
            <Link
              color="inherit"
              href={routes.home}
              sx={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Typography color="textPrimary">{category}</Typography>
          </Breadcrumbs>
          <Divider sx={{ mb: 3, mt: 1 }} />
          <Grid container spacing={2}>
            {currentProducts.map((product: any) => (
              <Grid item xs={6} sm={4} md={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
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
