import styled from "styled-components";

export const Container = styled.div`
  padding-right: 4rem;
  display: flex;
  align-items: center;
`;

export const Inner = styled.div`
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 4.5rem;
  line-height: 1;
  margin: 0;
`;

export const SubHeading = styled.h3`
  font-size: 1.5rem;
  line-height: 1;
  margin: 1rem 0 0;
`;

export const Group = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  border: 0;
  padding: 0 2rem;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  color: white;
  background-color: black;
  margin-left: 0.25rem;
  cursor: pointer;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  border: 2px solid black;
  display: block;
  background-color: white;
  border-radius: 0.25rem;
  padding: 0 2rem;
  font-size: 1.5rem;
  margin-right: 0.25rem;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
