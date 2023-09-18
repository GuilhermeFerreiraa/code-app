'use client'

import styled from 'styled-components'

import { Input, FormGroup, Select } from '../';
import breakpoints from '@/utils/breakpoints';

const Container = styled.div`
  display: grid;
  row-gap: 12px;

  .address_number-state_box {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 32px;
    justify-content: center;
  }

  .validation-box {
    overflow-x: hidden;
    min-width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: center;

    p {
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      color: var(--color-gray-400);
    }

    .validation-info {
      display: grid;
      justify-content: space-evenly;
      max-width: 100vw;
      gap: 3px;
      justify-content: start;
      grid-template-columns: 40% 10% 40%;
      margin-top: 10px;
      justify-items: auto;
      align-items: center;

      input {
        text-align: center;
        font-size: 14px;
        padding-left: 4px;
        padding-right: 4px;
      }
    }
  }

  .divider {
    font-size: 32px;
    text-align: center;
    color: var(--color-gray-400);
  }
`;

const AddressSaved = styled.div`
  grid-template-columns: auto 1fr;
  align-items: center;
  display: grid;
  gap: 42px;

  p {
   font-size: 14px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   color: var(--color-gray-500);
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    grid-template-columns: 1fr;
    gap: 6px;

    p {
      font-size: 14px;
    }
  }
`;

export default function PaymentStep() {
  return (
    <Container>

      <AddressSaved>

        <p>
          Usar cartão salvo
        </p>

        <Select>
          <option value="">Escolher cartão</option>
          <option>
            Iuri Souza Silva, 736327...
          </option>
        </Select>

      </AddressSaved>

      <FormGroup text="Nome no cartão">
        <Input
          type="text"
          value="Iuri Souza Silva"
          placeholder="1565"
          onChange={() => { }}
        />
      </FormGroup>

      <FormGroup text="Número do cartão">
        <Input
          type="text"
          value="123- 456 - 789 / 0"
          placeholder="1565"
          onChange={() => { }}
        />
      </FormGroup>

      <div className="validation-box">
        <div>

          <p>
            Expiração
          </p>

          <div className="validation-info">
            <Input placeholder="04" />

            <span className="divider">
              /
            </span>

            <Input placeholder="2024" />

          </div>
        </div>


        <FormGroup text="CVC">
          <Input placeholder="123" />
        </FormGroup>
      </div>

    </Container>
  )
}