import { ReactNode } from 'react';

export type CustomModalProps = {
  isModalShown: boolean;
  closeModal: () => void;
  children: ReactNode;
};
