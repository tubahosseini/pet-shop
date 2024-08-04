import { useGetProductById } from "@/hooks";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import parse from "html-react-parser";
import { routes } from "@/constants/routes";

export default function SingleProduct({ id }: any) {
  const { data } = useGetProductById(id);
  const product = data?.data?.product;
  const [quantityInBasket, setQuantityInBasket] = useState(0);

  if (!id || Array.isArray(id)) {
    return <Typography>Invalid product ID</Typography>;
  }

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  const isOutOfStock = product.quantity === 0;

  function handleIncrease() {
    if (quantityInBasket < product.quantity) {
      setQuantityInBasket(quantityInBasket + 1);
    }
  }

  function handleDecrease() {
    if (quantityInBasket > 0) {
      setQuantityInBasket(quantityInBasket - 1);
    }
  }

  return (
    <Container sx={{ pb: 3, pt: 13 }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ my: 3 }}>
        <Link
          color="inherit"
          href={routes.home}
          sx={{ textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          color="inherit"
          href={routes.shop}
          sx={{ textDecoration: "none" }}
        >
          Shop
        </Link>
        <Link
          color="inherit"
          href={`${routes.home}shop?category=${product.category.name}&subcategory=`}
          sx={{ textDecoration: "none" }}
        >
          {product.category.name}
        </Link>
        <Typography color="textPrimary">{product.name}</Typography>
      </Breadcrumbs>
      <Divider sx={{ my: 3 }} />
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
          {isOutOfStock && (
            <Typography sx={{ fontSize: 20, color: "red" }}>
              Out of stock
            </Typography>
          )}
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
              <Box
                sx={{ display: "flex", gap: 3, alignItems: "center", mt: 2 }}
              >
                <Button
                  sx={{
                    width: 15,
                    border: "2px solid #f1ae4b",
                    color: "black",
                  }}
                  disabled={isOutOfStock || quantityInBasket === 0}
                  onClick={handleDecrease}
                >
                  -
                </Button>
                <Typography sx={{ cursor: "pointer" }}>
                  {quantityInBasket}
                </Typography>
                <Button
                  sx={{
                    width: 15,
                    border: "2px solid #f1ae4b",
                    color: "black",
                  }}
                  disabled={
                    isOutOfStock || quantityInBasket === product.quantity
                  }
                  onClick={handleIncrease}
                >
                  +
                </Button>
              </Box>
            </Box>
            <Button
              sx={{
                width: { xs: 150, sm: 250 },
                bgcolor: (theme) =>
                  isOutOfStock || quantityInBasket === 0
                    ? theme.palette.grey[300]
                    : theme.palette.primary.dark,
                color: "primary.light",
                mt: 3,
                "&:hover": { bgcolor: "primary.dark" },
              }}
              disabled={isOutOfStock || quantityInBasket === 0}
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
