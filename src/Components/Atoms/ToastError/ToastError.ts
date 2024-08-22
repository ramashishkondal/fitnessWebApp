import { toast, Bounce } from 'react-toastify';

function ToastError(text: string) {
  return toast.error(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });
}

export default ToastError;
