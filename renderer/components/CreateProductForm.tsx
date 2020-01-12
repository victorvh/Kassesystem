import { Field, Form, Formik, FormikConfig } from "formik";
import useSWR, { mutate } from "swr";
import Product from "../server/entities/Product";
import Router from "next/router";

const CreateProductForm = () => {
  const { data: products } = useSWR<Product[]>("/api/products");

  const form: FormikConfig<Partial<Product>> = {
    initialValues: {
      ean: 0,
      name: "",
      price: 0
    },

    onSubmit: async ({ price, ...values }) => {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...values,
          price: price * 100
        })
      });

      const product = await res.json();

      mutate("/api/products", [...products, product], false);

      Router.push("/products");
    }
  };

  return (
    <Formik {...form}>
      <Form>
        <fieldset>
          <legend>Create Product</legend>

          <div>
            <label>
              <div>EAN:</div>
              <Field type="number" name="ean" />
            </label>
          </div>

          <div>
            <label>
              <div>Name:</div>
              <Field type="text" name="name" />
            </label>
          </div>

          <div>
            <label>
              <div>Brand:</div>
              <Field type="text" name="brand" />
            </label>
          </div>

          <div>
            <label>
              <div>Price:</div>
              <div>
                <Field type="number" name="price" /> kr.
              </div>
            </label>
          </div>

          <button type="submit">Add product</button>
        </fieldset>
      </Form>
    </Formik>
  );
};

export default CreateProductForm;
