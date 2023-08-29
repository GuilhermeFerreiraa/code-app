import { StepOrder } from "@/context/pay-order-context";
import { useContext } from "react";

export function useStepOrder() {
 return useContext(StepOrder);
} 