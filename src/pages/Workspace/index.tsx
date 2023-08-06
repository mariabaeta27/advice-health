
import { CalendarIcon, CheckCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './Workspace.css'
import { Card } from 'react-bootstrap'
import { Calendar, Notifications, Tables } from '../../components'
import { bodyTableWorkspace, headersTableWorkspace } from '../../constants'



const notificationsWorkspace = [
  { id: 1, text: 'Pagamento recebido', subText: 'Paciente Luiz', icon: <CheckCircleIcon /> },
  { id: 2, text: 'Lembrete de consulta', subText: 'Paciente Fernanda', icon: <CalendarIcon /> },
  { id: 3, text: 'Pagamento recebido', subText: 'Paciente Fernanda', icon: <CheckCircleIcon /> }
]


const Workspace = () => {

  return (
    <div className='workspace'>
      <div className='workspace-primary'>
        <div>
          <input
            type="text"
            className='input-card-primary'
            placeholder='Buscar'
          />
          <MagnifyingGlassIcon className='icon-query' />
        </div>
        <div className='dashboard'>
          <h2 className='dashboard-title'>Dashboad</h2>
          <div className='cards'>
            <div>
              <Card className='card-primary' />
            </div>
            <div>
              <Card className='card-secundary' />
              <Card className='card-secundary' />
            </div>
          </div>
        </div>
        <div className='notice'>
          <h3 className='notice-title'>Avisos / Lembrentes</h3>
          <div>
            <Tables headers={headersTableWorkspace} bodyTable={bodyTableWorkspace} />
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