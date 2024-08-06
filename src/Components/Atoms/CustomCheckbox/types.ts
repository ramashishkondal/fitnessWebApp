import { ChangeEventHandler, MouseEventHandler } from 'react';

export type CustomCheckboxProps = {
  checked: HTMLInputElement['checked'];
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
