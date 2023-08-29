import IconArrow from "./icon-arrow";
import { styled } from 'styled-components';

export default function AccountInfo() {

 const Container = styled.div`
 align-items: center;
 display: flex;

  span {
   color: var(--text);
   line-height: normal;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   margin-right: 16px;
  }
`;

 return (
  <Container>
   <span>
    Conta
   </span>
   <IconArrow />
  </Container>
 )
}