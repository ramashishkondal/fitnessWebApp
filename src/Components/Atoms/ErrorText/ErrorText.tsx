import { ErrorTextProps } from './types';

function ErrorText({ text }: ErrorTextProps) {
  return <p className="text-red-400 text-sm p-1">{text}</p>;
}

export default ErrorText;
