
import styled from 'styled-components';

const IconLogo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-gray-300);
  font-style: normal;
  line-height: normal;
  text-decoration: none;
`;

export default function Logo() {
  return (
    <IconLogo href="/">
      codepay.
    </IconLogo>
  )
} 