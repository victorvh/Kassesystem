import { useFormik } from "formik";
import React from "react";
import { mutate } from "swr";
import * as S from "./styles";
import { useCart } from "../../context/Cart";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import { formatter } from "../../helpers/formatter";

const Cart = () => {
  const cart = useCart();

  const formik = useFormik({
    initialValues: {},

    onSubmit: async values => {
      if (cart.products.length < 1) return;

      formik.setSubmitting(true);

      const res = await fetch("/api/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          price: cart.total,
          products: cart.products
        })
      });

      const purchase = await res.json();

      mutate("/api/purchases", purchase, false);

      cart.clearProducts();

      formik.setSubmitting(false);
    }
  });

  return (
    <S.Container>
      <S.Heading>Dine varer</S.Heading>

      <ProductList products={cart.products} />

      <div>
        <S.Price>
          <div>I alt</div>
          <div>{formatter.format(cart.total / 100)}</div>
        </S.Price>

        <form onSubmit={formik.handleSubmit}>
          <S.Button type="submit" disabled={formik.isSubmitting}>
            Bekræft og betal
          </S.Button>
        </form>
      </div>
    </S.Container>
  );
};

export default Cart;
