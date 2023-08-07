import Notification from "./Notification"
import { Notification as NotificationTypes } from '../../types'


const Notifications = ({ notifications }: {
  notifications: {
    id: number;
    text: string;
    subText: string;
  }[]
}) => {
  return (notifications.map((notification: NotificationTypes) => (
    <div key={notification.id}>
      <Notification notification={{ ...notification }} />
    </div>
  )))
}

export default Notifications