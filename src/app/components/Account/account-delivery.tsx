'use client'

import styled from 'styled-components'
import { Input, FormGroup, Select } from '../';

interface DeliveryStepProps { }

const Container = styled.div`
 display: grid;
 row-gap: 12px;


  .address_number-state_box {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 32px;
    justify-content: center;
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

export default function DeliveryStep(props: DeliveryStepProps) {
 return (
  <Container>
   <AddressSaved>

    <p>
     Usar endereço salvo
    </p>

    <Select>
     <option value="" disabled>Estado</option>
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
     placeholder="São Paulo"
     onChange={() => { }}
    />
   </FormGroup>

   <FormGroup text="Rua, Bairro">
    <Input
     type="text"
     placeholder="Av. Paulista, Vila Mariana"
     onChange={() => { }}
    />
   </FormGroup>

   <div className="address_number-state_box">
    <FormGroup text="Número">
     <Input
      type="text"
      placeholder="1565"
      onChange={() => { }}
     />
    </FormGroup>

    <Select text="Estado">
     <option value="" disabled>Estado</option>

     <option value="sp">
      Sao Paulo
     </option>
     <option value="rj">
      Rio de Janeiro
     </option>
     <option value="mg">
      Minas Gerais
     </option>
    </Select>
   </div>
  </Container>
 )
}