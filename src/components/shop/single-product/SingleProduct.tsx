import QuantityControl from "@/components/shared/QuantityControl";
import { routes } from "@/constants/routes";
import { useGetProductById } from "@/hooks";
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import Image from "next/image";

export default function SingleProduct({ id }: { id: any }) {
  const { data } = useGetProductById(id);
  const product = data?.data?.product;

  if (!id || Array.isArray(id)) {
    return <Typography>Invalid product ID</Typography>;
  }

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  const isOutOfStock = product.quantity === 0;

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
              <QuantityControl product={product} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ border: "2px solid #f1ae4b", borderRadius: 2, mt: 3, p: 2 }}>
        {parse(product.description)}
      </Box>
    </Container>
  );
}
