import { Card } from 'react-bootstrap'
import './Times.css'
import { CalendarDaysIcon, PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Time } from '../../types'

const Times = ({ time, addQuery, editQuery, deleteQuery }: {
  time: Time,
  addQuery: (time: Time) => void,
  editQuery: (time: Time) => void,
  deleteQuery: (time: Time) => void
}) => {

  return (
    <>
      <div className='times'>
        <div className='time'>
          <p>{time?.time}</p>
        </div>
        <div className='time-body'>
          {time.schedule && (
            <>
              <div>
                <Card className={'time-card'}>
                  <CheckCircleIcon />
                </Card>
              </div>
              <div className="notifications-text">
                <div>
                  <h4 style={{ color: '#4f4d4d' }}>{time?.schedule?.title}</h4>
                </div>
                <div>
                  <h5 style={{ color: '#9b9b9b' }}>{time?.schedule?.subtext}</h5>
                </div>
              </div>
            </>
          )}
          {time.block && (
            <>
              <div>
                <Card className={'time-card'}>
                  <XCircleIcon />
                </Card>
              </div>
              <div className="notifications-text">
                <div>
                  <h4 style={{ color: '#4f4d4d' }}>Horario bloqueado</h4>
                </div>
              </div>
            </>
          )}
        </div>

        {
          !time?.block ? (
            <div className='time-icons'>
              {time.schedule ? (
                <div className='time-icons'>
                  <CalendarDaysIcon className='time-icon' />
                  <TrashIcon className='time-icon' onClick={() => deleteQuery(time)} />
                  <PencilIcon className='time-icon' onClick={() => editQuery(time)} />
                </div>
              ) : (<PlusCircleIcon className='time-icon' onClick={() => addQuery(time)} />)}
            </div>
          ) : (
            <div className='time-icons'>
              <div className='time-icons'>
                <PencilIcon className='time-icon' onClick={() => editQuery(time)} />
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Times