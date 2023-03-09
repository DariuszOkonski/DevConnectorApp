import './InfoText.css';

interface InfoTextProps {
  text: string;
  link: string;
}

export default function InfoText({ text, link }: InfoTextProps) {
  return (
    <div className='InfoText'>
      <p>
        {text} <a href='#'>{link}</a>
      </p>
    </div>
  );
}
