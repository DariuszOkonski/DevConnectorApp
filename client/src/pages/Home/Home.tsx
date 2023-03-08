import React from 'react';
import Button from '../../components/Button/Button';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='Home__header'>Developer Connector</h1>
      <p className='Home__paragraph'>
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>

      <div>
        <Button text='Sign Up' secondaryButton />
        <Button text='Login' />
      </div>
    </div>
  );
}
