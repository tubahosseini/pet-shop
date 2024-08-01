import React, { useState } from "react";  
import ProductCard from "../shared/ProductCard";  
import { Container, Grid, Button, Box } from "@mui/material";  
import { useGetAllProducts } from "@/hooks";  

const productsPerPage = 10;  

export default function Shop() {  
  const { data } = useGetAllProducts();  
  const products = data?.data.products || [];  
  const [currentPage, setCurrentPage] = useState(1);  

  // to show the latest products on top
  const reversedProducts = [...products].reverse();  

  // Calculate the number of products in each page  
  const totalPages = Math.ceil(reversedProducts.length / productsPerPage);  
  const startIndex = (currentPage - 1) * productsPerPage;  
  const currentProducts = reversedProducts.slice(  
    startIndex,  
    startIndex + productsPerPage  
  );  

  const handleNext = () => {  
    if (currentPage < totalPages) {  
      setCurrentPage((prevPage) => prevPage + 1);  
    }  
  };  

  const handlePrevious = () => {  
    if (currentPage > 1) {  
      setCurrentPage((prevPage) => prevPage - 1);  
    }  
  };  

  return (  
    <Container sx={{ my: 3, pb: 2, pt: 12 }}>  
      <Grid container spacing={3}>  
        <Grid  
          item  
          xs={12}  
          md={2}  
          sx={{ bgcolor: "pink", ml: { xs: 3, md: 0 } }}  
        >  
          bla bla bla  
        </Grid>  
        <Grid item xs={12} md={10}>  
          <Grid container spacing={2}>  
            {currentProducts.map((product: any) => (  
              <Grid item xs={6} sm={4} md={3} key={product.id}>  
                <ProductCard product={product} />  
              </Grid>  
            ))}  
          </Grid>  
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>  
            <Button onClick={handlePrevious} disabled={currentPage === 1}>  
              Previous  
            </Button>  
            <Button onClick={handleNext} disabled={currentPage === totalPages}>  
              Next  
            </Button>  
          </Box>  
        </Grid>  
      </Grid>  
    </Container>  
  );  
}