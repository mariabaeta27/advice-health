import { Container, Row } from 'react-bootstrap'
import './Calendar.css'
import { useEffect, useState } from 'react'
import { months, weeksDay } from '../../constants'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Calendar = () => {
  const [monthActual, setMonthActual] = useState<{
    id: number;
    name: string;
  }>()

  useEffect(() => {
    const month = new Date().getMonth()
    setMonthActual(months?.filter((i) => i.id === month && i)[0])
  }, [])

  const decrementingMonth = () => {
    if (monthActual?.id && monthActual?.id !== 0) {
      setMonthActual(months?.filter((i) => i.id === (monthActual?.id - 1) && i)[0])
    }
  }

  const addingMonth = () => {
    if (monthActual?.id && monthActual?.id !== 11) {
      setMonthActual(months?.filter((i) => i.id === (monthActual?.id + 1) && i)[0])
    }
  }

  return (
    <Container>
      <Row >
        <div >
          <table className="calendar">
            <thead>
              <tr>
                <th colSpan={7}>
                  <div className='header-calendar'>
                    <ChevronLeftIcon className='chevron-icon' onClick={() => decrementingMonth()} />
                    <p className='title'>{monthActual?.name}</p>
                    <ChevronRightIcon className='chevron-icon' onClick={() => addingMonth()} />
                  </div>
                </th>
              </tr>
              <tr>
                {
                  weeksDay?.map((day: {
                    id: number;
                    name: string;
                  }) => (
                    <th className='week-day' key={day?.id}>{day?.name}</th>
                  ))
                }
              </tr>
            </thead >
            <tbody  >
              <tr>
                <td />
                <td />
                <td className='calendar-td tdEspaco'>1</td>
                <td className='calendar-td tdEspaco'>2</td>
                <td className='calendar-td'>3</td>
                <td className='calendar-td'>4</td>
                <td className='calendar-td'>5 </td>
              </tr>
              <tr>
                <td className='calendar-td'>6</td>
                <td className='calendar-td'>7</td>
                <td className='calendar-td'>8</td>
                <td className='calendar-td'>9</td>
                <td className='calendar-td'>10</td>
                <td className='calendar-td'>11</td>
                <td className='calendar-td'>12</td>
              </tr>
              <tr>
                <td className='calendar-td'>13</td>
                <td className='calendar-td'>14</td>
                <td className='calendar-td'>15</td>
                <td className='calendar-td'>16</td>
                <td className='calendar-td'>17</td>
                <td className='calendar-td'>18</td>
                <td className='calendar-td' >19</td>
              </tr>
              <tr>
                <td className='day'><strong>20</strong></td>
                <td className='calendar-td'>21</td>
                <td className='calendar-td'>22</td>
                <td className='calendar-td'>23</td>
                <td className='calendar-td'>24</td>
                <td className='calendar-td'>25</td>
                <td className='calendar-td'>26</td>
              </tr>
              <tr>
                <td className='calendar-td'>27</td>
                <td className='calendar-td'>28</td>
                <td className='calendar-td'>29</td>
                <td className='calendar-td'>30</td>
                <td className='calendar-td'>31</td>

              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container >
  )
}

export default Calendar