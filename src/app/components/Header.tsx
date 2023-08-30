'use client'

import { styled } from "styled-components";
import Logo from "./Logo";
import CartInfo from "./cart-info";
import AccountInfo from "./account-info";

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
  border-bottom: 1px solid var(--color-gray-50);
  
  
  .container_header_box {
    height: 80px;
    display: flex; 
    margin: 0 auto;
    max-width: 1102px;
    align-items: center;
    justify-content: space-between;
  }

  .account-details {
   display: flex;
   gap: 56px;
  }

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

 return (
  <Navbar>
   <div className="container_header_box">
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

    <div className="account-details">
     <AccountInfo />

     <CartInfo />
    </div>
   </div>

  </Navbar>
 )
}