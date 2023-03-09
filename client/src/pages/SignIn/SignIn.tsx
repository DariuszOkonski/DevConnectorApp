import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import LeadHeader from '../../components/LeadHeader/LeadHeader';
import { configText } from '../../config/config.text';
import './SignIn.css';

export default function SignIn() {
  return (
    <div className='SignIn'>
      <Alert />
      <Header text={configText.header.signIn} />
      <LeadHeader
        icon={configText.icons.user}
        text={configText.leadText.signIn}
      />
    </div>
  );
}
