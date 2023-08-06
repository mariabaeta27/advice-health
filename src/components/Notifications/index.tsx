import Notification from "./Notification"


const Notifications = ({ notifications }: {
  notifications: {
    id: number;
    text: string;
    subText: string;
  }[]
}) => {
  return (notifications.map((notification: {
    id: number;
    text: string;
    subText: string;
  }) => (
    <Notification notification={{ ...notification }} />)
  )
  )
}

export default Notifications