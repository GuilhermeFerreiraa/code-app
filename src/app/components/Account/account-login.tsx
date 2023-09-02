'use client'
import { useState } from "react";

import styled from 'styled-components';

import { Button, Input, FormGroup } from "../";

interface LoginProps {
  setCurrentStep: (value: number) => void
}

interface UserTypes {
  email: '',
  password: '',
}

const ButtonsContainer = styled.div`
  gap: 32px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: end;

  p {
    color: var(--color-gray-400);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Form = styled.form``;

export default function LoginStep(props: LoginProps) {

  const [user, setUser] = useState<UserTypes>();

  return (
    <Form>
      <FormGroup text="E-mail">
        <Input
          type="email"
          value={user?.email}
          placeholder="mail@mail.com"
          onChange={(event: { target: { value: any; }; }) => setUser({ email: event.target.value } as UserTypes)}
        />

      </FormGroup>

      <FormGroup text="Senha">
        <Input
          type="password"
          placeholder="********"
          onChange={(event: { target: { value: any; }; }) => setUser({ password: event.target.value } as UserTypes)}
        />
      </FormGroup>

      <ButtonsContainer>

        <Button
          type="button"
          variant="unstyled"
          onClick={() => { }}
        >
          Registre-se para conta
        </Button>

        <Button
          type="button"
          variant="primary"
          onClick={() => { }}
        >
          Entrar
        </Button>

      </ButtonsContainer>
    </Form>
  )
}