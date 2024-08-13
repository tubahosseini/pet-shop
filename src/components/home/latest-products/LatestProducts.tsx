// import ProductCard from "@/components/shared/ProductCard";
// import { useGetAllProducts } from "@/hooks";
// import React from "react";

// export default function LatestProducts() {
//   const { data } = useGetAllProducts();
//   const latestProducts = data?.data.products.slice(-10).reverse(); // Get the last 10 products

//   return (
//     <>
//       {latestProducts?.map((product: any) => (
//         <ProductCard key={product._id} product={product} />
//       ))}
//     </>
//   );
// }

import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import { useGetAllProducts } from "@/hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

export default function LatestProducts() {
  const { data } = useGetAllProducts();
  const latestProducts = data?.data.products.slice(-10).reverse(); // Get the last 10 products

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {latestProducts?.map((product: any) => (
        <Box sx={{ py: 1, pl: 2.2 }}>
          <ProductCard key={product._id} product={product} />
        </Box>
      ))}
    </Slider>
  );
}
