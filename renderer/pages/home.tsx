import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Scan from "../components/Scan";
import Cart from "../components/Cart";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <Scan />
      <Cart />

      {/* <Link href="/products/create">Create</Link> */}
    </HomeLayout>
  );
};

export default Home;
