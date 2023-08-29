import { FormEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string,
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  outline?: boolean,
  type: "button" | "submit" | "reset",
}

export default function Button({ label, onSubmit, outline, type, onClick }: ButtonProps) {

  const StyledButton = styled.button`
    border-radius: 4px;
    padding: 16px 24px;
    border: 1px solid var(--primary);
    background-color:  ${outline ? 'var(--white)' : 'var(--primary)'};
    transition: all .2s ease-in;
    
    &:hover {
      background-color: ${outline ? 'var(--primary)' : 'var(--white)'};
      cursor: pointer;
      box-shadow: 0px 2px 5px -3px #0000006a;

      span {
        color:  ${outline ? 'var(--white)' : 'var(--primary)'};
      }
    }

    span {
      color:  ${outline ? 'var(--primary)' : 'var(--white)'};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  `;

  return (
    <StyledButton onClick={onClick} onSubmit={onSubmit} type={type}>
      <span>
        {label ? label : "text"}
      </span>
    </StyledButton>
  )
}