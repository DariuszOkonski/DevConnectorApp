import { configText } from '../../config/config.text';
import './Alert.css';

interface AlertProps {
  message?: string;
  alertType?: string;
}

export default function Alert({
  message = configText.alert.defaultMessage,
  alertType = configText.alert.alertDanger,
}: AlertProps) {
  const alert = `Alert ${alertType}`;

  return <div className={alert}>{message}</div>;
}
