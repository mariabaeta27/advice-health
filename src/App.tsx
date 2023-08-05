// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Col, Container, Row } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <Container fluid>
      <Row className="cabecalho">
        <Col>Cabeçalho</Col>
      </Row>
      <Row className='body'>
        <Col md={2} className='navBar'>Navbar</Col>
        <Col md={8} className='bg-sucess'>Body</Col>
      </Row>
    </Container>
  )

}

export default App
