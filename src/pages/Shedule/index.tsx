import { Calendar, Notifications, Times } from '../../components'
import './Shedule.css'

const Shedule = () => {
  return (
    <div className='shedule'>
      <div className='shedule-primary'>
        <h2 className='shedule-title'>Medicos</h2>
        <Notifications />
        <div style={{ marginTop: '10px' }}>
          <Calendar />
        </div>
      </div>
      <div className='shedule-secundary'>
        <h3>20/Ago 2023</h3>
        <Times />
      </div>
    </div>
  )
}

export default Shedule