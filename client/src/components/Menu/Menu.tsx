import './Menu.css';
import { Link } from 'react-router-dom';
import { endpoints } from '../../config/config.endpoints';
import { configText } from '../../config/config.text';

export default function Menu() {
  return (
    <ul className='Menu'>
      <li>
        <Link to={endpoints.developers()}>{configText.menu.developers}</Link>
      </li>
      <li>
        <Link to={endpoints.register()}>{configText.menu.register}</Link>
      </li>
      <li>
        <Link to={endpoints.login()}>{configText.menu.login}</Link>
      </li>
    </ul>
  );
}
