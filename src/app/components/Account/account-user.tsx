"use client"

import styled from "styled-components";

import { Steps } from "../Cart";

import { Button } from "../";

import breakpoints from "@/utils/breakpoints";
import { DeliveryStep, LoginStep, PaymentStep } from "../Account";
import Modal from "../Modal";
import useAccount from "./useAccount";

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

  @media only screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    h2 {
      margin: 0 0 24px 0;
    }
  }

  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    h2 {
      margin-top: 32px;
      font-size: 1.2rem;
    }
  }
`;

const LeaveCartContainer = styled.div`
  display: flex; 
  padding-top: 40px;
  margin-top: 40px;
  border-bottom: 0;
  column-gap: 32px;
  align-items: center;
  justify-content: end;
  border-top: 1px solid var(--color-gray-200);

  p {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    color: var(--color-error);
  }

  .btn-cancel-order {
    padding: 0;
    font-weight: 500;
    color: var(--color-error);
  }
  
  
  button:disabled {
    opacity: 0.5;
    color: var(--color-error);
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    flex-direction: column-reverse;
    padding-top: 0px;

    border-top: 1px solid var(--color-gray-200);
    display: flex;
    gap: 24px;
    padding-top: 40px;

    button {
      min-width: 100%;
      font-size: 14px;
    }

    .btn-cancel-order {
      background: #D1402C1A;
      font-weight: 500;
      padding: 14px 24px !important;
      color: var(--color-error);
    }
  }

  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    flex-direction: row;
    padding-top: 24px;
    margin-top: 24px;

    border-top: 1px solid var(--color-gray-200);
    display: flex;
    gap: 14px;

    .btn-cancel-order {
      background: transparent;
    }

    button {
      padding: 14px 24px;
      min-width: fit-content;
    }
  }
`;

export default function AccountDetails() {

  const {
    showTitle,
    stepOrder,
    setStepOrder,
    isOpenModal,
    setIsOpenModal,
  } = useAccount();

  const handleContinueCheckOut = () => {
    if (stepOrder == 1) {
      setStepOrder(2);
    }
  }

  return (
    <Container>
      <Steps currentStep={stepOrder} />
      <h2>
        {showTitle()}
      </h2>

      {stepOrder == 0 && <LoginStep />}

      {stepOrder == 1 && <DeliveryStep />}

      {stepOrder == 2 && <PaymentStep />}

      <LeaveCartContainer>
        <Button
          type="button"
          className="btn-cancel-order"
          variant="unstyled"
          onClick={() => setIsOpenModal((prevState: any) => !prevState)}
        >
          Cancelar pedido
        </Button>

        <Button onClick={handleContinueCheckOut} type="submit" variant="primary">
          Continuar comprando
        </Button>
      </LeaveCartContainer>

      <Modal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        title="Tem certeza que deseja cancelar o pedido?"
        content="Ao cancelar o pedido é necessário realizar todo o processo de busca pelo produto novamente! Sinta-se a vontade para continuar a ação."
        btn_cancel_action={() => setIsOpenModal(prevState => !prevState)}
        btn_confirm_action={() => {
          setStepOrder(0)
          setIsOpenModal(prevState => !prevState);
        }}
        btn_cancel_label="Não, cancelar"
        btn_confirm_label="Sim, cancelar"
      />
    </Container>
  )
}