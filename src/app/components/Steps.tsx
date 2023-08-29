'use client';

import { styled } from 'styled-components';
import { useStepOrder } from '@/hooks/useStepOrder';
import IconCheck from './icon-check';

export default function Steps() {

 const { stepOrder, setStepOrder } = useStepOrder();

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
   background-color: var(--text);
  }
  
  svg {
   fill: var(--text);
  }
  
  .isChecked {
   color: var(--primary);

   svg {
    fill: var(--primary);
   }
   span {
    background-color: var(--primary);
   }   
  }
 `;

 return (
  <Container>
   <div className={stepOrder >= 0 ? "isChecked" : ""}>
    <p>
     Conta
    </p>
    <span />
    <IconCheck />
    <span />
   </div>

   <div className={stepOrder > 0 ? "isChecked" : ""}>
    <p>
     Envio
    </p>
    <span />
    <IconCheck />
    <span />
   </div>

   <p className={stepOrder > 1 ? "isChecked" : ""}>
    Pagamento
   </p>
  </Container>
 )
}