'use client'
import { ChangeEvent } from "react";

import styled from 'styled-components';

import { Button, FormGroup, Input } from "../";

import breakpoints from "@/utils/breakpoints";
import Spinner from "../Spinner";
import useAccount, { FormDataProps } from "./useAccount";

const ButtonsContainer = styled.div`
  gap: 32px;
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: end;

  .btn-register {
    padding: 0;
  }

  p {
    color: var(--color-gray-400);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media only screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    display: none;
  }

  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    margin-top: 16px;

    .btn-register {
      font-size: 14px;
    }

    .btn-submit {
      font-size: 14px;
      padding: 14px 24px;
    }
  }
`;

const Form = styled.form`
  display: grid;
  gap: 12px; 
`;

export default function LoginStep() {

  const {
    handleSubmitLogin,
    validationForm,
    isLoading,
    formData,
    setFormData,
    errors
  } = useAccount();


  const handleBlurCapture = (_field: keyof FormDataProps) => {
    validationForm();
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    })
  };

  return (
    <Form onSubmit={handleSubmitLogin}>

      <Spinner isLoading={isLoading} />

      <FormGroup text="E-mail" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="mail@mail.com"
          onChange={handleInputChange}
          onBlurCapture={() => handleBlurCapture('email')}
        />

      </FormGroup>

      <FormGroup text="Senha" error={errors.password}>
        <Input
          type="password"
          name="password"
          value={formData.password}
          placeholder="********"
          onChange={handleInputChange}
          onBlurCapture={() => handleBlurCapture('password')}
        />
      </FormGroup>

      <ButtonsContainer>

        <Button
          className="btn-register"
          type="button"
          $variant="unstyled"
        >
          Registre-se para conta
        </Button>

        <Button
          type="submit"
          $variant="primary"
          className="btn-submit"
        >
          Entrar
        </Button>

      </ButtonsContainer>
    </Form>
  )
}