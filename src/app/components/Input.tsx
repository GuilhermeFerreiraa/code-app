import styled from 'styled-components';

export const Input = styled.input` 
      border: 1px solid var(--color-gray-200);
      background: var(--color-gray-50);
      color: var(--color-gray-500);
      transition: all .2s ease-in;
      line-height: normal;
      font-style: normal;
      border-radius: 5px;
      padding: 16px 19px;
      font-weight: 500;
      font-size: 16px;
      max-height: 59px;
      outline: none;

      &:hover{
        border: 1px solid var(--color-gray-100);
      }

      &:active {
        border: 1px solid var(--color-gray-100);
      }
      
      &:focus-visible {
        box-shadow: 0px 0px 10px -3px #00000025;
        border: 1px solid var(--color-gray-100);
      }
      
      &::placeholder{
        color: var(--color-gray-400);
      }
 `;