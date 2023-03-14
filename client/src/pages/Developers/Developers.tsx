import './Developers.css';
import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import LeadHeader from '../../components/LeadHeader/LeadHeader';
import { configText } from '../../config/config.text';
import Profiles from '../../components/Profiles/Profiles';

export default function Developers() {
  return (
    <div className='Developers'>
      <Alert />
      <Header text={configText.header.developers} />
      <LeadHeader
        icon={configText.icons.develop}
        text={configText.leadText.developers}
      />
      <Profiles />
    </div>
  );
}
