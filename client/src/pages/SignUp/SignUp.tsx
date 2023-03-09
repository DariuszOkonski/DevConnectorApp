import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import LeadHeader from '../../components/LeadHeader/LeadHeader';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { configText } from '../../config/config.text';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className='SignUp'>
      <Alert />
      <Header text={configText.header.signUp} />
      <LeadHeader
        text={configText.leadText.signUp}
        icon={configText.icons.user}
      />

      <SignUpForm />
    </div>
  );
}
