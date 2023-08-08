import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, Navbar } from './components'
import { useEffect, useState } from 'react'
import { BuildingOfficeIcon, CalendarDaysIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Route, Routes } from 'react-router-dom'
import { Query, Shedule, Workspace } from './pages'
import { doctors, notifications, patients, schedule, timesSchedule } from './constants'


const routes = [
  {
    label: 'Área de Trabalho',
    icon: <BuildingOfficeIcon data-toggle="tooltip" data-placement="right" title="Área de trabalho" />,
    route: '/',
    element: <Workspace />
  },
  {
    label: 'Agendamento de Consulta',
    icon: <CalendarDaysIcon data-toggle="tooltip" data-placement="right" title="Agendamento de consulta" />,
    route: '/agendamento-de-consulta',
    element: <Shedule />
  },
  {
    label: 'Consulta de Agendamentos',
    icon: <MagnifyingGlassIcon data-toggle="tooltip" data-placement="right" title="Consulta de Agendamento" />,
    route: '/consulta-de-agendamentos',
    element: <Query />

  }
]



function App() {
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    const bdPatients = localStorage.getItem('bdPatients')
    const bdDoctors = localStorage.getItem('bdDoctors')
    const bdTimesSchedule = localStorage.getItem('bdTimesSchedule')
    const bdSchedule = localStorage.getItem('bdSchedule')
    const bdNotifications = localStorage.getItem('bdNotifications')


    if (!bdPatients) {
      localStorage.setItem('bdPatients', JSON.stringify(patients))
    }
    if (!bdDoctors) {
      localStorage.setItem('bdDoctors', JSON.stringify(doctors))
    }
    if (!bdTimesSchedule) {
      localStorage.setItem('bdTimesSchedule', JSON.stringify(timesSchedule))
    }
    if (!bdSchedule) {
      localStorage.setItem('bdSchedule', JSON.stringify(schedule))
    }
    if (!bdNotifications) {
      localStorage.setItem('bdNotifications', JSON.stringify(notifications))
    }
  }, [])

  return (
    <Container fluid>
      <Row className="header shadow-sm mb-1 bg-body-tertiary rounded">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='body'>
        <Col md={1} className='navBar' style={{ width: open ? '60px' : '30px' }}>
          <Navbar open={open} setOpen={setOpen} routes={routes} />
        </Col>
        <Col md={8} className='bg-sucess'>


          <Routes>
            {routes.map((route) => (
              <Route key={route.label} path={route?.route} element={route?.element} />
            ))}
          </Routes>
        </Col>
      </Row>
    </Container>
  )

}

export default App
