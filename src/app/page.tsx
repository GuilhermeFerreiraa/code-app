'use client'

import styled from 'styled-components';

import ProductDetails from "./components/product-details";
import AccountDetails from "./components/user-account";

export default function Home() {

 const Container = styled.div`
  display: grid;
  column-gap: 100px;
  grid-template-columns: 1fr 1fr;
 `;

 return (
  <main>
   <Container>
    <AccountDetails />
    <ProductDetails />
   </Container>
  </main>
 )
}