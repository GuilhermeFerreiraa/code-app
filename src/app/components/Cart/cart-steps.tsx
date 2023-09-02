'use client';

import { styled } from 'styled-components';
import { IconCheck } from '../icons';

interface StepProps {
  currentStep: number,
}

const Container = styled.div`
  display: flex;
  align-items:center;
  gap: 18px;

  div {
   align-items: center;
   display: flex;
   gap: 18px;
  }

  p {
   font-size: 20px;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
  }

  span {
   width: 24px;
   height: 1px;
   background-color: var(--color-gray-300);
  }
  
  svg {
   fill: var(--color-gray-300);
  }
  
  .isChecked {
   color: var(--color-primary);

   svg {
    fill: var(--color-primary);
   }
   span {
    background-color: var(--color-primary);
   }   
  }
`;

export default function Steps(props: StepProps) {

  return (
    <Container>
      <div className={props.currentStep >= 0 ? "isChecked" : ""}>
        <p>
          Conta
        </p>
        <span />
        <IconCheck />
        <span />
      </div>

      <div className={props.currentStep > 0 ? "isChecked" : ""}>
        <p>
          Envio
        </p>
        <span />
        <IconCheck />
        <span />
      </div>

      <p className={props.currentStep > 1 ? "isChecked" : ""}>
        Pagamento
      </p>
    </Container>
  )
}