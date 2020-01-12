import React from "react";
import Product from "../../server/entities/Product";
import * as S from "./styles";

const formatter = new Intl.NumberFormat("da", {
  style: "currency",
  currency: "DKK"
});

type ProductProps = { product: Product };
const ProductItem = ({ product }: ProductProps) => {
  return (
    <S.Product>
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
