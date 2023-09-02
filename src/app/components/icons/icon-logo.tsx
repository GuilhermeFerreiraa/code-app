
import { styled } from 'styled-components';

export default function Logo() {

  const IconLogo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-gray-300);
  font-style: normal;
  line-height: normal;
  text-decoration: none;
`;

  return (
    <IconLogo href="/">
      codepay.
    </IconLogo>
  )
} 