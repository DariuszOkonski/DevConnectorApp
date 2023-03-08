import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className='Navigation'>
      <Logo />
      <Menu />
    </nav>
  );
}
