import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from 'react';

export type CustomTextInputProps = {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  maxLength?: number;
};
