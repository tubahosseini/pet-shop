import React from "react";
import ProductCard from "../shared/ProductCard";
import { Container, Grid } from "@mui/material";
import { useGetAllProducts } from "@/hooks";

export default function Shop() {
  const { data } = useGetAllProducts();
  const products = data?.data.products;

  return (
    <Container sx={{ my: 3, py: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2} sx={{ bgcolor: "pink" }}>
          bla bla bla
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={2}>
            {products?.map((product: any) => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
