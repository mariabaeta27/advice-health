import Notification from "./Notification"
import { NotificationNew } from '../../types'


const Notifications = ({ notifications }: {
  notifications: NotificationNew[] | undefined
}) => {
  return (notifications?.map((notification: NotificationNew) => (
    <div key={notification.id}>
      <Notification notification={{ ...notification }} />
    </div>
  )))
}

export default Notifications