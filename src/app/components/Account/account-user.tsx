"use client"

import styled from "styled-components"
import { useStepOrder } from "@/hooks/useStepOrder";

import { Steps } from "../Cart";

import { Button } from "../";

import { DeliveryStep, PaymentStep, LoginStep } from "../Account";

const Container = styled.div`
  display: grid;

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-top: 62px;
    font-style: normal;
    margin-bottom: 32px;
    line-height: normal;
    color: var(--color-gray-500);
  }
`;

const LeaveCartContainer = styled.div`

  padding-top: 40px;
  border-top: 1px solid var(--color-gray-200);

  display: flex; 
  margin-top: 40px;
  border-bottom: 0;
  align-items: center;
  justify-content: end;
  column-gap: 32px;

  p {
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    color: var(--color-error);
  }
`;

export default function AccountDetails() {
  const { stepOrder, setStepOrder } = useStepOrder();

  return (
    <Container>
      <Steps currentStep={stepOrder} />
      <h2>
        {
          stepOrder == 0 ? "Detalhes da conta" :
            stepOrder == 1 ? "Detalhes do envio" :
              stepOrder == 2 && "Detalhes do pagamento"
        }
      </h2>

      {stepOrder == 0 && <LoginStep setCurrentStep={setStepOrder} />}

      {stepOrder == 1 && <DeliveryStep />}

      {stepOrder == 2 && <PaymentStep />}

      <LeaveCartContainer>
        <Button
          type="button"
          variant="unstyled"
          onSubmit={() => setStepOrder(0)}
        >
          Cancelar pedido
        </Button>

        <Button
          type="button"
          variant="primary"
          onClick={() => {
            setStepOrder((prevState: number) => prevState == 0 ? 1 : prevState == 1 ? 2 : null);
          }}
        >
          Continuar comprando
        </Button>
      </LeaveCartContainer>
    </Container>
  )
}