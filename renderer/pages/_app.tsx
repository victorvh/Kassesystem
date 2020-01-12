import "isomorphic-unfetch";

import Head from "next/head";
import { ConfigInterface, SWRConfig } from "swr";
import { createGlobalStyle } from "styled-components";
import { CartProvider } from "../context/Cart";

const swrConfig: ConfigInterface = {
  fetcher: (path, options?) => fetch(path, options).then(res => res.json())
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <SWRConfig value={swrConfig}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </SWRConfig>
      <GlobalStyle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 16px;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: sans-serif;
    line-height: 1;
  }

  #__next {
    height: 100%;
  }
`;

export default App;
