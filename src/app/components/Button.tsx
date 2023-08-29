import styled from 'styled-components';

type ButtonProps = {
  label: string,
  onSubmit: () => void,
}

export default function Button({ label, onSubmit }: ButtonProps) {

  const StyledButton = styled.button`
    border-radius: 4px;
    padding: 16px 24px;
    border: 1px solid var(--primary);
    background-color: var(--white);
    transition: all .2s ease-in;
    
    &:hover {
      background-color: var(--primary);
      cursor: pointer;
      box-shadow: 0px 2px 5px -3px #0000006a;

      span {
        color: var(--white);
      }
    }

    span {
      color: var(--primary);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  `;

  return (
    <StyledButton onClick={onSubmit}>
      <span>
        {label ? label : "text"}
      </span>
    </StyledButton>
  )
}