'use client'

import Image from 'next/image';

import styled from 'styled-components';

import product_img from '../../../../public/product.png';

import { useStepOrder } from '@/hooks/useStepOrder';
import breakpoints from '@/utils/breakpoints';
import { AddProducts, DiscountCuopon, TotalPrice } from './';

const Container = styled.div`
  display: flex; 
  align-items: start;
  flex-direction: column;
  justify-content: start;

  img {
    height: 100%; 
    max-width: 100%;
    max-height: 162px;
    border-radius: 12px;
    object-fit: contain;
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    margin-top: 42px;
  }

  @media screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    margin-top: 0px;
  }
`;

const ResumeTitle = styled.h2`
  color: var(--color-gray-500);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 26px;
  
  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    margin-bottom: 12px; 
    font-size: 14px;
  }
  
  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    margin-bottom: 26px;
    padding-top: 4px;
    font-size: 14px;
  }
`;

export default function CartProductDetails() {

  const { orderSize } = useStepOrder();

  const tribute = 3.45;
  const price = 149.99;

  return (
    <Container>
      <ResumeTitle>
        Resumo do pedido
      </ResumeTitle>

      <Image
        width={500}
        height={500}
        layout="responsive"
        alt="product-image"
        src={product_img}
      />

      <AddProducts
        price={price}
        product_name='Mouse Gamer Redragon'
      />

      <DiscountCuopon />

      <TotalPrice
        price={price}
        value={orderSize}
        tribute={tribute}
      />

    </Container>
  )
}