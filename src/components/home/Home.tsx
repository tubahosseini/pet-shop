import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import animalsLanding from "@/assets/images/home/animalsLanding.svg";
import Subscribe from "./subscribe/Subscribe";
import TopBrands from "./top-brands/TopBrands";
import Categories from "./categories/Categories";
import BusinessStats from "./business-stats/BusinessStats";
import Introduction from "./introduction/Introduction";
import orangePawPrint from "@/assets/images/home/orangePawPrint.svg";
import { Pets } from "@mui/icons-material";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 110,
          left: 0,
          width: "100%",
          height: "40%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <Image
          src={orangePawPrint}
          alt="paw prints"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <Container sx={{ pt: 10, position: "relative", zIndex: 1 }}>
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
              ml: { md: 10 },
            }}
          >
            FOR THE LOVE <br /> OF PAWS AND <br /> CLAWS.{" "}
            <Pets sx={{ fontSize: 50, transform: "rotate(30deg)" }} />
          </Typography>
          <Box sx={{ mr: { md: 10 } }}>
            <Image
              src={animalsLanding}
              alt="a picture of animals"
              width={400}
              height={400}
            />
          </Box>
        </Box>
        <Introduction />
        <Typography
          sx={{
            fontSize: 30,
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
            fontWeight: "bold",
            mt: 25,
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
            fontWeight: "bold",
            mt: 5,
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
        ></Box>
        <BusinessStats />
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
        </Box>
      </Container>
    </Box>
  );
}
