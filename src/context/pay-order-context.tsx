'use client';

import React, { createContext, useState } from "react";

export const StepOrder = createContext({
 stepOrder: 0,
 setStepOrder: (value: number) => { },
})

type ProviderProps = {
 children: React.ReactNode
}

export function PayOrderProvider({ children }: ProviderProps) {
 const [stepOrder, setStepOrder] = useState(0);

 return (
  <StepOrder.Provider value={{ stepOrder, setStepOrder }}>
   {children}
  </StepOrder.Provider>
 )
}