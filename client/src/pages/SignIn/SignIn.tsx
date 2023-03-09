import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import './SignIn.css';

export default function SignIn() {
  return (
    <div className='SignIn'>
      <Alert />
      <Header text='Sign In' />
    </div>
  );
}
