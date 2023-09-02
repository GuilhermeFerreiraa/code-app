import { useLocalStorage } from '@/hooks/useLocalStorage';
import { styled } from 'styled-components';
import { IconCart } from '../icons';

export default function CartInfo() {

  const { value } = useLocalStorage('cart-items');

  const Container = styled.div`
    align-items: center;
    display: flex;

  span {
    color: var(--color-gray-300);
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