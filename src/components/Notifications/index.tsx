import Notification from "./Notification"
import { Notification as NotificationType } from '../../types'


const Notifications = ({ notifications }: {
  notifications: NotificationType[] | undefined
}) => {
  return (notifications?.map((notification: NotificationType) => (
    <div key={notification.id}>
      <Notification notification={{ ...notification }} />
    </div>
  )))
}

export default Notifications