import { useState } from 'react'

export function useLocalStorage<T>(item: string) {
 const storedValue = localStorage.getItem(item);

 const [value, setValue] = useState(() => {
  try {
   return JSON.parse(storedValue ?? '');
  } catch (error) {
   console.error("JSON parsing error:", error);
   return null;
  }
 });

 const updateLocalStorage = (newValue: T) => {
  setValue(newValue);
  localStorage.setItem(item, JSON.stringify(newValue));
 };

 return { value, updateLocalStorage };
}

