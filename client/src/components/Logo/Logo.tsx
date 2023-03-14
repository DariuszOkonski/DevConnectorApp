import { configText } from '../../config/config.text';
import { Link } from 'react-router-dom';
import './Logo.css';
import { endpoints } from '../../config/config.endpoints';

export default function Logo() {
  return (
    <div className='Logo'>
      <Link to={endpoints.home()} className='Logo__link'>
        <i className={configText.icons.code}></i>
        {configText.logo.title}
      </Link>
    </div>
  );
}
