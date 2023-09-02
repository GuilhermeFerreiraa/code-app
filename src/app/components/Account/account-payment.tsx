'use client'

import styled from 'styled-components'
import { IconSeparetor } from '../icons';

import { Input, FormGroup, Select } from '../';

const Container = styled.div`
  display: grid;
  row-gap: 12px;

  .address_number-state_box {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 32px;
    justify-content: center;
  }

  .expiration-card_fields-inputs {
   align-items: end;
   display: flex;
   gap: 6px;
   width: 100%;
  }
  
  
  .expiration-card_fields {
   align-items: end;
   display: flex;
   gap: 6px;

   input {
    max-width: 90px;
   }

}
`;

const AddressSaved = styled.div`
  grid-template-columns: auto 1fr;
  align-items: center;
  display: grid;
  gap: 42px;

  p {
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   color: var(--color-500);
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

      <div className="expiration-card_fields-inputs">

        <div className="expiration-card_fields">
          <FormGroup text="Expiração">
            <Input
              onChange={() => { }}
              value="03"
            />
          </FormGroup>
          <IconSeparetor />
          <Input onChange={() => { }} value="24" />
        </div>

        <FormGroup text="CVC">
          <Input
            type="text"
            value="123"
            placeholder="1565"
            onChange={() => { }}
          />
        </FormGroup>
      </div>
    </Container>
  )
}