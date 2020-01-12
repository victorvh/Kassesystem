import React, { useState, useContext } from "react";
import Product from "../server/entities/Product";

export type CartContextValue = {
  readonly products: Product[];
  readonly total: number;
  readonly addProduct: (product: Product) => void;
  readonly clearProducts: () => void;
};

export const CartContext = React.createContext<CartContextValue>(null!);

export type CartProviderProps = { children: React.ReactNode };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const value: CartContextValue = {
    products,
    get total() {
      return products.reduce((sum, product) => sum + product.price, 0);
    },
    addProduct: product => {
      setProducts([...products, product]);
    },
    clearProducts: () => {
      setProducts([]);
    }
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used inside of CartProvider");

  return context;
};
