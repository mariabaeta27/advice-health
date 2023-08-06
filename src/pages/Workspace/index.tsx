
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './Workspace.css'
import { Card } from 'react-bootstrap'
import { Calendar, Notifications, Tables } from '../../components'

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
            <Tables />
          </div>
        </div>
      </div>
      <div>
        <div className='workspace-secundary'>
          <div className='workspace-calendar'>
            <Calendar />
          </div>
          <div className='workspace-notificantonss'>
            <Notifications />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Workspace