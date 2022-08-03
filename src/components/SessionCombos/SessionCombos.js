import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'

import './style/SessionCombos.css'

import combo01 from '../../img/combo01.png'
import combo02 from '../../img/combo02.png'
import combo03 from '../../img/combo03.png'
import combo04 from '../../img/combo04.png'

function SessionBurguers() {
  return (
    <div className="session-combos-area bg-light" id="session-combos">
      <Container>
        <div className="mt-4 mb-4 session-combos-title2">
          <h1>COMBOS ESPECIAIS</h1>
        </div>
        <h3>
          <Badge bg="warning">Promoções</Badge>
        </h3>

        <p>
          Na compra de 2 combos você participa de um sorteio para um brinde
          surpresa!
        </p>

        <Row xs={2} md={2} lg={4}>
          <Col>
            <Card className="border-0 shadow-lg p-1 mt-3">
              <Card.Img variant="top" src={combo01} alt="combo 01"></Card.Img>
              <Card.Body>
                <Card.Title className="card-combo-title">Combo 01</Card.Title>
                <Badge>R$ 35,00</Badge>
                <Card.Text>X-Salada + Molho + Batata Frita</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="border-0 shadow-lg p-1 mt-3">
              <Card.Img variant="top" src={combo02} alt="combo 02"></Card.Img>
              <Card.Body>
                <Card.Title className="card-combo-title">Combo 02</Card.Title>
                <Badge>R$ 40,00</Badge>
                <Card.Text>2 Big-Salada + Molho + Batata Frita</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="border-0 shadow-lg p-1 mt-3">
              <Card.Img variant="top" src={combo03} alt="combo 03"></Card.Img>
              <Card.Body>
                <Card.Title className="card-combo-title">Combo 03</Card.Title>
                <Badge>R$ 35,00</Badge>
                <Card.Text>X-Salada + Molho + Batata Frita</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="border-0 shadow-lg p-1 mt-3">
              <Card.Img variant="top" src={combo04} alt="combo 04"></Card.Img>
              <Card.Body>
                <Card.Title className="card-combo-title">Combo 04</Card.Title>
                <Badge>R$ 39,90</Badge>
                <Card.Text>X-Salada + Molho + Batata Frita</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SessionBurguers
