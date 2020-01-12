import React from "react";
import CreateProductForm from "../../components/CreateProductForm";
import Link from "next/link";

const CreateProductsPage = () => {
  return (
    <div>
      <h1>Create your product</h1>
      <CreateProductForm />
    </div>
  );
};

export default CreateProductsPage;
