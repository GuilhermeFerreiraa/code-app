import { styled } from 'styled-components';
import IconArrow from './icon-arrow';
import IconCart from './icon-cart';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function CartInfo() {

  const { value } = useLocalStorage('cart-items');

  const Container = styled.div`
 align-items: center;
 display: flex;

  span {
   color: var(--text);
   line-height: normal;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   margin-right: 16px;
  }
`;

  return (
    <Container>
      <span>
        {`${value} ${value > 1 ? 'itens' : 'item'}`}
      </span>
      <IconCart />
    </Container>
  )
}