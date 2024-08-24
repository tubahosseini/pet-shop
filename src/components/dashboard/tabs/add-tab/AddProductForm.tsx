import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { useAddNewProduct } from "../../hooks";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to ensure that Quill is only loaded on the client side to prevent error!
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Image from "next/image";

interface AddProductFormInputs {
  name: string;
  price: string;
  quantity: string;
  brand: string;
  description: string;
  category: string;
  subcategory: string;
  images: File;
}

export default function AddProductForm() {
  const { mutate } = useAddNewProduct();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddProductFormInputs>();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const selectedCategory = watch("category"); // to check which category is selected

  const onSubmit: SubmitHandler<AddProductFormInputs> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("brand", data.brand);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("subcategory", data.subcategory);
    if (uploadedFile) {
      formData.append("images", uploadedFile as Blob);
    }

    mutate(formData, {
      onSuccess: () => {
        toast.success("Product Added Successfully! 😍");
        setValue("name", "");
        setValue("price", "");
        setValue("quantity", "");
        setValue("brand", "");
        setValue("description", "");
        setValue("category", ""); //! does not get empty😑
        setValue("subcategory", "");
        setUploadedFile(null); //! does not get empty😑
      },
      onError: (error) => {
        toast.error("Failed!");
        console.error(error.message);
      },
    });
  };

  const subcategories =
    selectedCategory === "66955b1363edcddc55f0b780"
      ? [
          { label: "Dog Food", value: "66957cee63edcddc55f0b7bd" },
          { label: "Dog Clothes", value: "66957d0163edcddc55f0b7c1" },
          { label: "Dog Beds", value: "66957d1863edcddc55f0b7c5" },
        ]
      : selectedCategory === "66955b2363edcddc55f0b784"
      ? [
          { label: "Cat Foods", value: "66957d7563edcddc55f0b7c9" },
          { label: "Cat Carriers", value: "66957d9e63edcddc55f0b7d1" },
          { label: "Cat Toys", value: "66957d9163edcddc55f0b7cd" },
        ]
      : [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="name"
              required
              fullWidth
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{
            required: "Price is required",
            pattern: {
              value: /^[0-9]+(\.[0-9]{1,2})?$/,
              message: "Price must be a number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="price"
              required
              fullWidth
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ""}
            />
          )}
        />
        <Controller
          name="quantity"
          control={control}
          rules={{
            required: "Quantity is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Quantity must be a number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="quantity"
              required
              fullWidth
              error={!!errors.quantity}
              helperText={errors.quantity ? errors.quantity.message : ""}
            />
          )}
        />
        <Controller
          name="brand"
          control={control}
          rules={{ required: "Brand is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="brand"
              required
              fullWidth
              error={!!errors.brand}
              helperText={errors.brand ? errors.brand.message : ""}
            />
          )}
        />
        <FormControl variant="standard" fullWidth required>
          <InputLabel>Category</InputLabel>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select {...field} label="category" error={!!errors.category}>
                <MenuItem value="66955b2363edcddc55f0b784">Cats</MenuItem>
                <MenuItem value="66955b1363edcddc55f0b780">Dogs</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth required>
          <InputLabel>Subcategory</InputLabel>
          <Controller
            name="subcategory"
            control={control}
            rules={{ required: "Subcategory is required" }}
            render={({ field }) => (
              <Select
                {...field}
                label="subcategory"
                disabled={!selectedCategory}
                error={!!errors.subcategory}
              >
                {subcategories.map((sub) => (
                  <MenuItem key={sub.value} value={sub.value}>
                    {sub.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <ReactQuill
              {...field}
              value={field.value || ""}
              onChange={(value) => setValue("description", value)}
              placeholder="description..."
            />
          )}
        />
        {errors.description && (
          <Box sx={{ color: "red", fontSize: "0.75rem", mt: -1 }}>
            {errors.description.message}
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setUploadedFile(file ? file : null);
            }}
            required
          />
          {errors.images && (
            <Box sx={{ color: "red", fontSize: "0.75rem", mt: -1 }}>
              {errors.images.message}
            </Box>
          )}
          {uploadedFile && (
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
              <Image
                src={URL.createObjectURL(uploadedFile)} //a method to create a temporary URL for a file to access the contents of the file within the browser.
                alt="uploaded picture of the product"
                width={100}
                height={100}
              />
            </Box>
          )}
          <Button
            type="submit"
            sx={{
              bgcolor: "primary.main",
              py: 0.7,
              px: 4,
              borderRadius: 3,
              color: "primary.light",
              mt: 3,
              "&:hover": { bgcolor: "primary.main" },
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </form>
  );
}
