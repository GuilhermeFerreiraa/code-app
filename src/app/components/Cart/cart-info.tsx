import { useStepOrder } from '@/hooks/useStepOrder';
import styled from 'styled-components';
import { IconCart } from '../icons';

const Container = styled.div`
  align-items: center;
  display: flex;

  span {
    color: var(--color-gray-300);
    line-height: normal;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-right: 14px;
  }
`;

export default function CartInfo() {

  const { orderSize } = useStepOrder();

  return (
    <Container>
      <span>
        {`${orderSize} ${orderSize > 1 ? 'itens' : 'item'}`}
      </span>
      <IconCart />
    </Container>
  )
}