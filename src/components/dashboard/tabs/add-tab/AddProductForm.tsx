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
import { useAddNewProduct } from "../../hooks";

interface AddProductFormInputs {
  name: string;
  price: string;
  quantity: string;
  brand: string;
  description: string;
  category: string;
  subcategory: string;
  images: any;
}

export default function AddProductForm() {
  const { mutate } = useAddNewProduct();
  const { control, handleSubmit, watch } = useForm<AddProductFormInputs>();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const selectedCategory = watch("category"); //! to check which category is selected

  const onSubmit: SubmitHandler<AddProductFormInputs> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name as string);
    formData.append("price", data.price as string);
    formData.append("quantity", data.quantity as string);
    formData.append("brand", data.brand as string);
    formData.append("description", data.description as string);
    formData.append("category", data.category as string);
    formData.append("subcategory", data.subcategory as string);
    formData.append("images", uploadedFile as unknown as Blob);

    mutate(
      formData,
      {
        onSuccess: () => {
          toast.success("Product Added Successfully! 😍");
        },
        onError: (error) => {
          toast.error("Failed!");
          console.error(error.message);
        },
      }
    );
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
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="name"
              required
              fullWidth
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="price"
              required
              fullWidth
            />
          )}
        />
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="quantity"
              required
              fullWidth
            />
          )}
        />
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="brand"
              required
              fullWidth
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="standard"
              label="description"
              required
              fullWidth
            />
          )}
        />
        <FormControl variant="standard" fullWidth required>
          <InputLabel>Category</InputLabel>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select {...field} label="category">
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
            render={({ field }) => (
              <Select
                {...field}
                label="subcategory"
                disabled={!selectedCategory}
                sx={{ mb: 3 }}
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
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setUploadedFile(file ? file : null);
          }}
        />
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
    </form>
  );
}
