import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Product from "../../server/entities/Product";
import ProductList from "../../components/Cart/ProductList";
import { formatter } from "../../helpers/formatter";

const ProductsPage = () => {
  const { data: products, error: productError } = useSWR<Product[]>(
    "/api/products"
  );

  if (productError) return <div>error</div>;

  return (
    <div>
      <h1>List of products</h1>

      <ul>
        {products?.map(product => (
          <li>
            <div>{"ean: " + product.ean}</div>
            <div>{product.brand}</div>
            <div>{product.name}</div>
            <div>{formatter.format(product.price / 100)}</div>
          </li>
        ))}
      </ul>
      <Link href="/products/create">
        <button>Create product</button>
      </Link>
      <br />
      <Link href="/home">
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default ProductsPage;
