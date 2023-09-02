import { formatCurrency } from '@/utils/formatCurrency';
import styled from 'styled-components';

interface TotalProps {
  tribute: number,
  price: number,
  value: number,
}

const TotalPriceContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  li {
    display: flex; 
    justify-content: space-between;

    p {
      color: var(--color-gray-300);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .free {
      color: var(--color-primary);
    }

    span {
      color: var(--color-gray-500);
      font-size: 18px;
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
`;

export default function TotalPrice(props: TotalProps) {
  return (
    <TotalPriceContainer>
      <li>
        <p>
          Taxa
        </p>
        <span>
          {formatCurrency(props.tribute)}
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
          {props.value > 0 ? formatCurrency((props.price + props.tribute) * props.value) : 'R$ 149,99'}
        </span>
      </li>
    </TotalPriceContainer>
  )
}