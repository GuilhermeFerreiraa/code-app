'use client';

import { styled } from 'styled-components';
import { IconCheck } from '../icons';
import breakpoints from '@/utils/breakpoints';

interface StepProps {
  currentStep: number,
}

const Container = styled.div`
  gap: 18px;
  display: flex;
  align-items:center;

  div {
    gap: 18px;
    display: flex;
    align-items: center;
  }

  p {
   font-size: 20px;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
  }

  span {
   width: 24px;
   height: 0.5px;
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

  @media only screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    display: none;
  }

  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    display: flex;

    div {
      gap: 10px;
    }

    p {
      font-size: 14px;
    }

    span {
      width: 14px;
    }

    svg {
      width: 12px;
    }
  }
`;

export default function Steps({ currentStep }: StepProps) {

  return (
    <Container>
      <div className={currentStep >= 0 ? "isChecked" : ""}>
        <p>
          Conta
        </p>
        <span />
        <IconCheck />
        <span />
      </div>

      <div className={currentStep > 0 ? "isChecked" : ""}>
        <p>
          Envio
        </p>
        <span />
        <IconCheck />
        <span />
      </div>

      <p className={currentStep > 1 ? "isChecked" : ""}>
        Pagamento
      </p>
    </Container>
  )
}