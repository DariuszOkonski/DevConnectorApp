import './LeadHeader.css';

interface LeadHeaderProps {
  text: string;
  icon: string;
}

export default function LeadHeader({ text, icon }: LeadHeaderProps) {
  return (
    <div className='LeadHeader'>
      <i className={icon}></i>
      <p className='LeadHeader-text'>{text}</p>
    </div>
  );
}
