
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shedule.css'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Calendar, AddShedule, Notifications, Times } from '../../components'

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
  const [timeSelected, setTimeSelected] = useState<Time | undefined>()
  const [patientEdit, setPatientEdit] = useState<Patient | undefined>()
  const [timesAvailable, setTimesAvailable] = useState<Time | undefined>()


  const [patientsFormated, setPatientsFormated] = useState<Patient[] | undefined>()


  const getData = () => {
    const times = localStorage.getItem('times')
    const patients = localStorage.getItem('patients')
    const availableTimes = times && JSON.parse(times)?.filter((t: Time) => !t.block && t.schedule === undefined)

    setControlerTimes(times && JSON.parse(times))
    setPatientsFormated(patients && JSON.parse(patients))
    setTimesAvailable(availableTimes)
  }

  useEffect(() => {
    getData()
  }, [])


  const postPatient = ({ name, cpf, bday, address }: any) => {
    if (patientEdit) {
      const newPatients = patientsFormated?.map((p) => {
        if (p.id === patientEdit.id) {
          return {
            id: p?.id,
            name: name?.value,
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
      setPatientsFormated(newPatients)
      localStorage.setItem('patients', JSON.stringify(newPatients))
    } else {
      const newPatients = patientsFormated && [...patientsFormated, {
        id: patientsFormated?.length,
        name: name?.value,
        document: cpf?.value,
        bday: bday?.value,
        address: address?.value,
      }]
      setPatientsFormated(newPatients)
      localStorage.setItem('patients', JSON.stringify(newPatients))
    }
  }

  const onSubmit = (form: any) => {
    form.preventDefault()

    const { name, service, absent } = form.target;


    if (!absent.checked && !patientEdit) {
      postPatient(form.target)
    }

    const newTimes = contolerTimes?.map((time) => {
      if (time.id === timeSelected?.id && !absent.checked) {
        return {
          ...time,
          schedule: name?.value && service?.value && patientsFormated?.length ? {
            title: name?.value,
            subtext: service?.value,
            patientId: patientEdit ? patientEdit?.id : patientsFormated?.length,
          } : undefined,
          block: absent?.checked
        }
      } else if (time.id === timeSelected?.id && absent.checked) {
        return {
          ...time,
          schedule: undefined,
          block: absent?.checked,
        }
      } else {
        return time
      }
    })

    setControlerTimes(newTimes)
    localStorage.setItem('times', JSON.stringify(newTimes))
    setOpen(false)
  }

  const addQuery = (time: Time) => {
    setOpen(true);
    setTimeSelected(time)
    setPatientEdit(undefined)
  }

  const editQuery = (time: Time) => {
    setTimeSelected(time)
    const newPatient = patientsFormated?.filter((p) => p.id === time?.schedule?.patientId)
    setPatientEdit(newPatient && newPatient[0])
    setOpen(true);
  }

  const deleteQuery = (time: Time) => {
    const newTimes = contolerTimes?.map((t) => {
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
    localStorage.setItem('times', JSON.stringify(newTimes))
  }



  const editTime = (newTime: string, time: Time) => {
    const newTimes = contolerTimes?.map((t) => {
      if (t.time === newTime) {
        return {
          ...time,
          time: newTime
        }
      } else if (t.time === time.time) {
        return {
          ...t,
          schedule: undefined
        }
      } else {
        return t
      }
    })
    setControlerTimes(newTimes)
    localStorage.setItem('times', JSON.stringify(newTimes))
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
              <Times time={time} addQuery={addQuery} editQuery={editQuery} deleteQuery={deleteQuery} times={timesAvailable} editTime={editTime} />
            </div>)}
        </div>
      </div>
      <AddShedule open={open} setOpen={setOpen} onSubmit={onSubmit} time={timeSelected} patient={patientEdit} />

    </>
  )
}

export default Shedule