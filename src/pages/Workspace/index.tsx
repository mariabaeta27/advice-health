/* eslint-disable @typescript-eslint/no-explicit-any */
import './Workspace.css'
import { Card } from 'react-bootstrap'
import { Calendar, Notifications, Search, Tables } from '../../components'
import { headersTableWorkspace } from '../../constants'
import { useEffect, useState } from 'react'
import { Notification, Schedule } from '../../types'

const Workspace = () => {

  const cols = ['status', 'patitent', 'date', 'time', 'doctor', 'procedure']

  const [nativeBody, setNativeBody] = useState<Schedule[]>()
  const [filterBody, setFilterBody] = useState<Schedule[]>()
  const [invoicing, Setinvoicing] = useState<number>()


  const [notificantons, setNotificantons] = useState<Notification[]>()

  const getData = () => {
    const bdSchedule = localStorage.getItem('bdSchedule')
    const bdNotifications = localStorage.getItem('bdNotifications')
    const schedule = bdSchedule && JSON.parse(bdSchedule)
    const notificantons = bdNotifications && JSON.parse(bdNotifications)

    setNativeBody(schedule)
    setFilterBody(schedule)
    setNotificantons(notificantons)

    console.log(schedule)
    const value = schedule.reduce((total: number, shedule: Schedule) => total + Number(shedule?.value), 0)
    Setinvoicing(value)

  }

  useEffect(() => {
    getData()
  }, [])

  const handleChecked = (id: number) => {
    const newBody = nativeBody?.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          answered: !item?.answered
        }
      } else {
        return { ...item }
      }
    })
    setNativeBody(newBody)
    setFilterBody(newBody)
    localStorage.setItem('bdSchedule', JSON.stringify(newBody))
  }

  const bodySeg: any = []

  filterBody?.map((item: any) => {
    const data = {
      status: {
        children: <input type="checkbox" checked={item?.answered} onChange={() => handleChecked(item?.id)} />
      },
      patitent: {
        children: item?.patient
      },
      date: {
        children: item.date
      },
      time: {
        children: item.time
      },
      doctor: {
        children: item.doctor
      },
      procedure: {
        children: item.procedure
      }
    }
    bodySeg.push(data)
  })




  const search = (value: string) => {
    const newBody = nativeBody?.filter(({ patient }) => patient && patient.toLowerCase().includes(value.toLowerCase()))
    setFilterBody(newBody)
  }

  const deleteSeach = () => {
    setFilterBody(nativeBody)
  }

  return (
    <div className='workspace'>
      <div className='workspace-primary'>
        <div>
          <Search search={search} deleteSeach={deleteSeach} />
        </div>
        <div className='dashboard'>
          <h2 className='dashboard-title'>Dashboad</h2>
          <div className='cards'>
            <div>
              <Card className='card-primary'>
                <p>Agendamentos</p>
                <img src="../../../public/grafic.jpeg" alt="grafic" />
              </Card>
            </div>
            <div>
              <Card className='card-secundary'>
                <h5>Papelaria</h5>
                <p>Receituários, Ficha de Anaminese, ...</p>
              </Card>
              <Card className='card-secundary'>
                <h5 style={{ marginTop: '50px' }}>Raio x</h5>
              </Card>
            </div>
          </div>
        </div>
        <div className='notice'>
          <h3 className='notice-title'>Avisos / Lembrentes</h3>
          <div>
            <Tables headers={headersTableWorkspace} bodyTable={bodySeg} columns={cols} />
          </div>
          <div className='informations'>
            <p>Atendimentos do dia: <span>{nativeBody?.length}</span></p>
            <p>Paciente atendidos do dia: <span>{nativeBody?.filter((item) => item?.answered).length}</span></p>
            <p>Faturamento <span>{`R$ ${invoicing},00`}</span></p>
          </div>
        </div>
      </div>
      <div>
        <div className='workspace-secundary'>
          <div className='workspace-calendar'>
            <Calendar />
          </div>
          <div className='workspace-notificantons'>
            <Notifications notifications={notificantons} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Workspace