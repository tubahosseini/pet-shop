import { useProductStore } from "@/stores/BasketStore";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function QuantityControl({ product }: { product: any }) {
  const {
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    cart,
  } = useProductStore();
  const productInCart = cart.find((item) => item._id === product._id);

  const quantityInBasket = productInCart ? productInCart.quantityInBasket : 0;

  function handleIncrease() {
    if (quantityInBasket < product.quantity) {
      if (!productInCart) {
        addProduct({ ...product, quantityInBasket: 1 });
      } else {
        increaseQuantity(product._id);
      }
    }
  }

  function handleDecrease() {
    if (quantityInBasket > 0) {
      decreaseQuantity(product._id);
      if (quantityInBasket - 1 === 0) {
        deleteProduct(product._id);
      }
    }
  }
  return (
    <Box sx={{ display: "flex", gap: 3, alignItems: "center", mt: 2 }}>
      <Button
        sx={{
          width: 15,
          border: "2px solid #f1ae4b",
          color: "black",
        }}
        disabled={product.quantity === 0 || quantityInBasket === 0}
        onClick={handleDecrease}
      >
        -
      </Button>
      <Typography sx={{ cursor: "pointer" }}>{quantityInBasket}</Typography>
      <Button
        sx={{
          width: 15,
          border: "2px solid #f1ae4b",
          color: "black",
        }}
        disabled={
          product.quantity === 0 || quantityInBasket === product.quantity
        }
        onClick={handleIncrease}
      >
        +
      </Button>
    </Box>
  );
}

// import { useProductStore } from "@/stores/BasketStore";
// import { Box, Button, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export default function ControlQuantity({ product }: { product: any }) {
//   const [quantityInBasket, setQuantityInBasket] = useState(0);
//   const {
//     addProduct,
//     increaseQuantity,
//     decreaseQuantity,
//     deleteProduct,
//     cart,
//   } = useProductStore();
//   const productInCart = cart.find((item) => item._id === product._id);

//   useEffect(() => {
//     if (product) {
//       const productInCart = cart.find((item) => item._id === product._id);
//       if (productInCart) {
//         setQuantityInBasket(productInCart.quantityInBasket);
//       }
//     }
//   }, [cart, product]);

//   function handleIncrease() {
//     if (quantityInBasket < product.quantity) {
//       if (!productInCart) {
//         addProduct({ ...product, quantityInBasket: 1 });
//         setQuantityInBasket(1);
//       } else {
//         increaseQuantity(product._id);
//         setQuantityInBasket(quantityInBasket + 1);
//       }
//     }
//   }

//   function handleDecrease() {
//     if (quantityInBasket > 0) {
//       decreaseQuantity(product._id);
//       setQuantityInBasket(quantityInBasket - 1);
//       if (quantityInBasket - 1 === 0) {
//         deleteProduct(product._id);
//       }
//     }
//   }
//   return (
//     <Box sx={{ display: "flex", gap: 3, alignItems: "center", mt: 2 }}>
//       <Button
//         sx={{
//           width: 15,
//           border: "2px solid #f1ae4b",
//           color: "black",
//         }}
//         disabled={product.quantity === 0 || quantityInBasket === 0}
//         onClick={handleDecrease}
//       >
//         -
//       </Button>
//       <Typography sx={{ cursor: "pointer" }}>{quantityInBasket}</Typography>
//       <Button
//         sx={{
//           width: 15,
//           border: "2px solid #f1ae4b",
//           color: "black",
//         }}
//         disabled={
//           product.quantity === 0 || quantityInBasket === product.quantity
//         }
//         onClick={handleIncrease}
//       >
//         +
//       </Button>
//     </Box>
//   );
// }
