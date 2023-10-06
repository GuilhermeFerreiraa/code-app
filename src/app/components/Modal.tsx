'use client'

import styled from 'styled-components'
import { IconClose } from './icons';
import { Button } from '.';
import breakpoints from '@/utils/breakpoints';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  top:0;
  left: 0;
  z-index: 999;
  position: fixed;
  backdrop-filter: blur(3px);
  background-color: #00000080;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  background: var(--color-white);
  justify-content: center;
  min-height: 180px;
  max-height: fit-content;
  flex-direction: column;
  border-radius: 1rem;
  align-items: center;
  overflow: hidden;
  max-width: 420px;
  display: flex;
  padding: 1rem;
  row-gap: 1.2rem;
  
  .title-modal-header {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-gray-100);
    width: 100%;

    button {
     background-color: var(--color-gray-200);
     justify-content: center;
     align-items: center;
     border-radius: 4px;
     cursor: pointer;
     outline: none;
     display: flex;
     border: none;
    }

   p {
    color: var(--color-gray-400);
    font-weight: 500;
    font-size: 1rem;
   }

   svg {
     object-fit: contain;
     height: 24px;
     width: 24px;
   }

  }

  .content-modal-paragraph {
   color: var(--color-gray-400);
   font-weight: 400;
   font-size: 0.95rem;
  }

  .button-modal-footer {
   justify-content: end;
   align-items: center;
   display: flex;
   width: 100%;
   gap: 1rem;
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}) {
   width: 85%;

   .title-modal-header {
    p {
      font-size: 0.85rem;
    }
   }

   .content-modal-paragraph {
    font-size: 0.85rem;
   }
  }
`;

interface ModalProps {
  title: string,
  content: string,
  btn_confirm_label: string,
  btn_confirm_action: () => void,
  btn_cancel_label: string,
  btn_cancel_action: () => void,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Modal(props: ModalProps) {
  return props.isOpen && (
    <Container>
      <StyledModal>
        <div className="title-modal-header">
          <p>{props.title ? props.title : 'Insira um texto'}</p>
          <button role="button" onClick={props.btn_cancel_action}>
            <IconClose />
          </button>
        </div>
        <p className="content-modal-paragraph">
          {props.content ? props.content : 'insira o conteúdo do modal'}
        </p>
        <div className="button-modal-footer">

          <Button role="button" $variant="unstyled" onClick={props.btn_cancel_action}>
            {props.btn_cancel_label ? props.btn_cancel_label : 'Cancelar ação'}
          </Button>

          <Button 
            role="button" 
            $variant="primary" 
            onClick={props.btn_confirm_action}
          >
            {props.btn_confirm_label ? props.btn_confirm_label : 'Confirmar ação'}
          </Button>

        </div>
      </StyledModal>
    </Container>
  )
}