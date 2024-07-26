import React from "react";
import ProductCard from "../shared/ProductCard";
import { Container, Grid } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    image: "/path/to/image3.jpg",
  },
  {
    id: 4,
    name: "Product 1",
    description: "Description 1",
    image: "/path/to/image1.jpg",
  },
  {
    id: 5,
    name: "Product 2",
    description: "Description 2",
    image: "/path/to/image2.jpg",
  },
  {
    id: 6,
    name: "Product 3",
    description: "Description 3",
    image: "/path/to/image3.jpg",
  },
];

export default function Shop() {
  return (
    <Container sx={{ my: 3, py: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2} sx={{ bgcolor: "pink" }}>
          bla bla bla
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={2}>
            {products.map((product) => (
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
