import Notification from "./Notification"

const notifications = [
  { id: 1, text: 'Pagamento recebido', subText: 'Paciente Luiz' },
  { id: 2, text: 'Lembrete de consulta', subText: 'Paciente Fernanda' },
  { id: 3, text: 'Pagamento recebido', subText: 'Paciente Fernanda' }
]


const Notifications = () => {
  return (notifications.map((notification: {
    id: number;
    text: string;
    subText: string;
  }) => <Notification notification={notification} />)
  )
}

export default Notifications