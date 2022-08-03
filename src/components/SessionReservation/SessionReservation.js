import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Badge from 'react-bootstrap/esm/Badge'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

import './style/SessionReservation.css'

function SessionReservation() {
  function dataAtual() {
    const data = new Date()
    const d = data.getDate()
    const m = data.getMonth()
    const y = data.getFullYear()

    const dtAtual = `${y}-${m < 10 ? 0 : ''}${m + 1}-${d < 10 ? 0 : ''}${d}`

    return dtAtual
  }

  return (
    <div className="session-reservation-area" id="session-reservation">
      <Container>
        <div>
          <Badge className="bg-warning mb-4">RESERVA</Badge>
          <h1 className="session-reservation-title">FAÇA SUA RESERVA</h1>
          <Row xs={1} sm={1} lg={2}>
            <Col>
              <input type="text" placeholder="NOME"></input>
            </Col>
            <Col>
              <input type="email" placeholder="E-MAIL"></input>
            </Col>
          </Row>
          <Row xs={2}>
            <Col>
              <input type="date" min={dataAtual()}></input>
            </Col>
            <Col>
              <input
                type="time"
                min="12:00"
                max="18:00"
                placeholder="HORÁRIO"
              ></input>
            </Col>
          </Row>

          <Row xs={1} sm={1} lg={2}>
            <Col>
              <input type="number" min="1" placeholder="QUANTIDADE"></input>
            </Col>
            <Col>
              <select>
                <option disabled selected>
                  NECESSIDADES ESPECIAIS?
                </option>
                <option>SIM</option>
                <option>NÃO</option>
              </select>
            </Col>
          </Row>
          <Button
            variant="outline-warning"
            className="session-reservation-button"
          >
            CONFIRMAR RESERVA
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default SessionReservation
