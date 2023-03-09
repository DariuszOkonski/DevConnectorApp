import './SignUpForm.css';

import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import InfoText from '../InfoText/InfoText';
import { configText } from '../../config/config.text';

export default function SignUpForm() {
  return (
    <form className='SignUpForm'>
      <InputText placeHolder={configText.inputText.name} />
      <InputText
        placeHolder={configText.inputText.emailAddress}
        info={configText.inputText.emailInfo}
      />
      <InputText placeHolder={configText.inputText.password} />
      <InputText placeHolder={configText.inputText.confirmPassword} />

      <Button text={configText.button.register} secondaryButton />

      <InfoText
        text={configText.infoText.signUp.text}
        link={configText.infoText.signUp.link}
      />
    </form>
  );
}
