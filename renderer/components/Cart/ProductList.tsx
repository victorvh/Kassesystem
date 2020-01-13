import React from "react";
import * as S from "./styles";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <S.Products>
      <S.List>
        {products?.map(p => (
          <ProductItem product={p} />
        ))}
      </S.List>
    </S.Products>
  );
};

export default ProductList;
