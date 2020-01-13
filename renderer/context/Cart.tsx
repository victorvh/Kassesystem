import React, { useState, useContext } from "react";
import Product from "../server/entities/Product";
import uuid from "uuid/v4";

export type CartProduct = {
  uuid: string;
} & Product;

export type CartContextValue = {
  readonly products: CartProduct[];
  readonly total: number;
  readonly addProduct: (product: Product) => void;
  readonly clearProducts: () => void;
  readonly removeProduct: (uuid: string) => void;
};

export const CartContext = React.createContext<CartContextValue>(null!);

export type CartProviderProps = { children: React.ReactNode };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const value: CartContextValue = {
    products,
    get total() {
      return products.reduce((sum, product) => sum + product.price, 0);
    },
    addProduct: product => {
      setProducts([...products, { ...product, uuid: uuid() }]);
    },
    clearProducts: () => {
      setProducts([]);
    },
    removeProduct: uuid => {
      setProducts(products.filter(product => product.uuid !== uuid));
    }
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used inside of CartProvider");

  return context;
};
