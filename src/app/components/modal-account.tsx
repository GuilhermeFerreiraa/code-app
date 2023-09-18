'use client'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { IconLogout, IconProfile, IconSettings, IconShoppings } from './icons';

interface MobileMenuProps {
 isOpen: boolean;
 toggleMenu: () => void;
}

const Container = styled.ul`
  box-shadow: 0px 0px 5px -1px #40404040;
  background: var(--color-white);
  transition: all 0.2s ease-in;
  padding: 14px;
  flex-direction: column;
  border-radius: 12px;
  align-items: start;
  justify-content: center;
  position: absolute;
  display: flex;
  width: 180px;
  top: 200%;
  left: 0;
  gap: 12px;
  
  li:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-200);
    padding-bottom: 10px;
  }
  
  li {
    display: flex;
    align-items:center;
    justify-content: space-between;
    column-gap: 10px;
    cursor: pointer;
    width: 100%;

      span {
        color: var(--color-gray-500);
        line-height: normal;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
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

export default function ModalAccount({ isOpen, toggleMenu }: MobileMenuProps) {
 const menuRef = useRef<any>(null);

 useEffect(() => {
  const handleClickOutside = (event: Event) => {
   if (menuRef.current && !menuRef.current.contains(event.target)) {
    toggleMenu();
   }
  };

  if (isOpen) {
   document.addEventListener('click', handleClickOutside);
  }

  return () => {
   document.removeEventListener('click', handleClickOutside);
  };
 }, [isOpen, toggleMenu]);

 return (
  <Container ref={menuRef}>
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
  </Container>
 )
}