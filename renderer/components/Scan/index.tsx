import { Field, Form, Formik, FormikConfig } from "formik";
import React, { useState } from "react";

import { useCart } from "../../context/Cart";
import Product from "../../server/entities/Product";
import * as S from "./styles";

const Scan = () => {
  const cart = useCart();

  const form: FormikConfig<{ ean: string }> = {
    initialValues: {
      ean: ""
    },

    onSubmit: async ({ ean }, { setFieldValue }) => {
      setFieldValue("ean", "");

      const res = await fetch(`/api/products?ean=${ean}`);

      const products: Product[] = await res.json();

      cart.addProduct(products[0]);
    }
  };

  return (
    <S.Container>
      <S.Inner>
        <S.Heading>Scan en vare</S.Heading>
        <S.SubHeading>Eller skriv stregkoden og tilføj manuelt</S.SubHeading>

        <Formik {...form}>
          <Form>
            <S.Group>
              <Field
                name="ean"
                type="number"
                placeholder="1 234567 891234"
                as={S.Input}
              />

              <S.Button type="submit">Tilføj vare</S.Button>
            </S.Group>
          </Form>
        </Formik>
      </S.Inner>
    </S.Container>
  );
};

export default Scan;
