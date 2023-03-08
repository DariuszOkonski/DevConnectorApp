import React from 'react';
import Button from '../../components/Button/Button';
import { configText } from '../../config/config.text';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='Home__header'>{configText.home.header}</h1>
      <p className='Home__paragraph'>{configText.home.paragraph}</p>

      <div>
        <Button text={configText.button.signUp} secondaryButton />
        <Button text={configText.button.Login} />
      </div>
    </div>
  );
}
