
import { Card } from "react-bootstrap";
import './Notification.css'
import { useEffect, useState } from "react";
import { CalendarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { NotificationNew } from "../../../types";

const Notification = ({ notification }: {
  notification: NotificationNew
}) => {
  const [icon, setIcon] = useState(<CheckCircleIcon />)
  const [title, setTitle] = useState('Pagamento realizado')

  useEffect(() => {
    if (notification.type !== 'payment' && notification.type === 'shedule') {
      setIcon(<CalendarIcon />)
      setTitle('Consulta Agendada')
    }
  }, [notification])


  return (
    <div key={notification?.id} className="notifications">
      <div className="notifications-card">
        <Card className={'notification-card'}>
          {icon}
        </Card>
      </div>
      <div className="notifications-text">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <p>Paciente: {notification.informations[0].name}</p>

          <span>
            {`Data ${notification.type === 'payment' ? 'do pagamento' : 'da consulta'}:`}
            <span>{notification.type === 'payment' ? `${notification.informations[0].datePayment}` : `${notification.informations[0].dateSheduled}`}</span>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Notification