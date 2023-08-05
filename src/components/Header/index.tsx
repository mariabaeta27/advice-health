import { UserCircleIcon } from '@heroicons/react/24/outline'
import './Header.css'
import { Card, Col, Container, Row } from "react-bootstrap"

const Header = () => {

  return (
    <Container fluid>
      <Row>
        <Col className="card-title" md={6}>
          <h1 className='title'>AdviceHealth</h1>
          <p className='sub-title'>Testes Prático</p>
        </Col>
        <Col md={2} className='user'>
          <Card className={'card'}>
            <UserCircleIcon style={{ color: '#9b9b9b' }} />
          </Card>
          <p className='sub-title-user'>User</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Header