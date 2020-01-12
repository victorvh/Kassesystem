import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 32rem;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h3`
  font-size: 2rem;
  line-height: 1;
  margin: 0;
`;

export const Products = styled.div`
  flex: 1;
  margin-top: 1rem;
  overflow-y: auto;
`;

export const List = styled.ol`
  display: block;
  margin: 0;
  padding: 0;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  padding: 0 2rem;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  color: white;
  background-color: black;
  margin-top: 2rem;
  cursor: pointer;
`;

export const Product = styled.li`
  height: 4rem;
  width: 100%;
  display: flex;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ProductImage = styled.div`
  width: 4rem;
  height: 4rem;
  display: block;
  background: url(/images/no-photo.png) no-repeat center / cover, #f2f2f2;
  margin-right: 0.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  padding: 0.25rem 0;
  justify-content: space-between;
`;

export const ProductBrand = styled.div`
  flex-shrink: 1;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

export const ProductName = styled.div`
  flex-shrink: 1;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const ProductPrice = styled.div`
  flex-shrink: 1;
  font-size: 0.875rem;
`;
