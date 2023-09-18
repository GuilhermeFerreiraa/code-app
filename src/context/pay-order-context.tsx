'use client';

import React, { createContext, useState } from "react";

export const StepOrder = createContext({
 stepOrder: 0,
 setStepOrder: (value: number | any) => { },
 isLoading: false,
 setIsLoading: (value: boolean | any) => { },
 orderSize: 0,
 setOrderSize: (value: number | any) => { },
})

interface ProviderProps {
 children: React.ReactNode
}

export function PayOrderProvider({ children }: ProviderProps) {
 const [stepOrder, setStepOrder] = useState(0);
 const [isLoading, setIsLoading] = useState(false);
 const [orderSize, setOrderSize] = useState(1);

 const values = {
  stepOrder,
  setStepOrder,
  orderSize,
  setOrderSize,
  isLoading,
  setIsLoading
 }

 return (
  <StepOrder.Provider value={values}>
   {children}
  </StepOrder.Provider>
 )
}