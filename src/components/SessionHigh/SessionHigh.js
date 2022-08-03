import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import burguer01 from '../../img/burguer01.jpg'
import burguer02 from '../../img/burguer02.jpg'
import burguer03 from '../../img/burguer03.jpg'

import './style/SessionHigh.css'

function SessionHigh() {
  return (
    <div className="session-high-area bg-light" id="session-high">
      <Container>
        <Row xs={1} lg={2} className="d-flex justify-content-center">
          <div className="p-2">
            <Card
              className="card-high p-4"
              style={{ backgroundImage: `url(${burguer02})` }}
              alt="burguer01"
            >
              <Card.Title className="card-high-title">
                DUPLA IMPLACÁVEL
              </Card.Title>
              <Card.Text className="card-high-text">
                Big Duplo Cheddar
              </Card.Text>
              <Card.Text className="card-high-text2">com e sem bacon</Card.Text>
              {/* <Badge className="mt-2"> R$ 35,00 </Badge> */}
            </Card>
          </div>

          <div className="p-2">
            <Card
              className="card-high02 p-4 mb-3"
              style={{ backgroundImage: `url(${burguer01})` }}
              alt="burguer02"
            >
              <Card.Title className="card-high-title">O MAIS PEDIDO</Card.Title>
              <Card.Text className="card-high-text">
                Mega Cheddar Triplo
              </Card.Text>
              {/* <Badge className="mt-2"> R$ 20,00 </Badge> */}
            </Card>

            <Card
              className="card-high02 p-4"
              style={{ backgroundImage: `url(${burguer03})` }}
              alt="burguer03"
            >
              <Card.Title className="card-high-title">
                MAIS QUE VARIEDADE
              </Card.Title>
              <Card.Text className="card-high-text">
                os melhores ingredientes
              </Card.Text>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default SessionHigh
