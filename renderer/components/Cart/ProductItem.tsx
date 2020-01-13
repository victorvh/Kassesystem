import React from "react";
import Product from "../../server/entities/Product";
import * as S from "./styles";
import { useCart, CartProduct } from "../../context/Cart";
import { formatter } from "../../helpers/formatter";

type ProductProps = {
  product: CartProduct;
};

const ProductItem = ({ product }: ProductProps) => {
  const cart = useCart();

  const handleRemoveClick = () => {
    cart.removeProduct(product.uuid);
  };

  return (
    <S.Product onClick={handleRemoveClick}>
      <S.ProductImage />
      <S.ProductInfo>
        <S.ProductBrand>{product.brand}</S.ProductBrand>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>{formatter.format(product.price / 100)}</S.ProductPrice>
      </S.ProductInfo>
    </S.Product>
  );
};

export default ProductItem;
