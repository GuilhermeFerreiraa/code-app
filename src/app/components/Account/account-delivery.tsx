'use client'

import styled from 'styled-components'
import { Input, FormGroup, Select } from '../';
import getStates from '@/services/getStates';
import { useEffect, useState } from 'react';
import breakpoints from '@/utils/breakpoints';
import useAccount from './useAccount';

interface DeliveryStepProps { }

interface StateType {
  id: number,
  nome: string
}

const Container = styled.div`
 display: grid;
 row-gap: 12px;


  .address_number-state_box {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 32px;
    justify-content: center;
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    .address_number-state_box {
      display: grid;
      grid-template-columns:auto auto;
      gap: 2px;

      input {
        width: 70%;
      }

      select {
        font-size: 14px;
      }
    }
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
   color: var(--color-500);
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

export default function DeliveryStep(props: DeliveryStepProps) {
  const { states } = useAccount();

  return (
    <Container>
      {/* address saved */}
      <AddressSaved>
        <p>
          Usar endereço salvo
        </p>

        <Select>
          <option>
            345, Carlos Rodrigo...
          </option>
          <option>
            225, Rodrigo...
          </option>
        </Select>

      </AddressSaved>

      <FormGroup text="Cidade">
        <Input
          type="text"
          placeholder="Ex: São Paulo"
        />
      </FormGroup>

      <FormGroup text="Rua, Bairro">
        <Input
          type="text"
          placeholder="Ex: Av. Paulista, Vila Mariana"
        />
      </FormGroup>

      <div className="address_number-state_box">

        <FormGroup text="Número">
          <Input
            type="text"
            placeholder="Ex: 123"
          />
        </FormGroup>

        <Select text="Estado">
          <option disabled placeholder='Selecionar Estados'>
            Selecionar Estados
          </option>
          {states?.map((item: StateType) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </Select>
      </div>
    </Container>
  )
}