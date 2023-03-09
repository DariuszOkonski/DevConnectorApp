import './Header.css';

interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <h1 className='Header'>{text}</h1>;
}
