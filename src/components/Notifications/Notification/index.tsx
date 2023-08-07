
import { Card } from "react-bootstrap";
import './Notification.css'
import { Notification as NotificationTypes } from '../.../../../../types'

const Notification = ({ notification }: {
  notification: NotificationTypes
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