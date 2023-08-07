import { Card } from 'react-bootstrap'
import './Times.css'
import { CalendarDaysIcon, PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const Times = ({ time, setOpenModal }: {
  time: {
    id: number;
    time: string;
    schedule?: {
      title: string;
      subtext: string;
    } | undefined;
    block?: boolean | undefined;
  },
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
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
                  <h4>{time?.schedule?.title}</h4>
                </div>
                <div>
                  <h5>{time?.schedule?.subtext}</h5>
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
                  <h4>Horario bloqueado</h4>
                </div>
              </div>
            </>
          )}
        </div>

        {
          !time?.block && (
            <div className='time-icons'>
              {time.schedule ? (
                <div className='time-icons'>
                  <CalendarDaysIcon className='time-icon' />
                  <TrashIcon className='time-icon' />
                  <PencilIcon className='time-icon' onClick={() => setOpenModal(false)} />
                </div>
              ) : (<PlusCircleIcon className='time-icon' onClick={() => setOpenModal(true)} />)}
            </div>
          )
        }
      </div>
    </>
  )
}

export default Times