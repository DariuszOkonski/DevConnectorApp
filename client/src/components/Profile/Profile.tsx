import { configText } from '../../config/config.text';
import './Profile.css';
import Button from '../Button/Button';

interface ProfileProps {
  id: number;
  name: string;
  position: string;
  address: string;
  skills: string[];
}

export default function Profile({
  id,
  name,
  position,
  address,
  skills,
}: ProfileProps) {
  return (
    <div className='Profile'>
      <div className='Profile__image'>
        <img
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
          alt=''
        />
      </div>
      <div className='Profile__credentials'>
        <h2 className='Profile__name'>{name}</h2>
        <p className='Profile__paragraph'>{position}</p>
        <p className='Profile__paragraph'>{address}</p>
        <Button text={configText.button.viewProfile} secondaryButton />
      </div>
      <div className='Profile__skills'>
        <ul className='Profile__list'>
          {skills.map((skill) => (
            <li key={skill}>
              <i className={configText.icons.check}></i> {skill}
            </li>
          ))}
          {/* <li>
            <i className={configText.icons.check}></i> HTML
          </li>
          <li>
            <i className={configText.icons.check}></i> CSS
          </li>
          <li>
            <i className={configText.icons.check}></i> JavaScript
          </li>
          <li>
            <i className={configText.icons.check}></i> Python
          </li>
          <li>
            <i className={configText.icons.check}></i> C#
          </li> */}
        </ul>
      </div>
    </div>
  );
}
