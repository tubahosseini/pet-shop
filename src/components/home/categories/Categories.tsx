import React from "react";
import { Grid } from "@mui/material";

import dogCategory from "@/assets/images/home/category-card/dog.svg";
import catCategory from "@/assets/images/home/category-card/cat.svg";
import giraffeCategory from "@/assets/images/home/category-card/giraffe.svg";
import rabbitCategory from "@/assets/images/home/category-card/rabbit.svg";
import frogCategory from "@/assets/images/home/category-card/frog.svg";
import birdCategory from "@/assets/images/home/category-card/bird.svg";
import CategoryCard from "../category-card/CategoryCard";

const categories = [
  { title: "DOGS", image: dogCategory, bgcolor: "primary.main" },
  { title: "CATS", image: catCategory, bgcolor: "primary.dark" },
  { title: "GIRAFFES", image: giraffeCategory, bgcolor: "primary.main" },
  { title: "BIRDS", image: birdCategory, bgcolor: "primary.dark" },
  { title: "REPTILES", image: frogCategory, bgcolor: "primary.main" },
  { title: "RABBITS", image: rabbitCategory, bgcolor: "primary.dark" },
];

export default function Categories() {
  return (
    <Grid container spacing={2.5}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category.title}>
          <CategoryCard
            title={category.title}
            image={category.image}
            bgcolor={category.bgcolor}
          />
        </Grid>
      ))}
    </Grid>
  );
}
