
import { styled } from 'styled-components';

export default function Logo() {

  const Logo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  font-style: normal;
  line-height: normal;
  text-decoration: none;
`;

  return (
    <Logo href="/">
      codepay.
    </Logo>
  )
} 