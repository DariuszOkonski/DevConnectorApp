import React from 'react';
import Button from '../../components/Button/Button';
import { configText } from '../../config/config.text';
import { endpoints } from '../../config/config.endpoints';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='Home__header'>{configText.home.header}</h1>
      <p className='Home__paragraph'>{configText.home.paragraph}</p>

      <div>
        <Button
          path={endpoints.register()}
          text={configText.button.signUp}
          secondaryButton
        />
        <Button path={endpoints.login()} text={configText.button.login} />
      </div>
    </div>
  );
}
