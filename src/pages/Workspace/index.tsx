/* eslint-disable @typescript-eslint/no-explicit-any */
import './Workspace.css'
import { Card } from 'react-bootstrap'
import { Calendar, Notifications, Search, Tables } from '../../components'
import { headersTableWorkspace } from '../../constants'
import { useEffect, useState } from 'react'
import { BodyTableWorkspace, NotificationNew } from '../../types'

const Workspace = () => {

  const cols = ['status', 'patitent', 'date', 'time', 'doctor', 'procedure']

  const [nativeBody, setNativeBody] = useState<BodyTableWorkspace[]>()
  const [filterBody, setFilterBody] = useState<BodyTableWorkspace[]>()


  const [notificantons, setNotificantons] = useState<NotificationNew[]>()

  const getData = () => {
    const bodyTable = localStorage.getItem('bdShedule')
    setNativeBody(bodyTable && JSON.parse(bodyTable))
    setFilterBody(bodyTable && JSON.parse(bodyTable))
    const bdNotifications = localStorage.getItem('bdNotifications')
    setNotificantons(bdNotifications && JSON.parse(bdNotifications))
  }

  useEffect(() => {
    getData()
  }, [])


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





  const body: any = []

  const handleChecked = (id: number) => {
    const newBody = nativeBody?.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item?.status
        }
      } else {
        return { ...item }
      }
    })
    setNativeBody(newBody)
    localStorage.setItem('bodyTableWorkspace', JSON.stringify(newBody))
  }


  filterBody?.map((item: any) => {
    const data = {
      status: {
        children: <input type="checkbox" checked={item?.status} onChange={() => handleChecked(item?.id)} />
      },
      patitent: {
        children: item?.patient
      },
      date: {
        children: item.data
      },
      time: {
        children: item.time
      },
      local: {
        children: 'Consultório Principal'
      },
      priority: {
        children: item.priority
      }
    }
    body.push(data)
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