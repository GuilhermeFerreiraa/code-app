'use client'

import { useStepOrder } from '@/hooks/useStepOrder';
import { formatCurrency } from '@/utils';
import breakpoints from '@/utils/breakpoints';

import styled from 'styled-components'

interface ProductProps {
  product_name: string,
  price: number,
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

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    p {
      font-size: 14px;
    }

    span {
      font-size: 14px;
    }
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

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    button {
      width: 20px;
      height: 20px;
    }
    
    span {
      font-size: 14px;
    } 
  }
`;

const Container = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    margin-top: 12px;
  }
`

export default function AddProducts(props: ProductProps) {

  const { orderSize, setOrderSize } = useStepOrder();

  return (
    <Container>
      <Product>
        <p>
          {props.product_name}
        </p>
        <span>
          {orderSize > 1 ? formatCurrency(props.price * orderSize) : 'R$ 149,99'}
        </span>
      </Product>

      <EditButtons>
        <button
          aria-label="button-plus-add-to-cart"
          role="button" disabled={orderSize == 0}
          onClick={() => setOrderSize((prev: number) => prev - 1)}
        >
          -
        </button>
        <span>
          {orderSize ? orderSize : 0}
        </span>
        <button
          role="button"
          aria-label="button-plus-add-to-cart"
          onClick={() => setOrderSize((prev: number) => prev + 1)}
        >
          +
        </button>
      </EditButtons>
    </Container>
  )
}