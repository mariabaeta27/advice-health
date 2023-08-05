import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Header } from './components'

function App() {

  return (
    <Container fluid>
      <Row className="header shadow-sm  mb-2 bg-body-tertiary rounded">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='body'>
        <Col md={2} className='navBar'>Navbar</Col>
        <Col md={8} className='bg-sucess'>Body</Col>
      </Row>
    </Container>
  )

}

export default App
