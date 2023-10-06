'use client'
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import breakpoints from '@/utils/breakpoints';
import { Button, Input } from '../';

const Container = styled.div`
  grid-template-columns: 1fr 0.25fr;
  align-items: center;
  margin: 32px 0;
  display: grid;
  width: 100%;
  gap: 32px;

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}) {
    margin: 24px 0;
    gap: 32px;

    input {
      padding: 14px;
      width: 90%;

      &::placeholder {
        font-size: 14px;
      }
    }

    button {
      padding: 14px;
      font-size: 14px;
    }
  }
`;

export default function DiscountCuopon() {
  const [couponValue, setCouponValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCouponValue(value);
  };

  return (
    <Container>
      <Input
        type='text'
        value={couponValue}
        onChange={handleInputChange}
        placeholder="Cupom de desconto"
      />

      <Button
        aria-label="button-apply-coupon"
        type="submit"
        $variant='outline'
        onSubmit={() => { }}
      >
        Aplicar
      </Button>
    </Container>
  )
}