'use client'

import { styled } from "styled-components"
import Logo from "./Logo";
import Link from "next/link";
import IconArrow from "./icon-arrow";
import IconCart from "./icon-cart";

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
  height: 80px;
  display: flex; 
  margin: 0 auto;
  align-items: center;
  padding: 0 120px;
  max-width: 1102px;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray-50);
 `;

 const NavList = styled.ul`
  gap: 48px;
  display: flex;

  li {
   a {
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    text-decoration: none;
    color: inherit;
   }
  }
 `;

 const AccountList = styled.div`
  display: flex;
  gap: 56px;

  div {
   gap: 16px;
   display: flex;
   align-items: center;

   span {
    color: var(--text );
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
   }
  }
 `;

 return (
  <Navbar>
   <Logo />

   <NavList>
    {navItem.map((item, indx) => (
     <li key={item.id}>
      <a>
       {item.name}
      </a>
     </li>
    ))}
   </NavList>

   <AccountList>
    <div>
     <span>
      Conta
     </span>
     <IconArrow />
    </div>

    <div>
     <span>
      2 items
     </span>
     <IconCart />
    </div>
   </AccountList>
  </Navbar>
 )
}