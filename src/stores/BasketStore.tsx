import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TypeProductBackend {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
  description: string;
  category: { name: string };
  quantityInBasket: number;
}

interface TypeProductStore {
  cart: TypeProductBackend[];
  addProduct: (product: TypeProductBackend) => void;
  decreaseQuantity: (_id: string) => void;
  increaseQuantity: (_id: string) => void;
  deleteProduct: (_id: string) => void;
  clearCart: () => void;
}

export const useProductStore = create<TypeProductStore>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (product) => {
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item._id === product._id
          );
          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item._id === product._id
                  ? {
                      ...item,
                      quantityInBasket:
                        item.quantityInBasket + product.quantityInBasket,
                    }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, product] };
        });
      },
      decreaseQuantity: (_id) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item._id === _id
                ? {
                    ...item,
                    quantityInBasket: Math.max(
                      (item.quantityInBasket || 0) - 1,
                      0
                    ),
                  }
                : item
            )
            .filter((item) => item.quantityInBasket > 0),
        }));
      },
      increaseQuantity: (_id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === _id
              ? { ...item, quantityInBasket: (item.quantityInBasket || 0) + 1 }
              : item
          ),
        }));
      },
      deleteProduct: (_id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== _id),
        }));
      },
      clearCart: () => {
        set(() => ({
          cart: [],
        }));
      },
    }),
    {
      name: "Basket",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
