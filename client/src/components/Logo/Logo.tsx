import { configText } from '../../config/config.text';
import './Logo.css';

export default function Logo() {
  return (
    <div className='Logo'>
      <a href='#' className='Logo__link'>
        <i className={configText.icons.code}></i>
        {configText.logo.title}
      </a>
    </div>
  );
}
