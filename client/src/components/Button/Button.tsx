import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  secondaryButton?: boolean;
  path: string;
}

export default function Button({ text, secondaryButton, path }: ButtonProps) {
  const className = !secondaryButton ? 'Button' : 'Button Secondary';

  return (
    <Link to={path} className={className}>
      {text}
    </Link>
  );
}
