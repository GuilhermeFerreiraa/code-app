
import { styled } from 'styled-components';

export default function Logo() {

  const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  font-style: normal;
  line-height: normal;
`;

  return (
    <Logo>
      codepay.
    </Logo>
  )
} 