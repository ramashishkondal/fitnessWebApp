import { HeadingTextProps } from './types';

function HeadingText({ text }: Readonly<HeadingTextProps>) {
  return <p className="text-sm font-medium">{text}</p>;
}

export default HeadingText;
