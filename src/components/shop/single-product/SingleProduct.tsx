import { useGetProductById } from "@/hooks";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import parse from 'html-react-parser';


export default function SingleProduct({ id }: any) {
  if (!id || Array.isArray(id)) {
    return <Typography>Invalid product ID</Typography>;
  }

  const { data } = useGetProductById(id);
  const product = data?.data?.product;

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Container sx={{ pb: 3, pt:13 }}>
      <Typography sx={{ fontSize: 30, mb: 3, maxWidth: 550 }}>
        {product.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-around" },
        }}
      >
        <Image
          src={`http://${product.images}`}
          alt={product.name}
          width={300}
          height={300}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 30 }}>€ {product.price}</Typography>
          <Divider sx={{ bgcolor: "primary.dark", mt: 1, mb: 3 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: 20 }}>Quantity</Typography>
              <Button
                sx={{ width: 20, border: "2px solid #f1ae4b", color: "black" }}
              >
                -
              </Button>
              <Button
                sx={{ width: 20, border: "2px solid #f1ae4b", color: "black" }}
              >
                +
              </Button>
            </Box>
            <Button
              sx={{
                width: { xs: 150, sm: 250 },
                bgcolor: "primary.dark",
                color: "primary.light",
                mt: 3,
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Add To Basket
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ border: "2px solid #f1ae4b", borderRadius: 2, mt: 3, p: 2 }}>
      {parse(product.description)}
      </Box>
    </Container>
  );
}
