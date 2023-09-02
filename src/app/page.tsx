'use client'

import styled from 'styled-components';

import { CartProductDetails } from "./components/Cart";
import { AccountDetails } from "./components/Account";

export default function Home() {

 const Container = styled.main`
  padding: 130px 0 64px 0;
  max-width: 1102px;
  margin: 0 auto;

  display: grid;
  column-gap: 100px;
  grid-template-columns: 1fr 1fr;
`;

 return (
  <Container>
   <AccountDetails />
   <CartProductDetails />
  </Container>
 )
}