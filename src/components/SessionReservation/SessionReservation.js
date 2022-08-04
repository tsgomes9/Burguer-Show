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
          <div className="text-center mb-4">
            <Badge className="bg-warning mb-4">RESERVA</Badge>
            <h1 className="session-reservation-title text-align-center">
              FAÇA SUA RESERVA
            </h1>
          </div>
          <Row xs={1} sm={1} lg={2}>
            <Col>
              <label for="name">Nome</label>
              <input className="m-0" type="text" id="name"></input>
            </Col>
            <Col>
              <label for="email">E-mail</label>
              <input className="m-0" type="email" id="email"></input>
            </Col>
          </Row>
          <Row xs={2} className="mt-3">
            <Col>
              <label for="date">Data</label>

              <input
                className="m-0"
                type="date"
                min={dataAtual()}
                id="date"
              ></input>
            </Col>
            <Col>
              <label for="hour">Horário</label>

              <input
                className="m-0"
                type="time"
                min="12:00"
                max="18:00"
                id="hour"
              ></input>
            </Col>
          </Row>

          <Row xs={1} sm={1} lg={2}>
            <Col className="mt-3">
              <label for="quantity">Quantidade</label>

              <input
                className="m-0"
                type="number"
                min="1"
                id="quantity"
              ></input>
            </Col>
            <Col className="mt-3">
              <label for="special">Necessidades especiais?</label>
              <select id="special" className="m-0">
                <option>Sim</option>
                <option>Não</option>
              </select>
            </Col>
          </Row>
          <div className="text-center">
            <Button
              variant="outline-warning"
              className="session-reservation-button"
            >
              CONFIRMAR RESERVA
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SessionReservation
