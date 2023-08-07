import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Calendar, UserModal, Notifications, Times } from '../../components'

import './Shedule.css'
import { times } from '../../constants'
import { useState } from 'react'

const notificationsShedule = [
  { id: 1, text: 'Dr. Felipe Baeta', subText: 'Ortodontista', icon: <UserCircleIcon /> },
  { id: 2, text: 'Dra. Gabrielly', subText: 'Odontopediatra', icon: <UserCircleIcon /> },
  { id: 3, text: 'Ana Baeta', subText: 'Cirurgia Dentista', icon: <UserCircleIcon /> }
]

const Shedule = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='shedule'>
        <div className='shedule-primary'>
          <h2 className='shedule-title'>Medicos</h2>
          <Notifications notifications={notificationsShedule} />
          <div style={{ marginTop: '10px' }}>
            <Calendar />
          </div>
        </div>
        <div className='shedule-secundary'>
          <h3>20/Ago 2023</h3>
          {times.map((time) => <Times time={time} setOpenModal={setOpen} />)}
        </div>
      </div>
      <div>
        {
          open && (
            <UserModal />
          )
        }
      </div>
    </>
  )
}

export default Shedule