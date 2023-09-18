'use client'

import { styled } from "styled-components";

import { IconBurgerMenu, IconCart, IconProfile, Logo } from "./icons";

import { CartInfo } from "../components/Cart";

import { AccountInfo } from "../components/Account";

import NavMenu from "./nav-menu-mobile";

import React, { useState } from 'react'
import breakpoints from "@/utils/breakpoints";

const Navbar = styled.header`
  border-bottom: 1px solid var(--color-gray-100);

  .nav-bar {
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

  @media only screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    .nav-bar {
      display: none;
    }
  }

  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    .nav-bar {
      display: flex;
      padding: 0 24px;
      height: 54px;
    }

    a {
      font-size: 1rem;
    }

    .account-details {
      gap: 24px;

      span {
        font-size: 14px;
      }

      svg {
        width: 14px;
        height: 14px;
      }
    }
  }

`;

const NavList = styled.ul`
gap: 48px;
display: flex;

li {
  a {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    text-decoration: none;
    color: var(--color-gray-300);
  }
}

  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    gap: 24px;

    li { 
      a {
        font-size: 14px;
      }
    }
  }
`;

const NavMenuMobile = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray-200);
  padding: 0 20px;
  box-shadow: 2px 2px 5px 1px var(--color-gray-100);

  a {
    font-size: 18px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    li {
      svg {
        width: 20px;
        height: 20px;
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
        outline: none;
      }

      button:focus {
        outline: none;
      }
      
    }
  }

  @media only screen and (${breakpoints.device.sm}){
    display: none;
  }
`;

export default function Header() {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Navbar>
      <nav className="nav-bar">
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

      <NavMenuMobile>
        <Logo />

        <ul>
          <li>
            <button>
              <IconCart />
            </button>
          </li>
          <li>
            <button>
              <IconProfile />
            </button>
          </li>
          <li onClick={toggleMenu}>
            <button onClick={toggleMenu}>
              <IconBurgerMenu />
            </button>
          </li>
        </ul>
      </NavMenuMobile>

      {showMenu && <NavMenu toggleMenu={toggleMenu} isOpen={showMenu} />}

    </Navbar>
  )
}