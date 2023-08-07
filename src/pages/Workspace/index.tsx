/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import './Workspace.css'
import { Card } from 'react-bootstrap'
import { Calendar, Notifications, Search, Tables } from '../../components'
import { bodyTableWorkspace, headersTableWorkspace } from '../../constants'
import { useEffect, useState } from 'react'



const notificationsWorkspace = [
  { id: 1, text: 'Pagamento recebido', subText: 'Paciente Luiz', icon: <CheckCircleIcon /> },
  { id: 2, text: 'Lembrete de consulta', subText: 'Paciente Fernanda', icon: <CalendarIcon /> },
  { id: 3, text: 'Pagamento recebido', subText: 'Paciente Fernanda', icon: <CheckCircleIcon /> }
]


const Workspace = () => {

  const cols = ['status', 'patitent', 'date', 'time', 'local', 'priority']

  const [nativeBody, setNativeBody] = useState<Array<{
    id: number;
    status: boolean;
    data: string;
    time: string;
    commitment: string;
    patient: string;
    local: string;
    priority: string;
  }>>()

  useEffect(() => {
    setNativeBody(bodyTableWorkspace)
  }, [])

  const body: any = []

  const handleChecked = (id: number) => {
    const newBody = nativeBody?.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item?.statuss
        }
      } else {
        return { ...item }
      }
    })
    body(newBody)
  }


  nativeBody?.map((item: any) => {
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

  const handleQuery = (value: string) => {
    const newBody = bodyTableWorkspace.filter((item) => item.patient.includes(value) && item)
    setNativeBody(newBody)
  }

  return (
    <div className='workspace'>
      <div className='workspace-primary'>
        <div>
          <Search onClick={handleQuery} />
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
            <Tables headers={headersTableWorkspace} bodyTable={body} columns={cols} />
          </div>
        </div>
      </div>
      <div>
        <div className='workspace-secundary'>
          <div className='workspace-calendar'>
            <Calendar />
          </div>
          <div className='workspace-notificantons'>
            <Notifications notifications={notificationsWorkspace} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Workspace