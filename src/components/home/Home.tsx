import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import animalsLanding from "@/assets/images/home/animalsLanding.svg";
import dogLookUp from "@/assets/images/home/dogLookUp.svg";
// import ProductCard from "../shared/ProductCard";
import Subscribe from "./subscribe/Subscribe";
import TopBrands from "./top-brands/TopBrands";
import Categories from "./categories/Categories";
// import { useGetAllProducts } from "@/hooks";

export default function Home() {
  // const { data } = useGetAllProducts();
  // const products = data.data.products;
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Typography
          sx={{
            fontSize: 45,
            color: "primary.main",
            py: 10,
            fontWeight: "bold",
          }}
        >
          FOR THE LOVE <br /> OF PAWS AND <br /> CLAWS.
        </Typography>
        <Image
          src={animalsLanding}
          alt="a picture of animals"
          width={400}
          height={400}
        />
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.light",
            width: "90%",
            justifyContent: "center",
            border: "2px solid #a389ff",
            textAlign: "center",
            py: 6,
            fontSize: 26,
            color: "primary.main",
            borderRadius: 5,
          }}
        >
          +5 Years Of <br /> Experience
        </Box>
        <Box
          sx={{
            bgcolor: "primary.ligt",
            width: "90%",
            justifyContent: "center",
            border: "2px solid #a389ff",
            textAlign: "center",
            py: 6,
            fontSize: 26,
            color: "primary.main",
            borderRadius: 5,
          }}
        >
          134 K <br /> Happy Customers
        </Box>
        <Box
          sx={{
            bgcolor: "primary.ligth",
            width: "90%",
            justifyContent: "center",
            border: "2px solid #a389ff",
            textAlign: "center",
            py: 6,
            fontSize: 26,
            color: "primary.main",
            borderRadius: 5,
          }}
        >
          +500 <br /> Products
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          mb: 4,
        }}
      >
        <Image
          src={dogLookUp}
          alt="picture of a dog"
          width={200}
          height={200}
        />
        <Typography sx={{ fontSize: 25, color: "primary.main", py: 10, mx: 5 }}>
          Established in 2019, we are a passionate and dedicated team of animal
          lovers committed to bringing joy into the lives of our customers and
          their furry, scaly, and feathered friends.
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: 30,
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          fontWeight: "bold",
        }}
      >
        BEST SELLERS
      </Typography>
      <Box
        sx={{
          border: "1px solid orange",
          width: "100%",
          mb: 6,
          p: 2,
          display: "flex",
          gap: 2,
        }}
      >
        {/* <ProductCard product={products}/> */}
      </Box>
      <Typography
        sx={{
          fontSize: 30,
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          fontWeight: "bold",
        }}
      >
        SHOP BASED ON PETS
      </Typography>
      <Categories />
      <Typography
        sx={{
          fontSize: 30,
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          mt: 8,
          fontWeight: "bold",
        }}
      >
        TOP BRANDS
      </Typography>
      <TopBrands />
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 8 }}>
        <Subscribe />
      </Box>{" "}
    </Container>
  );
}
