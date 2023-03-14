import './InfoText.css';
import { Link } from 'react-router-dom';

interface InfoTextProps {
  text: string;
  link: string;
  path: string;
}

export default function InfoText({ text, link, path }: InfoTextProps) {
  return (
    <div className='InfoText'>
      <p>
        {text} <Link to={path}>{link}</Link>
      </p>
    </div>
  );
}
