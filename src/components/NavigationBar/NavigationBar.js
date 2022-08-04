import logo from '../../img/logo.png'
import './style/NavigationBar.css'

const Header = () => {
  // Função scrollWin recebe um valor de id e faz scroll para sessão correspondente.

  // Função criada devido a necessidade de fechar o offcanvas e em seguida fazer
  // a movimentação para a sessão correspondente
  function scrollWin(e) {
    setTimeout(() => {
      //Replace para tornar o id igual ao da sessão correspondente
      const element = document.getElementById(`${e.replace('Link', '')}`)
      element.scrollIntoView()
    }, 400)
  }

  return (
    <div className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
      <div className="container">
        <div className="logo-area">
          <a className="navbar-brand logo" href="#session-header">
            <img src={logo} alt="logo burguer show" />
            BURGUER SHOW
          </a>
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-light"
              id="offcanvasNavbarLabel"
            >
              Menu Principal
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <button
                  className="navbar-button"
                  aria-current="page"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                  id="session-highLink"
                >
                  Destaques
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="navbar-button"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item" id="session-combosLink">
                    Combos
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="navbar-button"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item" id="session-reservationLink">
                    Reservas
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="navbar-button"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item" id="session-contactLink">
                    Contatos
                  </div>
                </button>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
