import { IconProfile } from '@/app/components/icons';
import { ToastTypes } from '@/types/toastTypes';
import toast, { 
 
} from 'react-hot-toast';

export default function showToast(message: string, toastType: ToastTypes) {

 return toast(message, {
  duration: 4000,
  position: 'top-center',

  // Styling
  style: {
   background: toastType === ToastTypes.SUCCESS ? "var(--color-primary)" : toastType === ToastTypes.INFO ? 'var(--color-warning)' : 'var(--color-error)',
   color: 'var(--color-white)',
   textAlign: 'center',
  },

  // Change colors of success/error/loading icon
  iconTheme: {
   primary: "var(--color-primary)",
   secondary: 'var(--color-error)',
  },

  // Aria
  ariaProps: {
   role: 'status',
   'aria-live': 'polite',
  },
 });
}