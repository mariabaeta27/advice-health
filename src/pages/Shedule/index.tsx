/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shedule.css'
import { Calendar, AddShedule, Times, DoctorCard } from '../../components'

import { useEffect, useState } from 'react'
import { Doctor, Patient, Schedule, TimeFormated, Times as Timestypes } from '../../types'


const Shedule = () => {
  const [open, setOpen] = useState(false)
  const [contolerTimes, setControlerTimes] = useState<TimeFormated[] | undefined>()
  const [timeSelected, setTimeSelected] = useState<TimeFormated>()
  const [patientEdit, setPatientEdit] = useState<Patient | undefined>()
  const [timesAvailable, setTimesAvailable] = useState<Timestypes[] | undefined>()
  const [patientsFormated, setPatientsFormated] = useState<Patient[] | undefined>()
  const [doctors, setDoctors] = useState<Doctor[]>()

  const timesAvailableFunc = (times: Timestypes[] | undefined, shedule: Schedule[] | undefined) => {

    const newTimes = times?.filter((t) => !t.absent)
    const differentValues = newTimes?.filter(item1 => {
      const matchingItem = shedule?.find(item2 => item2.time === item1.time);
      return !matchingItem;
    });

    if (differentValues) {
      setTimesAvailable(differentValues)
    }

  }
  const getData = () => {
    const bdTimesSchedule = localStorage.getItem('bdTimesSchedule')
    const bdPatients = localStorage.getItem('bdPatients')
    const bdSchedule = localStorage.getItem('bdSchedule')
    const bdDoctors = localStorage.getItem('bdDoctors')


    const times = bdTimesSchedule && JSON.parse(bdTimesSchedule)
    const patients = bdPatients && JSON.parse(bdPatients)
    const schedule = bdSchedule && JSON.parse(bdSchedule)?.filter((item: any) => !item.canceled)
    const doctors = bdDoctors && JSON.parse(bdDoctors)


    if (schedule && times) {
      timesAvailableFunc(times, schedule)
    }

    const timesFormated: TimeFormated[] = times?.map((t: Timestypes) => {
      return {
        ...t,
        schedule: schedule?.filter((s: Schedule) => {
          if (s?.time === t?.time) {
            return { ...s }
          }
        })[0]
      }
    })
    setDoctors(doctors)
    setControlerTimes(timesFormated)
    setPatientsFormated(patients)
  }

  useEffect(() => {
    getData()
  }, [])

  const postPatient = ({ name, cpf, bday, address }: any) => {
    if (patientEdit) {
      const newPatients = patientsFormated?.map((p) => {
        if (p.id === patientEdit.id) {
          return {
            ...p,
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
      localStorage.setItem('bdPatients', JSON.stringify(newPatients))
    } else {
      const newPatients = patientsFormated && [...patientsFormated, {
        id: patientsFormated.length + 1,
        name: name?.value,
        document: cpf?.value,
        bday: bday?.value,
        address: address?.value,
      }]
      setPatientsFormated(newPatients)
      localStorage.setItem('bdPatients', JSON.stringify(newPatients))

    }
  }

  const onSubmit = (form: any) => {
    // form.defauklValye()
    const { name, service, absent, value, dropdown } = form.target;

    if (!absent.checked && !timeSelected?.absent) {
      postPatient(form.target)
    }

    const bdSchedule = localStorage.getItem('bdSchedule')
    const sheduleId = bdSchedule && JSON.parse(bdSchedule).length + 1

    const newTimes: any = contolerTimes?.map((item) => {
      if (item.id === timeSelected?.id && !absent.checked) {
        console.log('NO IF')
        return {
          ...item,
          absent: false,
          schedule: (name?.value && dropdown?.value, service?.value, value?.value) ? {
            ...item.schedule,
            id: patientEdit ? item?.id : sheduleId,
            patientId: patientEdit ? patientEdit?.id : patientsFormated && patientsFormated[patientsFormated?.length - 1].id,
            answered: false,
            date: '20/08/2023',
            doctor: dropdown?.value,
            patient: name?.value,
            procedure: service?.value,
            time: timeSelected?.time,
            value: value?.value,
            canceled: false,
          } : undefined
        }
      } else if (item.id === timeSelected?.id && absent.checked) {
        return {
          ...item,
          absent: absent?.checked,
          schedule: undefined
        }
      } else {
        return {
          ...item
        }
      }

    })

    console.log(newTimes)

    if (newTimes) {
      const newShedule = newTimes.map((item: TimeFormated) => item?.schedule)
        ?.filter((item: Schedule) => item)
      newShedule && localStorage.setItem('bdSchedule', JSON.stringify(newShedule))
      newTimes.map((item: TimeFormated) => delete item.schedule)
      localStorage.setItem('bdTimesSchedule', JSON.stringify(newTimes))
    }
  }

  const addQuery = (time: TimeFormated) => {
    setOpen(true);
    setTimeSelected(time)
    setPatientEdit(undefined)
  }

  const editQuery = (time: TimeFormated) => {
    setTimeSelected(time)
    const newPatient = patientsFormated?.filter((p) => p.id === time?.schedule?.patientId)
    setPatientEdit(newPatient && newPatient[0])
    setOpen(true);
  }

  const deleteQuery = (time: TimeFormated) => {
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
    const bdSchedule = localStorage.getItem('bdSchedule')
    if (bdSchedule) {
      const newShedule = JSON.parse(bdSchedule)?.map((item: Schedule) => {
        if (item.id === time?.schedule?.id) {
          return {
            ...item,
            canceled: true
          }
        } else {
          return item
        }
      })

      localStorage.setItem('bdSchedule', JSON.stringify(newShedule))
    }
    setControlerTimes(newTimes)

  }

  const editTime = (newTime: string, time: TimeFormated) => {
    const newTimes: any = contolerTimes?.map((t) => {
      if (t.time === newTime) {
        return {
          ...time,
          time: newTime,
          schedule: {
            ...time.schedule,
            time: newTime
          }
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

    const bdSchedule = localStorage.getItem('bdSchedule')
    const bdTimesSchedule = localStorage.getItem('bdTimesSchedule')

    if (bdSchedule && bdTimesSchedule) {
      const newShedule = JSON.parse(bdSchedule)?.map((item: Schedule) => {
        if (item.id === time?.schedule?.id) {
          return {
            ...item,
            time: newTime
          }
        } else {
          return item
        }
      })
      localStorage.setItem('bdSchedule', JSON.stringify(newShedule))
      timesAvailableFunc(JSON.parse(bdTimesSchedule), newShedule)
    }
    setControlerTimes(newTimes)
  }




  return (
    <>
      <div className='shedule'>
        <div className='shedule-primary'>
          <h2 className='shedule-title'>Medicos</h2>
          {
            doctors?.map((doctor) => <DoctorCard doctor={doctor} />)
          }
          <div style={{ marginTop: '10px', marginLeft: '20px' }}>
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
      <AddShedule open={open} setOpen={setOpen} onSubmit={onSubmit} time={timeSelected} patient={patientEdit} doctors={doctors} />

    </>
  )
}

export default Shedule