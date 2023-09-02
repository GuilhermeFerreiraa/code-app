import { useState } from "react";
import { IconArrow, IconCheck, IconLogout, IconProfile, IconSettings, IconShoppings } from "../icons";
import { styled } from 'styled-components';

export default function AccountInfo() {
  const [showModal, setShowModal] = useState<Boolean>(false);

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
      font-size: 16px;
      margin-right: 16px;
    }
  `;

  const Dropdown = styled.ul`
    box-shadow: 0px 0px 5px -1px #40404040;
    background: var(--color-white);
    transition: all 0.2s ease-in;
    padding: 16px;
    flex-direction: column;
    border-radius: 12px;
    align-items: start;
    justify-content: center;
    position: absolute;
    display: flex;
    width: 180px;
    top: 100%;
    left: 0;
    gap: 12px;
    
    li:not(:last-of-type) {
      border-bottom: 1px solid var(--color-gray-200);
    }
    
    li {
      display: flex;
      align-items:center;
      justify-content: space-between;
      column-gap: 10px;
      cursor: pointer;
      width: 100%;
      padding-bottom: 10px;

        span {
          color: var(--color-gray-500);
          line-height: normal;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
        }

        svg {
          width: 24px;
          height: 24px;
        }

        &:hover{
          opacity: 0.6;
        }
    } 
  `;

  return (
    <Container onClick={() => setShowModal(prevState => !prevState)}>
      <span>
        Conta
      </span>
      <IconArrow />

      {showModal && (
      <Dropdown>
        <li>
          <span>
            Meu perfil
          </span>
          <IconProfile />
        </li>
        <li>
          <span>
            Minhas compras
          </span>
          <IconShoppings />
        </li>
        <li>
          <span>
            Configuração
          </span>
          <IconSettings />
        </li>
        <li>
          <span>
            Sair
          </span>
          <IconLogout />
        </li>
      </Dropdown>
      )}
    </Container>
  )
}