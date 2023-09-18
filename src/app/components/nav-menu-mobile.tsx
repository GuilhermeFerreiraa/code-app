'use client'

import { styled } from "styled-components";

import { useEffect, useRef } from 'react';
import Link from "next/link";

interface NavMenuProps {
  isOpen: Boolean,
  toggleMenu: () => void
}

const Container = styled.div`
  transition: all 0.2s ease-in-out;
  padding: 0 12px;
  
  min-height: 20vh;
  width: 80vw;
  
  position: fixed;
  right: 5%;
  top: 10%;

  background: var(--color-gray-50);
  box-shadow: 2px 5px 10px 2px var(--color-gray-200);

  border-radius: 12px;
  border: 1px solid var(--color-gray-100);

  ul {
   display: flex;
   flex-direction: column;

   li:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-200);
  }
  
  li {
    display: flex;
    padding: 12px 0;
    align-items:center;
    justify-content: space-between;
    column-gap: 10px;
    cursor: pointer;
    width: 100%;

    a {
      color: var(--color-gray-500);
      line-height: normal;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-decoration: none;
    }

    &:hover{
      opacity: 0.6;
    }
  } 
  }
`;

export default function NavMenu({ isOpen, toggleMenu }: NavMenuProps) {

  const navBarMenu = useRef<any>(null);

  useEffect(() => {
    const handleClickOutsideNavbar = (event: Event) => {
      if (navBarMenu.current && !navBarMenu.current.contains(event.target)) {
        toggleMenu();
      }
    }

    if (isOpen) {
      document.addEventListener('touchend', handleClickOutsideNavbar);
      document.addEventListener('scroll', handleClickOutsideNavbar);
    }

    return () => {
      document.removeEventListener('touchend', handleClickOutsideNavbar);
      document.removeEventListener('scroll', handleClickOutsideNavbar);
    }
  }, [isOpen, toggleMenu])

  return (
    <Container ref={navBarMenu}>
      <ul>
        <li>
          <Link href="#" onClick={toggleMenu}>
            Início
          </Link>
        </li>
        <li>
          <Link href="#" onClick={toggleMenu}>
            Ver Loja
          </Link>
        </li>
        <li>
          <Link href="#" onClick={toggleMenu}>
            Categorias
          </Link>
        </li>
        <li>
          <Link href="#" onClick={toggleMenu}>
            Minha Conta
          </Link>
        </li>
      </ul>
    </Container>
  )
}