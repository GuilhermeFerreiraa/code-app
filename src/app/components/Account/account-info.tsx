import { useState } from "react";
import styled from 'styled-components';
import { IconArrow } from "../icons";
import ModalAccount from "../modal-account";

const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  cursor: pointer;

  span {
    color: var(--color-gray-300);
    line-height: normal;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-right: 14px;
  }

  
`;

export default function AccountInfo() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleAccountInfo = () => {
    setShowModal(!showModal);
  };

  return (
    <Container onClick={toggleAccountInfo}>
      <span>
        Conta
      </span>
      <IconArrow />

      {showModal && (
        <ModalAccount
          isOpen={showModal}
          toggleMenu={toggleAccountInfo}
        />
      )}
    </Container>
  )
}