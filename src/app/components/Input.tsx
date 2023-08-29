import styled from 'styled-components';

export default function Input() {

  const Input = styled.input`
    border: 1px solid var(--color-information);
    background: var(--dark-gray-300);
    color: var(--dark-gray-200);
    transition: all .2s ease-in;

    line-height: normal;
    font-style: normal;
    border-radius: 5px;
    padding: 16px 19px;
    font-weight: 500;
    font-size: 16px;
    outline: none;
    width: 100%;

    &:hover{
      border: 1px solid var(--dark-gray-200);
    }

    &:active {
      border: 1px solid var(--dark-gray-400);
    }
    
    &:focus-visible {
      border: 1px solid var(--dark-gray-200);
    }
 `;

  return (
    <Input placeholder="Cupom de desconto" />
  )
}