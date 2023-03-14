import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <ul className='Menu'>
      <li>
        <Link to='/developers'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
}
