'use client'

import styled from 'styled-components';

import { AccountDetails } from "./components/Account";
import { CartProductDetails } from "./components/Cart";
import breakpoints from '@/utils/breakpoints';

const Container = styled.main`
  padding: 40px 0 64px 0;
  max-width: 1102px;
  margin: 0 auto;

  display: grid;
  column-gap: 100px;
  grid-template-columns: 1fr 1fr;

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    padding: 24px 12px 42px 12px;
    grid-template-columns: 1fr;
    justify-content: center;
  }
  
  @media screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    grid-template-columns: 1fr 1fr;
    padding: 24px 20px;
    column-gap: 34px;
  }
`;

export default function Home() {
  return (
    <Container>
      <AccountDetails />
      <CartProductDetails />
    </Container>
  )
}