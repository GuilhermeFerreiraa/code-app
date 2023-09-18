'use client'

import { useStepOrder } from "@/hooks/useStepOrder";
import showToast from "@/hooks/useToast";
import getStates from "@/services/getStates";
import { ToastTypes } from "@/types/toastTypes";
import { isValidEmail } from "@/utils";
import { FormEvent, useEffect, useState } from "react";

interface FormErrors {
 email?: string,
 password?: string,
}

export interface FormDataProps {
 email: string,
 password: string,
}

const initialFormData: FormDataProps = {
 email: '',
 password: ''
}

export default function useAccount() {
 const { stepOrder, setStepOrder, isLoading, setIsLoading } = useStepOrder();
 const [isOpenModal, setIsOpenModal] = useState(false);

 const [formData, setFormData] = useState<FormDataProps>(initialFormData);
 const [errors, setErrors] = useState<FormErrors>({});

 const [states, setStates] = useState<[]>()

 const showTitle = () => {
  let title = '';

  if (stepOrder == 0) {
   title = "Detalhes da conta"
  }
  else if (stepOrder == 1) {
   title = "Detalhes do envio"
  }
  else if (stepOrder == 2) {
   title = "Detalhes do pagamento"
  }

  return title;
 }

 const handleSubmitLogin = (e: FormEvent<HTMLFormElement> | any) => {
  e.preventDefault();

  if (!validationForm()) {
   return showToast(`Erro na validação dos dados`, ToastTypes.ERROR);
  }

  setIsLoading((prevState: boolean) => !prevState);

  validationForm();

  setTimeout(() => {
   // simulation (req,res)
   showToast('🔒 Login feito com sucesso!', ToastTypes.SUCCESS);

   setStepOrder((prevState: number) => prevState + 1);

   setIsLoading((prevState: any) => !prevState);
  }, 1500);
 }

 const validationForm = () => {
  const newErrors: FormErrors = {};

  if (!formData.email.trim()) {
   newErrors.email = 'E-mail é obrigatório'
  } else if (!isValidEmail(formData.email)) {
   newErrors.email = 'E-mail inválido';
  }

  if (!formData.password.trim()) {
   newErrors.password = 'Senha é obrigatória'
  } else if (formData.password.length < 8) {
   newErrors.password = 'Senha inválida, deve conter ao menos 8 caracteres'
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0 ? true : false;
 };

 useEffect(() => {
  (async () => {
   const data = await getStates();
   setStates(data);
  })()
 }, []);


 return {
  showTitle,
  handleSubmitLogin,
  validationForm,
  isLoading,
  setIsLoading,
  stepOrder,
  setStepOrder,
  formData,
  setFormData,
  errors,
  setErrors,
  isOpenModal,
  setIsOpenModal,
  states,
 }
}
