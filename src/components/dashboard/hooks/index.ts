import { getAllProducts } from "@/components/dashboard/services";
import { useQuery } from "@tanstack/react-query";

const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });
};

export default useGetAllProducts;
