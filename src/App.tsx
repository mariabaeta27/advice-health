import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, Navbar } from './components'
import { useState } from 'react'
import { BuildingOfficeIcon, CalendarDaysIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const routes = [
  {
    label: 'Área de Trabalho',
    icon: <BuildingOfficeIcon data-toggle="tooltip" data-placement="right" title="Área de trabalho" />,
    route: '/',
  },
  {
    label: 'Agendamento de Consulta',
    icon: <CalendarDaysIcon data-toggle="tooltip" data-placement="right" title="Agendamento de consulta" />,
    route: '/agendamento-de-consulta',

  },
  {
    label: 'Consulta de Agendamentos',
    icon: <MagnifyingGlassIcon data-toggle="tooltip" data-placement="right" title="Consulta de Agendamento" />,
    route: '/consulta-de-agendamentos',

  }
]



function App() {
  const [open, setOpen] = useState<boolean>(true)


  return (
    <Container fluid>
      <Row className="header shadow-sm  mb-1 bg-body-tertiary rounded">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='body'>
        <Col md={1} className='navBar' style={{ width: open ? '40px' : '30px' }}>
          <Navbar open={open} setOpen={setOpen} routes={routes} />
        </Col>
        <Col md={8} className='bg-sucess'>Body</Col>
      </Row>
    </Container>
  )

}

export default App
