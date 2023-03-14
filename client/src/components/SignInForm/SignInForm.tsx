import './SignInForm.css';
import { configText } from '../../config/config.text';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import InfoText from '../InfoText/InfoText';

export default function SignInForm() {
  return (
    <form className='SignInForm'>
      <InputText placeHolder={configText.inputText.emailAddress} />
      <InputText placeHolder={configText.inputText.password} />

      <Button path='/' text={configText.button.login} secondaryButton />

      <InfoText
        text={configText.infoText.signIn.text}
        link={configText.infoText.signIn.link}
        path='/register'
      />
    </form>
  );
}
