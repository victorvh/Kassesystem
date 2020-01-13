import styled from "styled-components";

export const Products = styled.div`
  flex: 1;
  margin-top: 1rem;
  overflow-y: auto;
`;

export const List = styled.ol`
  display: block;
  margin: 0;
  padding: 1rem;
`;

export const Product = styled.li`
  height: 2;
  width: 100%;
  display: flex;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;
