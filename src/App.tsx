import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, Navbar } from './components'
import { useEffect, useState } from 'react'
import { BuildingOfficeIcon, CalendarDaysIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Route, Routes } from 'react-router-dom'
import { Query, Shedule, Workspace } from './pages'
import { bodyTableWorkspace, patients, times } from './constants'


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
    const keyBodyTableWorkspace = localStorage.getItem('bodyTableWorkspace')
    const keyPatients = localStorage.getItem('patients')
    const keyTimes = localStorage.getItem('times')
    if (!keyBodyTableWorkspace) {
      localStorage.setItem('bodyTableWorkspace', JSON.stringify(bodyTableWorkspace))
    }
    if (!keyPatients) {
      localStorage.setItem('patients', JSON.stringify(patients))
    }
    if (!keyTimes) {
      localStorage.setItem('times', JSON.stringify(times))
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
