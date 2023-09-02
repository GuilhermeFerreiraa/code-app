'use client'

import React, { ReactNode } from 'react';
import styled from 'styled-components'

interface FormProps {
  children: ReactNode,
  text: string,
  error?: string | boolean | undefined,
}

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  .title {
      padding-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      padding-bottom: 11px;
      color: var(--color-gray-400);
    }

  .error {
   margin-top: 12px; 
   color: var(--color-error);
  }
`;

const FormGroup = (props: FormProps) => {
  return (
    <StyledFormGroup>
      {props.text && <small className="title">{props.text}</small>}
      {props.children}
      {props.error && <small className="error">{props.error}</small>}
    </StyledFormGroup>
  )
}

export default FormGroup; 