'use client'
/* eslint-disable @next/next/no-img-element */
import { useLocalStorage } from '@/hooks/useLocalStorage';

import Image from 'next/image';

import styled from 'styled-components';

import product_img from '../../../../public/product.png';

import { TotalPrice, AddProducts, DiscountCuopon } from './';

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: start;
  justify-content: start ;

  img {
    border-radius: 12px;
    max-width: 100%;
    height: 100%; 
    
    object-fit: cover;
    max-height: 162px;
  }
`;

const ResumeTitle = styled.h2`
  color: var(--color-gray-500);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 26px;
`;

export default function CartProductDetails() {

  const { value, updateLocalStorage } = useLocalStorage('cart-items');

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
        placeholder="empty"
        alt="product-image"
        src={product_img}
      />

      <AddProducts
        price={price}
        quantity={value}
        updateCart={updateLocalStorage}
        product_name='Mouse Gamer Redragon'
      />

      <DiscountCuopon />

      <TotalPrice price={price} value={value} tribute={tribute} />

    </Container>
  )
}