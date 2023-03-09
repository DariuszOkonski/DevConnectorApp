import './InputText.css';

interface InputTextProps {
  placeHolder: string;
  info?: string;
}

export default function InputText({ placeHolder, info }: InputTextProps) {
  return (
    <div className='InputText'>
      <input type='text' placeholder={placeHolder} />
      {info && <small className='InputText__small'>{info}</small>}
    </div>
  );
}
