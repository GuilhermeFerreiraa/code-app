'use client'

import { formatCurrency } from '@/utils/formatCurrency';

import styled from 'styled-components'

interface ProductProps {
  product_name: string,
  quantity: number,
  price: number,
  updateCart: (newValue: unknown) => number | void,
}

const Product = styled.div`
  flex-direction: column;
  align-items: start;
  display: flex;
  gap: 12px;
 
  p {
      font-size: 18px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      color: var(--color-gray-500);
  }

  span {
    margin: 0; 
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    color: var(--color-gray-500);
  }
`;

const EditButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    border-radius: 5px;
    border: 1px solid #F3EFEF;
    background: #F9F9F9;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
    cursor: pointer;

    :disabled{
      cursor: default;
      background-color: var(--color-primary);
    }
  }
  
  span {
   margin: 0 14px;
   font-size: 18px;
  }
`;

const Container = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
`

export default function AddProducts(props: ProductProps) {
  return (
    <Container>
      <Product>
        <p>
          {props.product_name}
        </p>
        <span>
          {props.quantity > 1 ? formatCurrency(props.price * props.quantity) : 'R$ 149,99'}
        </span>
      </Product>

      <EditButtons>
        <button disabled={props.quantity == 0} onClick={() => props.updateCart(props.quantity - 1)}>
          -
        </button>
        <span>
          {props.quantity ? props.quantity : 0}
        </span>
        <button onClick={() => props.updateCart(props.quantity + 1)}>
          +
        </button>
      </EditButtons>
    </Container>
  )
}