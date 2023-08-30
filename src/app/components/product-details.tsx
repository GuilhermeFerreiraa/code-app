'use client'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styled from 'styled-components'
import product_img from '../../../public/product.png';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Input from './Input';
import Button from './Button';
import { formatCurrency } from '@/utils/formatCurrency';

export default function ProductDetails() {

  const { value, updateLocalStorage } = useLocalStorage('cart-items');

  const Container = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: start;
  justify-content: center;

  .resume_order_title {
    color: var(--dark-200);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 26px;
   }

   img {
    border-radius: 12px;
    width: 100%;
    height: 100%; 
    object-fit: contain;
  }

   .resume_order_finish_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      display: flex; 
      justify-content: space-between;

      p {
        color: var(--text);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .free {
        color: var(--primary);
      }

      span {
        color: var(--dark-gray-100);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    li:last-of-type {
        p, span {
          font-weight: 600;
        } 
      }
   }
 `;

  const OrderInfos = styled.div`
   margin-top: 19px;
   display: flex;
   align-items: center;
   justify-content: space-between; 
   width: 100%;

   .resume_order_box{
    flex-direction: column;
    align-items: start;
    display: flex;
   
   
     p {
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      color: var(--dark-200);
    }

    span {
     margin: 0; 
     font-size: 20px;
     font-weight: 600;
     font-style: normal;
     line-height: normal;
     color: var(--dark-200);
    }
   }

   div {
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
     font-size: 24px;
     flex-shrink: 0;
     cursor: pointer;

     :disabled{
      cursor: default;
      background-color: var(--primary);
     }
    }
    span {
     margin: 0 14px;
     font-size: 20px;
    }

   }
 `;

  const DiscountCuopon = styled.div`
    margin: 64px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 32px;

    input {
      width: 100%;
    }
 `;

  const tribute = 3.45;
  const price = 149.99;

  return (
    <Container>
      <p className="resume_order_title">Resumo do pedido</p>
      <Image src={product_img} alt="product-image" />


      <OrderInfos>
        <div className="resume_order_box">
          <p className="resume_order_title">
            Mouse Gamer Redragon
          </p>
          <span className="resume_order_price">
            {value > 1 ? formatCurrency(price * value) : 'R$ 149,99'}
          </span>
        </div>

        <div>
          <button
            disabled={value == 0}
            onClick={() => updateLocalStorage(value - 1)}
          >
            -
          </button>
          <span>
            {value ? value : 0}
          </span>
          <button onClick={() => updateLocalStorage(value + 1)}>
            +
          </button>
        </div>
      </OrderInfos>

      <DiscountCuopon>
        <Input type="text" placeholder="Cupom de desconto" />
        <Button
          outline
          label="Aplicar"
          onSubmit={() => { } } type={'button'}
        />
      </DiscountCuopon>

      <ul className="resume_order_finish_box">
        <li>
          <p>
            Taxa
          </p>
          <span>
            {formatCurrency(tribute)}
          </span>
        </li>

        <li>
          <p>
            Envio
          </p>
          <span className="free">
            Grátis
          </span>
        </li>

        <li>
          <p>
            Total
          </p>
          <span>
            {value > 0 ? formatCurrency((price + tribute) * value) : 'R$ 149,99'}
          </span>
        </li>
      </ul>
    </Container>
  )
}