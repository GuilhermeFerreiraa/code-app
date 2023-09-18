'use client'

import breakpoints from '@/utils/breakpoints';
import React, { ReactNode } from 'react';
import styled from 'styled-components'

interface FormProps {
  children: ReactNode,
  text?: string,
  error?: string | boolean | undefined,
}

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  .title {
      padding-bottom: 12px;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      padding-bottom: 11px;
      color: var(--color-gray-400);
  }

  .error {
    display: flex;
    flex-direction: column;

    small {
    margin-top: 12px; 
    color: var(--color-error);
  }

  input {
    color: var(--color-error);
    border: 1px solid var(--color-error);
    box-shadow: 0px 0px 5px -3px var(--color-error);
    
    &::placeholder {
      color: var(--color-error);
    }
  }
  }

  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}) {
    .title {
      font-size: 14px;
    } 

    input {
      padding: 14px;
      font-size: 14px;
    }
  }
`;

const FormGroup = (props: FormProps) => {
  return (
    <StyledFormGroup>
      {props.text && <small className="title">{props.text}</small>}


      {!props.error ? props.children : (
        <div className="error">
          {props.children}
          <small>
            {props.error}
          </small>
        </div>
      )}
    </StyledFormGroup>
  )
}

export default FormGroup; 