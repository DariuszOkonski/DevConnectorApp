import './Button.css';

interface ButtonProps {
  text: string;
  secondaryButton?: boolean;
  path?: string;
}

export default function Button({ text, secondaryButton, path }: ButtonProps) {
  const className = !secondaryButton ? 'Button' : 'Button Secondary';

  return (
    <a href={path} className={className}>
      {text}
    </a>
  );
}
