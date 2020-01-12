import React from "react";

import * as S from "./styles";

export type MainLayoutProps = {
  children?: React.ReactNode;
};

const HomeLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.Container>
      <S.Image src="/images/logo.png" />

      {children}
    </S.Container>
  );
};

export default HomeLayout;
