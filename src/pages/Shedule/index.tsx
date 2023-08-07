import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Calendar, AddShedule, Notifications, Times } from '../../components'

import './Shedule.css'
import { patients, times } from '../../constants'
import { useEffect, useState } from 'react'
import { Patient, Time } from '../../types'

const notificationsShedule = [
  { id: 1, text: 'Dr. Felipe Baeta', subText: 'Ortodontista', icon: <UserCircleIcon /> },
  { id: 2, text: 'Dra. Gabrielly', subText: 'Odontopediatra', icon: <UserCircleIcon /> },
  { id: 3, text: 'Ana Baeta', subText: 'Cirurgia Dentista', icon: <UserCircleIcon /> }
]

const Shedule = () => {
  const [open, setOpen] = useState(false)
  const [contolerTimes, setControlerTimes] = useState<Time[]>()
  const [timeSelected, setTime] = useState<Time | undefined>()
  const [patient, setPatient] = useState<Patient | undefined>()
  const [loading, setLoading] = useState<boolean>(false)




  useEffect(() => {
    setControlerTimes(times)
  }, [])

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const onSubmit = (form: any) => {
    console.log(timeSelected)
    setLoading(true)
    form.preventDefault()
    const { name, cpf, bday, address, service, absent } = form.target;
    if (!absent.checked) {
      if (patient) {
        patients.map((p) => {
          if (p.id === patient.id) {
            return {
              ...p,
              name: name.value,
              document: cpf?.value,
              bday: bday?.value,
              address: address?.value,
            }
          } else {
            return {
              ...p
            }
          }
        })
      } else {
        patients.push({
          id: patients?.length,
          name: name.value,
          document: cpf?.value,
          bday: bday?.value,
          address: address?.value,
        })
      }
    }
    const newTimes = times.map((time) => {
      if (timeSelected?.block && time.id === timeSelected?.id && !absent.checked) {
        return {
          ...time,
          schedule: {
            title: `Paciente ${name?.value}`,
            subtext: service?.value,
            patientId: patients?.length,
          },
          block: absent?.checked
        }
      } else if (time.id === timeSelected?.id && absent.checked) {
        return {
          ...time,
          block: absent?.checked
        }
      } else {
        return time
      }
    })
    setControlerTimes(newTimes)
    setLoading(false)
  }

  const addQuery = (time: Time) => {
    setLoading(true)
    setOpen(true);
    setTime(time)
    setLoading(false)
  }

  const editQuery = (time: Time) => {
    setLoading(true)
    setOpen(true);
    setTime(time)
    const newPatient = patients?.filter((p) => p.id === timeSelected?.schedule?.patientId && p)
    setPatient(newPatient[0])
    setLoading(false)
  }

  const deleteQuery = (time: Time) => {
    const newTimes = times.map((t) => {
      if (t.id === time.id) {
        return {
          ...t,
          schedule: undefined
        }
      } else {
        return {
          ...t
        }
      }
    })
    setControlerTimes(newTimes)
  }

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
          {contolerTimes?.map((time) =>
            <div key={time.id}>
              <Times time={time} addQuery={addQuery} editQuery={editQuery} deleteQuery={deleteQuery} />
            </div>)}
        </div>
      </div>
      <AddShedule open={open && !loading} setOpen={setOpen} onSubmit={onSubmit} time={timeSelected} patient={patient} />
    </>
  )
}

export default Shedule