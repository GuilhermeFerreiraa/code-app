'use client'
import styled from 'styled-components';
import { SetStateAction, useState } from 'react';

import { Button, Input } from '../';

interface DiscountProps { }

const Container = styled.div`
  grid-template-columns: 1fr 0.25fr;
  align-items: center;
  margin: 60px 0;
  display: grid;
  width: 100%;
  gap: 32px;
`;

export default function DiscountCuopon(props: DiscountProps) {
  const [couponValue, setCouponValue] = useState('');

  return (
    <Container>
      <Input
        type='text'
        value={couponValue}
        onChange={(event: { target: { value: SetStateAction<string>; }; }) => setCouponValue(event.target.value)}
        placeholder="Cupom de desconto"
      />

      <Button
        type="submit"
        variant='outline'
        onSubmit={() => { }}
      >
        Aplicar
      </Button>
    </Container>
  )
}