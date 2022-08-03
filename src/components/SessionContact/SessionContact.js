import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'

import logo from '../../img/logo.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'

import './style/SessionContact.css'

function SessionContact() {
  return (
    <div className="bg-dark" id="session-contact">
      <Container>
        <Row className="session-contact-area01" xs={1} md={1} lg={2}>
          <Col className="p-4">
            <div className="session-contact-logo">
              <img
                src={logo}
                className="session-contact-img"
                alt="logo burguer show"
              />
              <h1 className="session-contact-title">BURGUER SHOW</h1>
            </div>

            <p className="mt-4 text-light text-center">
              Burguer show é uma empresa fictícia criada para fins
              demonstrativos deste projeto. Esta página foi desenvolvida
              utilizando ReactJS, Bootstrap e Sass. Se você é desenvolvedor e
              quiser veriticar o código do projeto, é só acessar o link do
              Github. Caso queira conversar, deixo aqui meus contatos.
            </p>
          </Col>
          <Col>
            <div className="session-contact-area02">
              <div>
                {/* <div className="d-flex justify-content-center">
                  <span className="material-symbols-outlined mx-1">
                    pin_drop
                  </span>
                  <h3>Rua ABC, n.20 Bairro Novo</h3>
                </div> */}
                <div className="d-flex justify-content-center mb-4">
                  <span className="material-symbols-outlined mx-1">mail</span>
                  <h3>tsg.gomes9@gmail.com</h3>
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    className="text-decoration-none"
                    href="https://www.linkedin.com/in/thiago-gomes28/"
                    target="_blank"
                  >
                    <i className="devicon-linkedin-plain text-light fs-4 mx-2"></i>
                  </a>

                  <a
                    className="text-decoration-none"
                    href="https://github.com/tsgomes9"
                    target="_blank"
                  >
                    <i className="devicon-github-original text-light fs-4 mx-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="bg-dark">
          <div className="d-flex justify-content-center session-contact-f">
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default SessionContact
