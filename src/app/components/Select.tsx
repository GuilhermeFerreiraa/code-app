'use client'

import styled from 'styled-components'
import { IconArrow } from './icons';

interface SelectProps {
  children: React.ReactNode,
  text?: string,
}

const SelectStyled = styled.select`
  width: 100%;
  height: 52px;
  border: 1px solid var(--color-gray-200);
  background: var(--color-gray-50);
  font-size: 16px;
  appearance: none;
  transition: all 0.2s ease-in;
  color: var(--color-gray-500);
  border-radius: 5px;
  padding: 16px 19px;
  font-weight: 500;
  outline: none;
  margin-top: 11px;

 &[disabled] {
  opacity: 0.5;
 }
`;

const Container = styled.div`
  position: relative;

  .icon-arrow {
    position: absolute;
    right: 10px;
    right: 10px;
    top: 45%;
    transform: translateX(-50%);
  
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Title = styled.small`
  color: var(--color-gray-400);
  line-height: normal;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 11px;
`;

export default function Select(props: SelectProps) {
  return (
    <div>
      {props.text && <Title>{props.text}</Title>}
      <Container>
        <SelectStyled>
          {props.children}
        </SelectStyled>
        <div className="icon-arrow">
          <IconArrow />
        </div>
      </Container>
    </div>
  )
}