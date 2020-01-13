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

      <Navigation>
        <Link href="/products">
          <a>Se varekatalog</a>
        </Link>
        <Link href="/purchases">
          <a> Se køb</a>
        </Link>
      </Navigation>
    </HomeLayout>
  );
};

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  > a {
    text-decoration: none;
    color: black;
  }
`;

export default Home;
