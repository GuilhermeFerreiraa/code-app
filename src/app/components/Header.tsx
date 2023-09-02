'use client'

import { styled } from "styled-components";

import { Logo } from "./icons";

import { CartInfo } from "../components/Cart";

import { AccountInfo } from "../components/Account";

export default function Header() {

  const navItem = [
    {
      id: 0,
      name: 'Início',
      url: '/',
    },
    {
      id: 1,
      name: 'Comprar',
      url: '/',
    },
    {
      id: 2,
      name: 'Contato',
      url: '/',
    },
    {
      id: 3,
      name: 'Ajuda',
      url: '/',
    },
  ];

  const Navbar = styled.header`
  border-bottom: 1px solid var(--color-gray-100);
  
  nav {
    height: 80px;
    display: flex; 
    margin: 0 auto;
    max-width: 1102px;
    align-items: center;
    justify-content: space-between;
  }

  .account-details {
   display: flex;
   cursor: pointer;
   gap: 56px;
  }
`;

  const NavList = styled.ul`
  gap: 48px;
  display: flex;

  li {
    a {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      text-decoration: none;
      color: var(--color-gray-300);
    }
  }
 `;

  return (
    <Navbar>
      <nav>
        <Logo />

        <NavList>
          {navItem.map((item) => (
            <li key={item.id}>
              <a>
                {item.name}
              </a>
            </li>
          ))}
        </NavList>

        <div className="account-details">
          <AccountInfo />

          <CartInfo />
        </div>
      </nav>

    </Navbar>
  )
}