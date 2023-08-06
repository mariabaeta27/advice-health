
import { Card } from "react-bootstrap";
import './Notification.css'

const Notification = ({ notification }: {
  notification: {
    id: number;
    text: string;
    subText: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    icon?: any
  }
}) => {
  return (
    <div key={notification?.id} className="notifications">
      <div className="notifications-card">
        <Card className={'notification-card'}>
          {notification?.icon}
        </Card>
      </div>
      <div className="notifications-text">
        <div>
          <h4>{notification?.text}</h4>
        </div>
        <div>
          <h5>{notification.subText}</h5>
        </div>
      </div>
    </div>
  )
}

export default Notification