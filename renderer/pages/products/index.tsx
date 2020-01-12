import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Product from "../../server/entities/Product";

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
          <li>{product.name}</li>
        ))}
      </ul>
      <Link href="/products/create">
        <button>Create product</button>
      </Link>
      <Link href="/home">
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default ProductsPage;
