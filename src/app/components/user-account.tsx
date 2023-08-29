'use client'

import styled from 'styled-components';
import Button from "./Button";
import Steps from "./Steps";
import Input from './Input';

export default function AccountDetails() {

  const Container = styled.div`
   
   h2 {
     margin-top: 62px;
     font-size: 20px;
     font-weight: 500;
     font-style: normal;
     line-height: normal;
     color: var(--dark-gray-100);
     margin-bottom: 32px;
   }

   .account_register_box, .account_register_box-cancel {
     gap: 32px;
     display: flex;
     margin-top: 40px;
     align-items: center;
     justify-content: flex-end;

     padding-bottom: 40px;
     border-bottom: 1px solid var(--color-information);

      p {
        color: var(--dark-gray-200);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
   }

   .account_register_box-cancel {
    border-bottom: 0;

    p {
     font-size: 16px;
     font-weight: 500;
     font-style: normal;
     line-height: normal;
     color: var(--color-error);
    }
   }
 `;

  const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 21px;
    
   span {
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    color: var(--dark-gray-200);
   }

   & + & {
    margin-top: 21px;
   }
 `;

  return (
    <Container>
      <Steps />
      <h2>
        Detalhes da conta
      </h2>

      <form>
        <FormGroup>
          <span>
            E-mail
          </span>
          <Input type="email" placeholder="mail@mail.com" />
        </FormGroup>

        <FormGroup>
          <span>
            Senha
          </span>
          <Input type="password" placeholder="*******" />
        </FormGroup>

        <div className="account_register_box">
          <p>
            Registre-se para conta
          </p>

          <Button type="submit" onSubmit={(e) => e.preventDefault()} label="Entrar" />
        </div>
      </form>

      <div className="account_register_box-cancel">
        <p>
          Cancelar pedido
        </p>

        <Button type="button" label="Continuar comprando" />
      </div>
    </Container>
  )
}