import { Card } from 'react-bootstrap'
import './Times.css'
import { CalendarDaysIcon, PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
const Times = () => {
  return (
    <div className='times'>
      <div className='time'>
        <p>08:00</p>
      </div>
      <div className='time-body '>
        <div>
          <Card className={'time-card'} />
        </div>
        <div className="notifications-text">
          <div>
            <h4>Texto</h4>
          </div>
          <div>
            <h5>Subtext</h5>
          </div>
        </div>
      </div>
      <div className='time-icons'>
        <CalendarDaysIcon className='time-icon' />
        <TrashIcon className='time-icon' />
        <PencilIcon className='time-icon' />
        <PlusCircleIcon className='time-icon' />
      </div>
    </div>
  )
}

export default Times