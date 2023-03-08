import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  secondaryButton?: boolean;
}

export default function Button({ text, secondaryButton }: ButtonProps) {
  const className = !secondaryButton ? 'Button' : 'Button Secondary';

  return <button className={className}>{text}</button>;
}
